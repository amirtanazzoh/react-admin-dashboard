import { Typography } from "@mui/material";
import { MultipleFieldErrors } from "react-hook-form";

export default function RenderErrors ( { message }: { message: string; messages?: MultipleFieldErrors; } )
{

    return (
        <Typography color="error" variant="caption">
            { message }
        </Typography>
    );
}