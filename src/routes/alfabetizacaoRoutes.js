import express from 'express';
import dados from '../data/alfabetizacao.js';

const router = express.Router();

// rota que retorna os índices de alfabetização
router.get('/', (req, res) => {
  res.status(200).json(dados);
});

export default router;