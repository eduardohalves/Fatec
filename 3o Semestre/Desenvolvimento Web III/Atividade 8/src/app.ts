import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import ordemRoutes from "./routes/ordemRoutes";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/ordens", ordemRoutes);

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("MongoDB conectado!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

export default app;