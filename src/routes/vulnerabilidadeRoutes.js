import express from 'express';
import dados from '../data/vulnerabilidade.js';

const router = express.Router();

// rota que retorna os dados de vulnerabilidade social
router.get('/', (req, res) => {
    res.status(200).json(dados);
});

export default router;