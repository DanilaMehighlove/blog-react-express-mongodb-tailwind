import { Router } from 'express';
import { UserRoutes } from './UserRoutes';
import { ArticleRoutes } from './ArticleRoutes';

const router = Router();

router.use('/user', new UserRoutes().getRouter());
router.use('/article', new ArticleRoutes().getRouter());

export default router;