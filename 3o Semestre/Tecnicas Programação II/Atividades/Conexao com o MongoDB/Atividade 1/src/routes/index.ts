import { Router } from "express";
import person from "./person";
import car from "./car";

const routes = Router();

routes.use("/person", person);
routes.use("/car", car);

export default routes;
