import { Router } from 'express';

const publicRoutes = Router();

// TODO: Adicionar rotas de login, registro, etc. aqui
publicRoutes.get('/status', (req, res) => res.send('Public API is working!'));

export default publicRoutes;