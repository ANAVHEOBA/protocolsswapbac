import { Router, Request, Response } from 'express';
import { authController } from './auth.controller';

const router = Router();

// Auth routes
router.post('/login', async (req: Request, res: Response) => {
    await authController.login(req, res);
});

router.post('/verify', async (req: Request, res: Response) => {
    await authController.verifyToken(req, res);
});

export default router; 