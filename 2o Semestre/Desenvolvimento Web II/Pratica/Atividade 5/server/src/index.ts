import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import megasenaRoutes from "./routes/megasena";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/megasena", megasenaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
