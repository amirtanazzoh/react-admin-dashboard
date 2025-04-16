import { Fragment, PropsWithChildren, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router";
import { urls } from "../helpers/urls";
import { UserPermissions, UserRole } from "../types/user";
import { LoadingPage } from "../pages/loading";
import { isUserLoggedIn } from "../redux/userSlice";
import { Box } from "@mui/material";

export default function ProtectedRoute ( { children, permissionType }: PropsWithChildren<{ permissionType: UserPermissions; }> )
{

    const { isLoggedIn, user, loading } = useAppSelector( ( state ) => state.user );
    const dispatch = useAppDispatch();

    useEffect( () =>
    {
        dispatch( isUserLoggedIn() );
    }, [] );

    if ( loading === true )
    {
        return (
            <Box sx={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",

            } }>
                <LoadingPage />;
            </Box>
        );

    }

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