import { Button, CircularProgress, Stack, TextField } from "@mui/material";

const ButtonField =( {text})=>{
    return(
        <>
        <Button  classname ="button" sx={{ color :"primary.main" , bgcolor:"secondary.main" , textTransform:"none"}}>
         {text}
        </Button>
        </>
    )
}
export default ButtonField;