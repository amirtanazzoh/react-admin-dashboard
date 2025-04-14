import { Fragment, PropsWithChildren } from "react";
import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router";
import { urls } from "../helpers/urls";

export default function ProtectedRoute ( { children, role = 'admin' }: PropsWithChildren<{ role?: 'admin' | 'user'; }> )
{

    const { isLoggedIn, user } = useAppSelector( ( state ) => state.user );

    const havePermission = () =>
    {
        if ( role === 'admin' )
        {
            return user?.role === 'admin';
        }
        else if ( role === 'user' )
        {
            return user?.role === 'user' || user?.role === 'admin';
        }
    };

    if ( false === isLoggedIn )
    {
        return <Navigate to={ urls.login } />;
    }

    if ( false === havePermission() )
    {
        return <Navigate to={ urls.forbidden } />;
    }

    return (
        <Fragment>
            { children }
        </Fragment>
    );
}