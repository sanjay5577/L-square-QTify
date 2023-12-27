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
  const[newalbum, setNewAlbum] = useState([]);
  const[songsdata , setSongsData] = useState([]);
  const[value, setValue] = useState(0);
  const[filterdatavalues , setFilterDataValues]=useState([]);

  useEffect(() => {
    const onLoader =async()=>{
      const topalbumdata = await  performAPICallTopAlbum()
      setTopAlbum(topalbumdata)

      const newalbumdata = await  performAPICallNewAlbum()
      setNewAlbum(newalbumdata)

      const songs= await  performAPICallSongs()
      setSongsData(songs)
      setFilterDataValues(songs)

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

 const performAPICallSongs=async()=>{
  try{
   const songsapidata = await axios.get(`${BACKENDPOINT}/songs`)
 return songsapidata.data
 }
 catch(e){
  console.log(e)
 }
   
}

const generatedata =(value)=>{
  let key;

  if(value ===0){
    setFilterDataValues(songsdata);
    return;
  }

  else if(value ===1){
    key ="rock"
  }

  else if(value ===2){
    key ="pop"
  }


  else if(value ===3){
    key ="jazz"
  }

  else if(value ===4){
    key ="blues"
  }

  const data = songsdata.map((item)=>{
    return item.genre.key ===key;
  })

  setFilterDataValues(data);

}

const filterdata =(value)=>{
  generatedata(value);
}


const handleChange =(event, newValue)=>{
  setValue(newValue);
  generatedata(newValue);

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
      {
      filterdatavalues.length !==0 && (<Section title={"Songs"} data={filterdatavalues} type ={"song"} value={value} filteredData={filterdata} handleChange={handleChange}/>)
      }
       </Box>
      
     

      


    </div>
  )
}

export default Home