import { Router } from 'express';
import GithubRoute from './github';

const router = Router();

router.use('/github', GithubRoute);

export default router;
