import { Router } from "express";
import Evento from "../models/Evento";

const router = Router();

// Criar evento
router.post("/", async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json({ mensagem: "Evento criado com sucesso!", evento });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar evento", detalhes: err });
  }
});

// Listar todos ou pesquisar por título
router.get("/", async (req, res) => {
  try {
    const { titulo } = req.query;

    const eventos = titulo
      ? await Evento.find({ titulo: { $regex: String(titulo), $options: "i" } })
      : await Evento.find();

    res.json(eventos);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar eventos" });
  }
});

// Atualizar evento
router.put("/:id", async (req, res) => {
  try {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!evento) return res.status(404).json({ erro: "Evento não encontrado" });

    res.json({ mensagem: "Evento atualizado!", evento });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao atualizar evento" });
  }
});

// Excluir evento
router.delete("/:id", async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);

    if (!evento) return res.status(404).json({ erro: "Evento não encontrado" });

    res.json({ mensagem: "Evento removido com sucesso!" });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao remover evento" });
  }
});

export default router;
