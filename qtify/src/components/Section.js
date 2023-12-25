import React from "react";
import { useState } from "react";
import "./Section.css"
import Cards from "./Cards"
import { CircularProgress } from "@mui/material";
import Carousel from "../components/Carousel/Carousel"

export default function Section({title,data,type})
{
    const [carouselToggle,setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle((prevState)=>!prevState);
    }
    return (
        <div className="section-div">
            <div className="header-section">
                <h4 className="titleText" >{title}</h4>
                <h4 className="toggleText" onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
            </div>
        {data.length === 0 ? (
        <CircularProgress/>) :(
            <div className="cardWrapper">
            {!carouselToggle ? (
                <div className="wrapper">
                    {data.map((ele)=>(
                        <Cards data={ele} type={type} />
                    ))}
                </div>
            ) : (
            
                <Carousel data={data} renderComponent={(data)=> <Cards data={data} type={type}/>}
                />    
            )}
            </div>
        ) }
        </div>
    )}