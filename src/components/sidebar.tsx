import { Drawer } from "@mui/material";
import { DASHBOARD_SIDEBAR_WIDTH } from "../helpers/theme";
import { Dispatch, SetStateAction } from "react";
import { Link, Navigate } from "react-router";


export default function SideBar ( { open }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>; } )
{

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={ {
                width: DASHBOARD_SIDEBAR_WIDTH,
                position: 'relative'

            } }
            open={ open }
        >

            <Link to={ '/dashboard/forbidden' } >
                Forbidden
            </Link>
            <div style={ { maxWidth: DASHBOARD_SIDEBAR_WIDTH, height: '100%', padding: 4 } }>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero mollitia ut quae natus! Vero nobis fugiat quidem. Architecto explicabo animi ex quo provident accusantium quibusdam nulla voluptas magnam ducimus libero sunt earum, natus iure aliquid nihil. Accusamus in atque doloremque.
            </div>
        </Drawer >

    );
}