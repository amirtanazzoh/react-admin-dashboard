export const namespace = {
    login: 'login',
    dashboard: 'dashboard',
    forbidden: 'forbidden',
};

export const urls = {
    login: '/',
    dashboard: '/' + namespace.dashboard,
    forbidden: '/dashboard/forbidden',
};