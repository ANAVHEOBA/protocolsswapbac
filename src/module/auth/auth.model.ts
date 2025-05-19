import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AdminUser, LoginCredentials, AuthResponse, ADMIN_USERS } from './auth.schema';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export class AuthModel {
    private users: AdminUser[] = [];

    constructor() {
        this.initializeAdminUsers();
    }

    private async initializeAdminUsers() {
        // Hash passwords and initialize admin users
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const now = new Date();
        this.users = [{
            id: '1',
            username: 'admin',
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'admin',
            lastLogin: now,
            createdAt: now,
            updatedAt: now
        }];
    }

    async validateUser(credentials: LoginCredentials): Promise<AdminUser | null> {
        const user = this.users.find(u => u.username === credentials.username);
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        return isValid ? user : null;
    }

    async login(credentials: LoginCredentials): Promise<AuthResponse | null> {
        const user = await this.validateUser(credentials);
        if (!user) return null;

        // Update last login
        user.lastLogin = new Date();

        // Generate JWT token
        const token = jwt.sign(
            { 
                id: user.id,
                username: user.username,
                role: user.role 
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        return {
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        };
    }

    async verifyToken(token: string): Promise<any> {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}

export const authModel = new AuthModel(); 