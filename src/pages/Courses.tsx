import
{
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courses";
import UserChip from "../components/courses/userChip";
import { Link } from "react-router";
import { makeUrl, urls } from "../helpers/urls";

export default function Courses ()
{

    const { data, isLoading } = useQuery( { queryFn: getCourses, queryKey: [ 'courses' ] } );




    return (
        <>
            <Typography variant="h2" gutterBottom fontWeight={ 'bold' }>
                Courses
            </Typography>

            { isLoading ?
                <>
                    <Skeleton height={ '90vh' } />
                </>
                :

                <TableContainer sx={ { minWidth: 650 } } component={ Table }>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Instructor</TableCell>
                            <TableCell align="center">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { data?.data.map( ( item ) =>
                            <TableRow
                                key={ item.id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell>
                                    { item.id }
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    { item.title }
                                </TableCell>
                                <TableCell align="left">{ item.description }</TableCell>
                                <UserChip id={ item.instructorId } />
                                <TableCell align="center">
                                    <Link to={ makeUrl( urls.dashboard, urls.courses, String( item.id ) ) }>View</Link>
                                </TableCell>
                            </TableRow>
                        ) }
                    </TableBody>
                </TableContainer>
            }
        </>
    );
}