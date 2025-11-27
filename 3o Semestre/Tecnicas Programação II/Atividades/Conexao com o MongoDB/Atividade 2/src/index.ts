import express from "express";
import dotenv from "dotenv";
import connect from "./models/connection";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connect();
app.use(routes);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
