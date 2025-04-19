import { GeneralResponseWithPagination } from "../types/general";
import { User } from "../types/user";
import { appAxios } from "./main";

export async function getAllUsers ( page: number = 1, limit: number = 10 ): Promise<GeneralResponseWithPagination<User>>
{
    return await appAxios.get( '/users', {
        params: {
            '_page': page,
            '_per_page': limit,
        }
    } ).then( ( { data } ) => data );
}

export async function getUserByUserName ( username: string ): Promise<User>
{
    return appAxios.get( `/users`, {
        params: {
            'username': username,
        }
    } ).then( ( { data } ) => data[ 0 ] );
}

export async function getUserById ( id: number ): Promise<User>
{
    return appAxios.get( '/users', {
        params: {
            'id': id
        }
    } ).then( ( { data } ) => data[ 0 ] );
}