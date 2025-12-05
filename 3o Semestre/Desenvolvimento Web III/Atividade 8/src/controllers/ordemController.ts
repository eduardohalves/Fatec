import { Request, Response } from "express";
import OrdemServico from "../models/ordemServico"; 

export default {
  // Criar ordem
  async criar(req: Request, res: Response) {
    try {
      console.log("BODY RECEBIDO:", req.body); 
      const ordem = await OrdemServico.create(req.body);
      return res.status(201).json(ordem);

    } catch (error) {
      console.error("ERRO AO CRIAR ORDEM:", error);
      return res.status(400).json({
        erro: "Erro ao criar ordem",
        detalhes: error
      });
    }
  },

  // Listar com filtros
  async listar(req: Request, res: Response) {
    try {
      const { titulo, status, prioridade, setor } = req.query;

      const filtros: any = {};

      if (titulo) filtros.titulo = { $regex: String(titulo), $options: "i" };
      if (status) filtros.status = status;
      if (prioridade) filtros.prioridade = prioridade;
      if (setor) filtros.setorSolicitante = setor;

      const ordens = await OrdemServico.find(filtros);
      return res.json(ordens);

    } catch (error) {
      console.error("ERRO AO LISTAR:", error);
      return res.status(500).json({ erro: "Erro ao listar ordens" });
    }
  },

  // Atualizar
  async atualizar(req: Request, res: Response) {
    try {
      const ordem = await OrdemServico.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // retorna atualizado
      );

      if (!ordem) {
        return res.status(404).json({ erro: "Ordem não encontrada" });
      }

      return res.json(ordem);

    } catch (error) {
      console.error("ERRO AO ATUALIZAR:", error);
      return res.status(400).json({ erro: "Erro ao atualizar ordem" });
    }
  },

  // Excluir — somente ordens concluídas
  async excluir(req: Request, res: Response) {
    try {
      const ordem = await OrdemServico.findById(req.params.id);

      if (!ordem) {
        return res.status(404).json({ erro: "Ordem não encontrada" });
      }

      if (ordem.status !== "concluída") {
        return res.status(400).json({
          erro: "Só é permitido excluir ordens concluídas."
        });
      }

      await ordem.deleteOne();
      return res.json({ mensagem: "Ordem excluída com sucesso" });

    } catch (error) {
      console.error("ERRO AO EXCLUIR:", error);
      return res.status(500).json({ erro: "Erro ao excluir ordem" });
    }
  }
};
