// src/routes/megasena.ts
import { Router, Request, Response } from "express";
import db from "../controllers/db";

interface MegasenaRow {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
  ganhadores_6_acertos: number;
  cidade_uf: string | null;
  rateio_6_acertos: number;
  ganhadores_5_acertos: number;
  rateio_5_acertos: number;
  ganhadores_4_acertos: number;
  rateio_4_acertos: number;
  acumulado_6_acertos: number;
  arrecadacao_total: number;
  estimativa_premio: number;
  acumulado_sorteio_especial_mega_da_virada: number;
  observacao: string | null;
}

const router = Router();

// ultimo sorteio
router.get(
  "/ultimo",
  async (_req: Request, res: Response<MegasenaRow>) => {
    const result = await db.query<MegasenaRow>(
      "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1"
    );
    res.json(result.rows[0]);
  }
);

router.get(
  "/:numero",
  async (
    req: Request<{ numero: string }>,
    res: Response<MegasenaRow | { mensagem: string }>
  ) => {
    const numero = Number(req.params.numero);
    const result = await db.query<MegasenaRow>(
      "SELECT * FROM megasena WHERE concurso = $1",
      [numero]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ mensagem: "Concurso não encontrado." });
      return; 
    }

    res.json(result.rows[0]);
  }
);

export default router;
