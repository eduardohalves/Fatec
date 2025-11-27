import mongoose from "mongoose";

export default function connect() {
  const uri = "mongodb://127.0.0.1:27017/bdexer01";

  mongoose.connection.on("connected", () => console.log("connected"));
  mongoose.connection.on("open", () => console.log("open"));

  mongoose
    .connect(uri)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((e) => console.log("Erro: " + e.message));
}
