import Header from "./Header"
import {
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import "./Home.css"
import React, { useEffect, useState } from "react";
import Vibheadphone from "../assets/vibrating-headphone.png"
import Section from "./Section";
import axios from "axios";
import {BACKENDPOINT }from "../api"
const Home =()=>{

  const[topalbum, setTopAlbum] = useState([]);
  const[newalbum, setNewAlbum] = useState([])

  useEffect(() => {
    const onLoader =async()=>{
      const topalbumdata = await  performAPICallTopAlbum()
      setTopAlbum(topalbumdata)

      const newalbumdata = await  performAPICallNewAlbum()
      setNewAlbum(newalbumdata)
    }
    onLoader();
  },[]);


 const performAPICallTopAlbum =async()=>{
 try{
  const topapidata = await axios.get(`${BACKENDPOINT}/albums/top`)
return topapidata.data
}
catch(e){
 console.log(e)
}
  
  }


  const performAPICallNewAlbum =async()=>{
    try{
     const newapidata = await axios.get(`${BACKENDPOINT}/albums/new`)
   return newapidata.data
   }
   catch(e){
    console.log(e)
   }
     
     }

  return (
    <div >
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
       <Box sx={{bgcolor:"secondary.main"}}>
       {
      topalbum.length !==0 && (<Section title={"Top Albums"} data={topalbum} type ={"album"}/>)
      }{
      newalbum.length !==0 && (<Section title={"New Albums"} data={newalbum} type ={"album"}/>)
      }
       </Box>
      
     

      


    </div>
  )
}

export default Home