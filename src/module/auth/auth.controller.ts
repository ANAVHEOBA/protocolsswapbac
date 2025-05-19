import { Request, Response } from 'express';
import { authModel } from './auth.model';
import { LoginCredentials } from './auth.schema';

export class AuthController {
    async login(req: Request, res: Response) {
        try {
            const credentials: LoginCredentials = req.body;
            
            if (!credentials.username || !credentials.password) {
                return res.status(400).json({
                    success: false,
                    message: 'Username and password are required'
                });
            }

            const result = await authModel.login(credentials);
            
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials'
                });
            }

            return res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }

    async verifyToken(req: Request, res: Response) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: 'No token provided'
                });
            }

            const decoded = await authModel.verifyToken(token);
            
            if (!decoded) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid token'
                });
            }

            return res.status(200).json({
                success: true,
                data: decoded
            });
        } catch (error) {
            console.error('Token verification error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}

export const authController = new AuthController(); 