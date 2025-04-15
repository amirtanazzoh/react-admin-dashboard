export const namespace = {
    login: 'login',
    dashboard: 'dashboard',
    forbidden: 'forbidden',
    users: 'users',
    lessons: 'lessons'
};

export function makeUrl ( ...args: string[] ): string
{
    const url = args
        .map( ( part ) => part.replace( /^\/+|\/+$/g, "" ) )
        .filter( Boolean )
        .join( "/" );

    return '/' + url;
}


export const urls = {
    login: '/',
    dashboard: makeUrl( namespace.dashboard ),
    forbidden: makeUrl( namespace.dashboard, namespace.forbidden ),
    users: makeUrl( namespace.dashboard, namespace.users ),
    lessons: makeUrl( namespace.dashboard, namespace.lessons )
};