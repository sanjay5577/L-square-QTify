import {
  Card,
  CardMedia,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import Chip from '@mui/material/Chip';
import React from "react";
import "./Cards.css";



const Cards =({data, type})=>{

  const getCard =(type)=>{
    switch(type){
        case "album":{

    return (
      <>
      <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
        <Link to={`/album/${data.slug}`} style={{ textDecoration: 'none' }}>
        <Card className="card"  sx={{ borderRadius:"10px", width:"160" ,height:"230"}}>
          <CardMedia
            sx={{ height: 160 ,width:160}}
            image={data.image}
            title="album image"
            component ="img"
          />
          <div  className="chip">
          <Chip  label={`${data.follows} Follows`} sx={{color:"tertiary.main",bgcolor:"secondary.main"}}/>
          </div>
          
        </Card>
        <Typography className="cardName" sx={{color:"tertiary.main" , fontSize:"14px"}}>
        {data.title}
       </Typography>
        </Link>
      </Tooltip>
        
       </>
    )

   }

   case "song":{
    const {image,likes,title} =data;
    return(
      <>
      <Card className="card"  sx={{ borderRadius:"10px", width:"160" ,height:"230"}}>
      <CardMedia
        sx={{ height: 160 ,width:160}}
        image={image}
        title="song image"
        component ="img"
      />
      <div  className="chip">
      <Chip  label={`${likes} Likes`} sx={{color:"tertiary.main",bgcolor:"secondary.main"}}/>
      </div>
      
    </Card>
    <Typography className="cardName" sx={{color:"tertiary.main" , fontSize:"14px"}}>
    {title}
   </Typography>
   </>
    )
    
    
}

       default:{
          return<></>
       }
  }
}

return getCard(type);

}
 export default Cards;