import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Livro from "./models/livro";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

mongoose
  .connect("mongodb://127.0.0.1:27017/livraria")
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch((err: unknown) => console.error("Erro ao conectar MongoDB:", err));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/livros", async (req: Request, res: Response) => {
  const livros = await Livro.find();
  res.json(livros);
});

app.post("/livros", async (req: Request, res: Response) => {
  const { titulo, autor, ano, genero } = req.body;
  const novoLivro = new Livro({ titulo, autor, ano, genero });
  await novoLivro.save();
  res.status(201).json(novoLivro);
});

app.put("/livros/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { titulo, autor, ano, genero } = req.body;

  const livroAtualizado = await Livro.findByIdAndUpdate(
    id,
    { titulo, autor, ano, genero },
    { new: true }
  );

  if (!livroAtualizado) {
    return res.status(404).json({ message: "Livro não encontrado" });
  }

  res.json(livroAtualizado);
});

app.delete("/livros/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const livroRemovido = await Livro.findByIdAndDelete(id);

  if (!livroRemovido) {
    return res.status(404).json({ message: "Livro não encontrado" });
  }

  res.json({ message: "Livro removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
