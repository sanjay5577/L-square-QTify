import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";

const ButtonField =( {text})=>{
    return(
        <Box className ="button" sx={{bgcolor:"secondary.main", borderRadius:"5px"}}>
        <Button   sx={{ color :"primary.main"  , textTransform:"none"}}>
         {text}
        </Button>
        </Box>
    )
}
export default ButtonField;