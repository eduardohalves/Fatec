import { Router } from "express";
import {
  criarDisco,
  listarDiscos,
  buscarDisco,
  atualizarDisco,
  excluirDisco,
} from "../controllers/discoController";

const router = Router();

router.post("/", criarDisco);
router.get("/", listarDiscos);
router.get("/:id", buscarDisco);
router.put("/:id", atualizarDisco);
router.delete("/:id", excluirDisco);

export default router;
