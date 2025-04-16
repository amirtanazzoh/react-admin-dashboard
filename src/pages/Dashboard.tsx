import { useQuery } from '@tanstack/react-query';
import { Box, Grid, Skeleton } from "@mui/material";
import { getDashboard } from "../services/dashboard";
import UserRolesCard from '../components/dashboard/UserRolesCard';
import CourseEnrollmentCard from '../components/dashboard/CourseEnrollmentCard';
import AverageProgressCard from '../components/dashboard/averageProgressCard';



export default function Dashboard ()
{

    const { data: apiData, isLoading, error } = useQuery( { queryFn: getDashboard, queryKey: [ 'dashboard' ] } );


    if ( error )
    {
        return (
            <Box>
                <p>Something went wrong</p>
            </Box>
        );
    }


    return (
        <Box>
            <Grid container spacing={ 2 } marginTop={ 2 }>
                <Grid size={ { xs: 12, md: 4 } }>
                    { ( isLoading || !apiData ) ?
                        <Skeleton variant='rounded' width={ '100%' } height={ '460px' } />
                        :
                        <UserRolesCard { ...apiData.data } />
                    }
                </Grid>

                <Grid size={ { xs: 12, md: 8 } }>
                    { isLoading || !apiData ?
                        <Skeleton variant='rounded' width={ '100%' } height={ '460px' } />
                        :
                        <CourseEnrollmentCard { ...apiData.data } />
                    }
                </Grid>

                <Grid size={ { xs: 12 } }>
                    { isLoading || !apiData ?
                        <Skeleton variant='rounded' width={ '100%' } height={ '670px' } />
                        :
                        <AverageProgressCard { ...apiData.data } />
                    }
                </Grid>
            </Grid>
        </Box>
    );
}