import { Skeleton, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/users";
import { blue, green, grey, red } from "@mui/material/colors";


const columns: GridColDef[] = [
    {
        field: 'id',
        type: 'number',
        align: 'center',
        headerAlign: 'center',
        headerName: 'ID',
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 180,
    },
    {
        field: 'name',
        headerName: 'Full Name',
        width: 250,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 350,
        renderCell: ( params ) => (
            <a target="_blank" href={ `mailto:${ params.value }` }>
                { params.value }
            </a>
        )
    },
    {
        field: 'role',
        headerName: 'Role',
        type: 'singleSelect',
        valueOptions: [ 'admin', 'teacher', 'student' ],
        renderCell: ( params ) =>
        {
            let color;

            switch ( params.value )
            {
                case 'admin':
                    color = red;
                    break;
                case 'student':
                    color = green;
                    break;
                case 'teacher':
                    color = blue;
                    break;
                default:
                    color = grey;
                    break;
            }


            return (
                <div style={
                    {
                        display: 'inline',
                        padding: 8,
                        borderRadius: 12,
                        backgroundColor: color[ 50 ],
                        color: color[ 800 ]
                    } }>{
                        params.value }
                </div>
            );
        }
    }
];

export function Users ()
{
    const { data, isLoading } = useQuery( { queryFn: () => getAllUsers( 1, 30 ), queryKey: [ 'users' ] } );

    return (
        <div style={ { maxHeight: '90vh' } }>
            <Typography variant="h2" gutterBottom fontWeight={ 'bold' }>
                Users
            </Typography>
            {
                isLoading ?
                    <Skeleton height={ '100vh' } />
                    :
                    <div style={ { height: '85vh' } } >
                        <DataGrid
                            slots={ { toolbar: GridToolbar } }
                            autoPageSize
                            rowCount={ data?.items }
                            columns={ columns }
                            rows={ data?.data }

                        />
                    </div>
            }
        </div>

    );
}