import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import connect from "./models/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connect();
app.use(routes);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
