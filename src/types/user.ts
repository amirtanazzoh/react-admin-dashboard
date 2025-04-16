export type UserRole = 'admin' | 'student' | 'teacher';

export type User = {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    role: UserRole;
};

export type UserPermissions = 'view_dashboard_layout';