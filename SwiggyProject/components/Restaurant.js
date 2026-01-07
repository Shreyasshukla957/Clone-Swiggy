import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "../utils/restaurantsdata";
import Cards from "./Cards";

export default function Restaurant() {
    return(
        <>
            <div className="h-150 w-full flex flex-col mx-auto mt-8 justify-center items-center"> 

            <div className=" flex my-5 font-bold text-2xl w-[80vw]">

              <h1 className="justify-center items-start">
                 Discover best restaurants on Dineout 
                </h1> 

            </div>

            <div className="flex overflow-x-scroll scrollbar-hide gap-4 w-[85vw] ">

                {
                    restaurants.map((value)=>{
                        return(
                        
                        <Cards data={value} key={value?.info?.id}/>
                           
                        )
                    })
                }

            </div>
                


            </div>
        </>
    )
}