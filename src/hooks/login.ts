import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { useNavigate } from "react-router";
import { urls } from "../helpers/urls";
import { LoginForm } from "../types/login";
import { UseFormSetError } from "react-hook-form";
import { setIsLoggedIn, setUser } from "../redux/userSlice";

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


        //Simulate a login request
        if ( username === 'admin' && password === 'admin' )
        {
            dispatch( setUser( { id: 1, username: 'admin', role: 'admin' } ) );
            dispatch( setIsLoggedIn( true ) );
            return;
        }

        if ( username === 'user' && password === 'user' )
        {
            dispatch( setUser( { id: 2, username: 'user', role: 'user' } ) );
            dispatch( setIsLoggedIn( true ) );
            return;
        }

        //Simulate a login error
        setError( "username", {
            type: "manual",
            message: "Invalid username or password",
        } );

        return;
    }


    return { login };
}