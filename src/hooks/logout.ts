import { useNavigate } from "react-router";
import { urls } from "../helpers/urls";

export default function useLogout ()
{
    const navigate = useNavigate();

    function logout ()
    {
        localStorage.removeItem( 'user' );
        navigate( urls.login );
    }

    return { logout };
}