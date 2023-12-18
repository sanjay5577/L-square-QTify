import Logo from "./Logo"
import ButtonField from "./Button"
import Box from "@mui/material/Box";
import { TextField ,InputAdornment,} from "@mui/material";
import "./Header.css"
import Searchicon from "../assets/searchicon.png"


const Header =()=>{

    return(
        <Box className="header"  sx={{bgcolor :"primary.main"}}>
        <Logo />
        <Box className="search" sx={{bgcolor :"tertiary.main", border: '1px solid black'}}>
          <TextField
          size="small"
          className="search-desktop"
          fullWidth
          sx={{
            '& legend': { display: 'none' },
            '& fieldset': { top: 0 },
            }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <div >
                      <img  src={Searchicon} alt="logo"/>
                </div>
              </InputAdornment>
            ),
          
          }}
          placeholder="Search a album of your choice"
          name="search"
          onChange={(e) => {}}
        />
        {/* <div >
              <img  src={Searchicon} alt="logo"/>
        </div> */}
      </Box>
        < ButtonField text={"Give Feedback"}/>
        </Box>
    )

}

export default Header