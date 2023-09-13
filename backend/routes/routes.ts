import { Router } from 'express';
import { UserRoutes } from './UserRoutes';

const router = Router();

router.use('/user', new UserRoutes().getRouter());

export default router;