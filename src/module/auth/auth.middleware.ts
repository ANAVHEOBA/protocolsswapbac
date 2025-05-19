import { Request, Response, NextFunction, RequestHandler } from 'express';
import { authModel } from './auth.model';

export const requireAuth: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            res.status(401).json({
                success: false,
                message: 'Authentication required'
            });
            return;
        }

        const decoded = await authModel.verifyToken(token);
        
        if (!decoded) {
            res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
            return;
        }

        // Add user info to request
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
        return; // Ensure void return for catch block as well
    }
};

// Extend Express Request type to include user
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
} 