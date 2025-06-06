import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DASHBOARD_SIDEBAR_WIDTH } from "../helpers/theme";
import { Dispatch, Fragment, SetStateAction, useMemo } from "react";
import { urls } from "../helpers/urls";
import { LibraryBooks, Logout, People, SpaceDashboard } from "@mui/icons-material";
import { Link } from "react-router";
import useLogout from "../hooks/logout";




export default function SideBar ( { open }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>; } )
{

    const { logout } = useLogout();

    const menuItems = useMemo( () => [
        {
            title: 'dashboard',
            link: urls.dashboard,
            icon: <SpaceDashboard />,
        },
        {
            title: 'users',
            link: urls.users,
            icon: <People />,
        },
        {
            title: 'courses',
            link: urls.courses,
            icon: <LibraryBooks />,
        }
    ], [] );

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={ {
                width: DASHBOARD_SIDEBAR_WIDTH,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                '& .MuiDrawer-paper': {
                    justifyContent: 'space-between',
                },
            } }
            open={ open }
        >
            <List >
                { menuItems.map( ( { icon, link, title } ) =>
                    <Fragment key={ title }>
                        <ListItem sx={ { width: '100%' } } >
                            <Link to={ link } style={ { display: 'block', width: '100%' } }>
                                <ListItemButton >
                                    <ListItemIcon>
                                        { icon }
                                    </ListItemIcon>
                                    <ListItemText primary={ title } sx={ { textTransform: 'capitalize', color: 'black' } } />
                                </ListItemButton>
                            </Link>
                        </ListItem>

                        <Divider />
                    </Fragment>
                ) }
            </List>

            <List>
                <ListItem sx={ { width: '100%' } } >
                    <ListItemButton onClick={ logout }>
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText primary='Logout' sx={ { textTransform: 'capitalize', color: 'black' } } />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer >

    );
}