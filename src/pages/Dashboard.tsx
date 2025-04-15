import { useQuery } from '@tanstack/react-query';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { getDashboard } from "../services/dashboard";

export default function Dashboard ()
{

    const { data, isLoading, error } = useQuery( { queryFn: getDashboard, queryKey: [ 'dashboard' ] } );


    if ( error )
    {
        return <div>Error: error found</div>;
    }

    if ( isLoading )
    {
        return <div>Loading...</div>;
    }

    if ( !data ) return;

    return (
        <Box>
            <Stack>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            User Roles
                        </Typography>

                        <Typography sx={ { mb: 1.5 } } color="text.secondary">
                            { Array.from( Object.entries( data.data.userRoles ) ).map( ( [ key, value ] ) => (
                                <Typography key={ key } variant="body2">
                                    { key }: { value }
                                </Typography>
                            ) ) }
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}