import { Router } from 'express';
import publicRoutes from './public';
import adminRoutes from './admin';
import authenticatedRoutes from './authenticated';

const router = Router();

router.use('/auth', publicRoutes);
router.use('/admin', adminRoutes);
router.use('/', authenticatedRoutes);

export default router;