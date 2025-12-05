import { Router } from "express";
import ordemController from "../controllers/ordemController";

const router = Router();

router.post("/", ordemController.criar);
router.get("/", ordemController.listar);
router.put("/:id", ordemController.atualizar);
router.delete("/:id", ordemController.excluir);

export default router;
