import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router";
import SideBar from "../components/sidebar";
import { useState } from "react";
import { DASHBOARD_SIDEBAR_WIDTH, } from "../helpers/theme";

export default function Dashboard ()
{
    const [ open, setOpen ] = useState( true );

    return (
        <Box sx={ { width: '100vw', minHeight: '100vh' } }>

            <SideBar open={ open } setOpen={ setOpen } />

            <Box
                sx={ {
                    width: `calc(100% - ${ DASHBOARD_SIDEBAR_WIDTH + 40 }px)`,
                    ml: `${ DASHBOARD_SIDEBAR_WIDTH + 40 }px`,
                } }
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores veniam ab temporibus maxime molestiae similique, deleniti rem laborum? Vero est esse voluptatem reprehenderit quisquam!
                <Outlet />
            </Box>
        </Box>
    );
}
