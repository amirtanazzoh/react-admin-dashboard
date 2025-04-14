import { createTheme } from "@mui/material";

export const theme = createTheme( {
    palette: {
        primary: {
            main: "#1976d2",
            contrastText: "#fff",
        },
        secondary: {
            main: "#dc004e",
            contrastText: "#fff",
        },
        background: {
            default: "#f5f5f5",
            paper: "#fff",
        },
        text: {
            primary: "#000",
            secondary: "#fff",
        },
        error: {
            main: "#f44336",
        },
    },
} );
