import Logo from "./Logo"
import ButtonField from "./Button"
import Search from "./Search"
import Box from "@mui/material/Box";
import "./Header.css"



const Header =()=>{

    return(
        <Box className="header"  sx={{bgcolor :"primary.main"}}>
          <a href="/">
          <Logo />
          </a>
        <Search placeholder={"Search a album of your choice"}/>
        < ButtonField text={"Give Feedback"}/>
        </Box>
    )

}

export default Header