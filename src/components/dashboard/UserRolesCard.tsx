import { Box, Card, CardContent, Typography } from "@mui/material";
import { DashboardStats } from "../../types/dashboard";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register( ArcElement, Tooltip, Legend );


export default function UserRolesCard ( apiData: DashboardStats )
{

    const userChartData = {
        labels: [ 'Admin', 'Students', 'Teacher' ],
        datasets: [
            {
                label: '# of User Roles',
                data: [ apiData.userRoles.admin, apiData.userRoles.student, apiData.userRoles.teacher ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Card sx={ { height: '100%' } }>
            <CardContent sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' } }>
                <Typography variant="h5" component="div">
                    User Roles
                </Typography>

                <Box>
                    <Pie data={ userChartData } options={ { responsive: true } } />
                </Box>
            </CardContent>
        </Card>
    );
}