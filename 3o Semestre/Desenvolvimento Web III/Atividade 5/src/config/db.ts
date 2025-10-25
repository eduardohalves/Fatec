import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};
