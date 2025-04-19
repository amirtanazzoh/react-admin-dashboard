import { TableCell } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/users";

export default function UserChip ( params: { id: number; } )
{

    const { data, isLoading } = useQuery( { queryKey: [ `user_by_id_${ params.id }` ], queryFn: () => getUserById( params.id ) } );

    return (
        <TableCell align="left">
            { isLoading ? params.id : data?.name }
        </TableCell>

    );
}