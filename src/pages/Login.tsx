import { Box } from "@mui/material";
import LoginForm from "../components/loginForm";


export default function Login ()
{
    return (
        <Box sx={ {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
        } }>
            <LoginForm />
        </Box>
    );
}