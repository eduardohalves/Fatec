import mongoose, { Schema, Document } from "mongoose";

export interface ILivro extends Document {
  titulo: string;
  autor: string;
  ano: number;
  genero: string;
}

const LivroSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  genero: { type: String, required: true }
});

export default mongoose.model<ILivro>("Livro", LivroSchema);
