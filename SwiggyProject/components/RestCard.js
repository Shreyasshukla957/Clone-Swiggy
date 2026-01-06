import React from "react";
import ReactDOM from "react-dom/client";


export default function RestCard({value}) {
    return(
        <>
         
        <div className="h-60 w-50 object-cover">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ value.info.cloudinaryImageId}></img>
        </div>

           
        </>
    )
}