import { Request, Response } from 'express';
import { StablecoinPair, IStablecoinPair } from './pool.mongoose';

export class PoolController {
    // Create a new stablecoin pair (Admin only)
    async createPair(req: Request, res: Response): Promise<void> {
        try {
            const {
                baseToken,
                quoteToken,
                currentRate,
                type,
                pairAddress
            } = req.body;

            // Check if pair already exists
            const existingPair = await StablecoinPair.findOne({
                baseToken,
                quoteToken
            });

            if (existingPair) {
                res.status(400).json({
                    success: false,
                    message: 'Pair already exists'
                });
                return;
            }

            const newPair = new StablecoinPair({
                baseToken,
                quoteToken,
                currentRate,
                type,
                pairAddress,
                updatedBy: req.user?.username || 'system'
            });

            await newPair.save();

            res.status(201).json({
                success: true,
                data: newPair
            });
        } catch (error) {
            console.error('Error creating pair:', error);
            res.status(500).json({
                success: false,
                message: 'Error creating pair'
            });
        }
    }

    // Update pair rate (Admin only)
    async updateRate(req: Request, res: Response): Promise<void> {
        try {
            const { pairId } = req.params;
            const { newRate } = req.body;

            const pair = await StablecoinPair.findById(pairId);
            if (!pair) {
                res.status(404).json({
                    success: false,
                    message: 'Pair not found'
                });
                return;
            }

            pair.currentRate = newRate;
            pair.lastUpdated = new Date();
            pair.updatedBy = req.user?.username || 'system';

            await pair.save();

            res.json({
                success: true,
                data: pair
            });
        } catch (error) {
            console.error('Error updating rate:', error);
            res.status(500).json({
                success: false,
                message: 'Error updating rate'
            });
        }
    }

    // Get all pairs
    async getAllPools(req: Request, res: Response): Promise<void> {
        try {
            const pairs = await StablecoinPair.find({ isActive: true });
            res.json({
                success: true,
                data: pairs
            });
        } catch (error) {
            console.error('Error getting pairs:', error);
            res.status(500).json({
                success: false,
                message: 'Error getting pairs'
            });
        }
    }

    // Get specific pair
    async getPoolData(req: Request, res: Response): Promise<void> {
        try {
            const { pairId } = req.params;
            const pair = await StablecoinPair.findById(pairId);

            if (!pair) {
                res.status(404).json({
                    success: false,
                    message: 'Pair not found'
                });
                return;
            }

            res.json({
                success: true,
                data: pair
            });
        } catch (error) {
            console.error('Error getting pair:', error);
            res.status(500).json({
                success: false,
                message: 'Error getting pair'
            });
        }
    }

    // Get pairs by type
    async getPoolsByType(req: Request, res: Response): Promise<void> {
        try {
            const { type } = req.params;
            const pairs = await StablecoinPair.find({ 
                type,
                isActive: true 
            });

            res.json({
                success: true,
                data: pairs
            });
        } catch (error) {
            console.error('Error getting pairs by type:', error);
            res.status(500).json({
                success: false,
                message: 'Error getting pairs by type'
            });
        }
    }
}

export const poolController = new PoolController(); 