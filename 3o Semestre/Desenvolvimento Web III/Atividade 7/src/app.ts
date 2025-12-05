import express from "express";
import eventoRoutes from "./routes/eventoRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/eventos", eventoRoutes);

export default app;
