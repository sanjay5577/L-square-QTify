import React from "react"
import SearchIcon from "../assets/searchicon.png"
import "./Search.css"

function Search({placeholder}){
    const submithandler =(e)=>{
        e.preventDefault()
    }
    return(
    <form className="searchwrapper" onSubmit={submithandler}> 
        <input className="search" required placeholder={placeholder}/>
        <button className="searchButton"  type="submit">
            <img src={SearchIcon} alt="seach-icon"></img>
            </button>
    </form>
    )
}

 export default Search;