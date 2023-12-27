import React ,{useEffect , useState} from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../../assets/leftarrow.svg";
import "./CarouselLeftNavigation.css"

export default function CarouselLeftNavigation(){
    const swiper =useSwiper();
    const [isBeginning ,setIsBeginning]=useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on('slideChange' ,function(){
            setIsBeginning(swiper.isBeginning);
        });
    },[]);


    return (
        <div className="leftNavigation">
            {!isBeginning && <LeftArrow onClick ={()=> swiper.slidePrev()}/>}
        </div>
    )
}