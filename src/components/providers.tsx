import { ThemeProvider } from "@mui/material";
import { theme } from "../helpers/theme";
import { BrowserRouter } from "react-router";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";


export default function Providers ( { children }: { children: React.ReactNode; } )
{
    return (
        <React.Fragment>
            <BrowserRouter>
                <ReduxProvider store={ store }>
                    <ThemeProvider theme={ theme }>
                        { children }
                    </ThemeProvider>
                </ReduxProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}