import { Request, Response } from "express";
import Disco from "../models/Disco";

export const criarDisco = async (req: Request, res: Response) => {
  try {
    const novoDisco = await Disco.create(req.body);
    res.status(201).json(novoDisco);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar disco", error });
  }
};

export const listarDiscos = async (req: Request, res: Response) => {
  try {
    const discos = await Disco.find();
    res.status(200).json(discos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar discos", error });
  }
};

export const buscarDisco = async (req: Request, res: Response) => {
  try {
    const disco = await Disco.findById(req.params.id);
    if (!disco) return res.status(404).json({ message: "Disco não encontrado" });
    res.status(200).json(disco);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar disco", error });
  }
};

export const atualizarDisco = async (req: Request, res: Response) => {
  try {
    const discoAtualizado = await Disco.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!discoAtualizado) return res.status(404).json({ message: "Disco não encontrado" });
    res.status(200).json(discoAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar disco", error });
  }
};

export const excluirDisco = async (req: Request, res: Response) => {
  try {
    const discoRemovido = await Disco.findByIdAndDelete(req.params.id);
    if (!discoRemovido) return res.status(404).json({ message: "Disco não encontrado" });
    res.status(200).json({ message: "Disco excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir disco", error });
  }
};
