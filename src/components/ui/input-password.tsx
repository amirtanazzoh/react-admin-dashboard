import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";

export default function InputPassword ( props: any )
{
    const [ showPassword, setShowPassword ] = useState( false );

    return (
        <TextField
            { ...props }
            id="password"
            placeholder="Password"
            sx={ { width: '100%' } }
            type={ showPassword ? "text" : "password" }
            slotProps={ {
                input: {
                    endAdornment: (
                        <IconButton
                            onClick={ () => setShowPassword( !showPassword ) }
                            edge="end"
                            sx={ { position: "absolute", right: 12, top: "50%", translate: "0 -50%" } }
                        >
                            { showPassword ? <VisibilityOff /> : <Visibility /> }
                        </IconButton>
                    )
                },
            } }
        />
    );
}