import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormLabel, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import InputPassword from "./ui/input-password";
import { LoginForm as TLoginForm } from "../types/login";
import { ErrorMessage } from "@hookform/error-message";
import RenderErrors from "./ui/render-errors";
import useLogin from "../hooks/login";
import { useAppSelector } from "../hooks/redux";
import { LoadingPage } from "../pages/loading";

export default function LoginForm ()
{
    const { handleSubmit, register, formState: { isSubmitting, errors }, setError } = useForm<TLoginForm>();
    const { loading } = useAppSelector( state => state.user );
    const { login } = useLogin();

    if ( loading )
    {
        return <LoadingPage />;
    }

    return (
        <Paper sx={ { padding: 4, minWidth: 400 } } >
            <form onSubmit={ handleSubmit( ( data ) => login( data, setError ) ) }>
                <Box sx={ { display: "flex", flexDirection: "column", gap: 2, justifyContent: "center", alignItems: "center" } }>

                    <Box sx={ { display: "flex", flexDirection: "column", gap: 1, justifyContent: "center", alignItems: "center" } }>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Login
                        </Typography>

                        <Typography variant="subtitle1" component="h2" gutterBottom>
                            you can get username and password from <a target="_blank" href="https://lms-server-y1h9.onrender.com/users">test backend</a>
                        </Typography>
                    </Box>

                    <FormLabel htmlFor="username" sx={ { width: "100%" } }>
                        <TextField
                            { ...register( "username", { required: { value: true, message: 'username is required' }, } ) }
                            id="username"
                            label="Username"
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

                    <FormControlLabel
                        sx={ { width: '100%' } }
                        control={ <Checkbox defaultChecked { ...register( 'remember', ) } /> }
                        label="Remember me" />



                    <Button type="submit" variant="contained" color="primary" sx={ { width: "100%" } } disabled={ isSubmitting }>
                        { isSubmitting ? <CircularProgress style={ { color: '#fff' } } size={ 24 } /> : "Login" }
                    </Button>

                </Box>
            </form>
        </Paper>
    );

}