import { Router } from 'express';

const authenticatedRoutes = Router();

// TODO: Adicionar rotas de usuário autenticado aqui
authenticatedRoutes.get('/status', (req, res) => res.send('Authenticated API is working!'));

export default authenticatedRoutes;