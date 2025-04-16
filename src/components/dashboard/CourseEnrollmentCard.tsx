import
{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { DashboardStats } from '../../types/dashboard';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { theme } from '../../helpers/theme';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            max: 20,
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

export default function CourseEnrollmentCard ( apiData: DashboardStats )
{


    const chartData = {
        labels: apiData.courseEnrollmentCount.map( ( course ) => course.title ),
        datasets: [
            {
                fill: true,
                label: 'Enrolled Students',
                data: apiData.courseEnrollmentCount.map( ( course ) => course.enrolledStudents ),
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light + '50',
            },
        ],
    };

    return (
        <Card sx={ { height: '100%' } }>
            <CardContent sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' } }>
                <Typography variant="h5" component="div">
                    Course Enrollment
                </Typography>

                <Box>
                    <Line data={ chartData } options={ options } />
                </Box>
            </CardContent>
        </Card>
    );
}
