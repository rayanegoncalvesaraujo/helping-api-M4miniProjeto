// importa o framework express
import express from 'express';

// importa as rotas da aplicação
import vulnerabilidadeRoutes from './routes/vulnerabilidadeRoutes.js';
import fomeRoutes from './routes/fomeRoutes.js';
import alfabetizacaoRoutes from './routes/alfabetizacaoRoutes.js';

const app = express();

// middleware para aceitar JSON (caso necessário no futuro)
app.use(express.json());

// usa as rotas definidas
app.use('/vulnerabilidade', vulnerabilidadeRoutes);
app.use('/fome', fomeRoutes);
app.use('/alfabetizacao', alfabetizacaoRoutes);

// exporta o app para ser usado em server.js
export default app;







