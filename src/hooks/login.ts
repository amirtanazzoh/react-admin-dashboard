import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { useNavigate } from "react-router";
import { urls } from "../helpers/urls";
import { LoginForm } from "../types/login";
import { UseFormSetError } from "react-hook-form";
import { setIsLoggedIn, setUser } from "../redux/userSlice";
import { getUserByUserName } from "../services/users";

export default function useLogin ()
{

    const { isLoggedIn } = useAppSelector( ( state ) => state.user );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect( () =>
    {
        if ( false === isLoggedIn ) return;
        navigate( urls.dashboard );
    }, [ isLoggedIn ] );


    async function login ( loginFormData: LoginForm, setError: UseFormSetError<LoginForm> )
    {

        const { username, password } = loginFormData;

        //for testing purposes, i will simulate a login delay
        await new Promise( ( resolve ) => setTimeout( resolve, 1000 ) );

        const user = await getUserByUserName( username );

        // In a real application password must be hashing and checked on the server
        // For testing purposes, i will use the password as is
        if ( !user || user.password !== password )
        {
            setError( "username", {
                type: "manual",
                message: "Invalid username or password",
            } );

            return;
        }


        dispatch( setUser( user ) );
        dispatch( setIsLoggedIn( true ) );
        navigate( urls.dashboard );
    }


    return { login };
}