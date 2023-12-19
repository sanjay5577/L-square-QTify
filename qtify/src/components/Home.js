import Header from "./Header"
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import "./Home.css"
import React from 'react'
import Vibheadphone from "../assets/vibrating-headphone.png"

const Home =()=>{
  return (
    <div>
      <Header/>

      <Grid container sx={{ bgcolor:"secondary.main"}}>
         <Grid item className="hero-grid" > 
            <Box className="hero" >
              <Box className="hero-box">
              <Box sx={{width:"80%"}}>
              <p className="hero-heading">
             100 Thousand Songs, ad-free
             </p>
             <p className="hero-heading">
             Over thousands podcast episodes
             </p>
              </Box >
             <Box  className="image-box">
             <img  className="headphone-image" src={Vibheadphone} alt="vibrating-headphone"/>
             </Box>
              </Box>
              
           </Box>
          </Grid>
       </Grid>


    </div>
  )
}

export default Home