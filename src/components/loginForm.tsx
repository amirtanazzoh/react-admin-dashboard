import { Box, Button, CircularProgress, FormLabel, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import InputPassword from "./ui/input-password";
import { LoginForm as TLoginForm } from "../types/login";
import { ErrorMessage } from "@hookform/error-message";
import RenderErrors from "./ui/render-errors";
import useLogin from "../hooks/login";

export default function LoginForm ()
{
    const { handleSubmit, register, formState: { isSubmitting, errors }, setError } = useForm<TLoginForm>();
    const { login } = useLogin();


    return (
        <Paper sx={ { padding: 4, minWidth: 400 } } >
            <form onSubmit={ handleSubmit( ( data ) => login( data, setError ) ) }>
                <Box sx={ { display: "flex", flexDirection: "column", gap: 2, justifyContent: "center", alignItems: "center" } }>

                    <Typography variant="h4" component="h1" gutterBottom>
                        Login
                    </Typography>

                    <FormLabel htmlFor="username" sx={ { width: "100%" } }>
                        <TextField
                            { ...register( "username", { required: { value: true, message: 'username is required' }, } ) }
                            id="username"
                            placeholder="Username"
                            sx={ { width: '100%', } } />
                        <ErrorMessage
                            errors={ errors }
                            name="username"
                            render={ ( data ) => <RenderErrors { ...data } /> }
                        />
                    </FormLabel>

                    <FormLabel htmlFor="password" sx={ { width: "100%" } }>
                        <InputPassword
                            { ...register( 'password', { required: { value: true, message: 'password is required' } } ) } />
                        <ErrorMessage
                            errors={ errors }
                            name="password"
                            render={ ( data ) => <RenderErrors { ...data } /> }
                        />
                    </FormLabel>


                    <Button type="submit" variant="contained" color="primary" sx={ { width: "100%" } } disabled={ isSubmitting }>
                        { isSubmitting ? <CircularProgress style={ { color: '#fff' } } size={ 24 } /> : "Login" }
                    </Button>

                </Box>
            </form>
        </Paper>
    );

}