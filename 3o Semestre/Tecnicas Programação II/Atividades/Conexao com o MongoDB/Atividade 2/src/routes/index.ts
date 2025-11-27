import { Router } from "express";
import state from "./state";

const routes = Router();

routes.use("/state", state);

export default routes;
