import { Router } from 'express';

const adminRoutes = Router();

// TODO: Adicionar rotas de administração aqui
adminRoutes.get('/status', (req, res) => res.send('Admin API is working!'));

export default adminRoutes;