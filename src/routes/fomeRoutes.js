import express from 'express';
import dados from '../data/fome.js';

const router = express.Router();

// rota que retorna os dados da fome no Brasil
router.get('/', (req, res) => {
  res.status(200).json(dados);
});

export default router;