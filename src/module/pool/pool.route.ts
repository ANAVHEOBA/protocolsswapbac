import { Router } from 'express';
import { poolController } from './pool.controller';
import { requireAuth } from '../auth/auth.middleware';

const router = Router();

// Public routes
router.get('/pools', async (req, res, next) => {
    try {
        await poolController.getAllPools(req, res);
    } catch (error) {
        next(error);
    }
});

router.get('/pools/:pairId', async (req, res, next) => {
    try {
        await poolController.getPoolData(req, res);
    } catch (error) {
        next(error);
    }
});

router.get('/pools/type/:type', async (req, res, next) => {
    try {
        await poolController.getPoolsByType(req, res);
    } catch (error) {
        next(error);
    }
});

// Protected routes (Admin only)
router.post('/pools', requireAuth, async (req, res, next) => {
    try {
        await poolController.createPair(req, res);
    } catch (error) {
        next(error);
    }
});

router.put('/pools/:pairId/rate', requireAuth, async (req, res, next) => {
    try {
        await poolController.updateRate(req, res);
    } catch (error) {
        next(error);
    }
});

export default router; 