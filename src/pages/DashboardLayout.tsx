import { Box } from "@mui/material";
import { Outlet } from "react-router";
import SideBar from "../components/sidebar";
import { useState } from "react";
import { DASHBOARD_SIDEBAR_WIDTH, } from "../helpers/theme";

export default function DashboardLayout ()
{
    const [ open, setOpen ] = useState( true );

    return (
        <Box>

            <SideBar open={ open } setOpen={ setOpen } />

            <Box
                sx={ {
                    width: `calc(100% - ${ DASHBOARD_SIDEBAR_WIDTH + 40 }px)`,
                    minHeight: '90vh',
                    ml: `${ DASHBOARD_SIDEBAR_WIDTH + 40 }px`,
                } }
            >
                <Outlet />
            </Box>
        </Box>
    );
}
