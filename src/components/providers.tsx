import { ScopedCssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../helpers/theme";
import { BrowserRouter } from "react-router";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers ( { children }: { children: React.ReactNode; } )
{
    return (
        <React.Fragment>
            <ScopedCssBaseline>
                <QueryClientProvider client={ queryClient }>
                    <BrowserRouter>
                        <ReduxProvider store={ store }>
                            <ThemeProvider theme={ theme }>
                                { children }
                            </ThemeProvider>
                        </ReduxProvider>
                    </BrowserRouter>
                </QueryClientProvider>
            </ScopedCssBaseline>
        </React.Fragment>
    );
}