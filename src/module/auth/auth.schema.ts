export interface AdminUser {
    id: string;
    username: string;
    password: string; // Will be hashed
    email: string;
    role: 'admin' | 'super_admin';
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
        role: string;
    };
}

// For storing admin users (in a real app, this would be in a database)
export const ADMIN_USERS: AdminUser[] = [
    {
        id: '1',
        username: 'admin',
        password: 'admin123', // This will be hashed in the model
        email: 'admin@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]; 