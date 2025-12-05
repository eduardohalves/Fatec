import app from "./app";
import { connectDB } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
