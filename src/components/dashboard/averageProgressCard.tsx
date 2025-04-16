import { Box, Card, CardContent, Typography } from "@mui/material";
import { DashboardStats } from "../../types/dashboard";
import
{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { theme } from "../../helpers/theme";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function AverageProgressCard ( apiData: DashboardStats )
{


    const chartData = {
        labels: apiData.averageProgressByCourse.map( ( course ) => course.title ),
        datasets: [
            {
                fill: true,
                label: 'Average Progress',
                data: apiData.averageProgressByCourse.map( ( course ) => course.averageProgress * 100 ),
                backgroundColor: theme.palette.secondary.light,

            },
        ],
    };


    return (
        <Card sx={ { height: '100%' } }>
            <CardContent sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' } }>
                <Typography variant="h5" component="div">
                    Average Progress
                </Typography>

                <Box>
                    <Bar data={ chartData } options={ { responsive: true, scales: { y: { beginAtZero: true, max: 100 } } } } />
                </Box>
            </CardContent>
        </Card>
    );
}