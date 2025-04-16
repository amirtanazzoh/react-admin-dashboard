import { Box, CircularProgress } from "@mui/material";

export function LoadingPage ()
{
    return (
        <Box sx={ { width: '80vw', height: '80vh', display: 'grid', placeContent: "center" } }>
            <CircularProgress size={ 100 } />
        </Box>
    );
}