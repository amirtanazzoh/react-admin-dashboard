import { Fragment, PropsWithChildren } from "react";
import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router";
import { urls } from "../helpers/urls";
import { UserPermissions, UserRole } from "../types/user";

export default function ProtectedRoute ( { children, permissionType }: PropsWithChildren<{ permissionType: UserPermissions; }> )
{

    const { isLoggedIn, user } = useAppSelector( ( state ) => state.user );

    if ( false === isLoggedIn || null === user )
    {
        return <Navigate to={ urls.login } />;
    }


    function hasPermission ()
    {
        if ( !user || !user.role ) return false;

        const role: UserRole = user.role.toLowerCase() as UserRole;

        if ( user.role === 'admin' ) return true;

        const permissions: Record<UserRole, UserPermissions[]> = {
            admin: [],
            student: [ 'view_dashboard_layout' ],
            teacher: [ 'view_dashboard_layout' ]
        };

        return permissions[ role ]?.includes( permissionType ) || false;
    }



    if ( false === hasPermission() )
    {
        return <Navigate to={ urls.forbidden } />;
    }

    return (
        <Fragment>
            { children }
        </Fragment>
    );
}