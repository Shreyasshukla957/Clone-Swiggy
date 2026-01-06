

import React from "react";
import ReactDOM from "react-dom/client";
import { groceryData } from "../utils/grocerydata";

export default function Grocery() {

    return (
        <>
            <div className="font-roboto flex flex-col ">
            

              <div className="flex flex-col items-center mt-10 ">

                    <div className="w-[80vw] h-[5vh] mt-20 mx-[25vw]  flex items-center justify-start font-bold text-2xl mb-10">
                   <h1>Shop Groceries on instamart</h1> 
                  </div>

                <div className="container mx-auto flex  overflow-x-scroll scrollbar-hide">
               
                  {groceryData.map((value) => {
                    return (
                      <div key={value.id}>
                        <div  className="h-50 w-40 flex flex-col mr-5 text-sm font-bold">
                            <a href={value.action.link}>
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`}
                            className="h-45 w-36 object-cover"
                          ></img>
                          </a>
                          <h1>{value?.action?.text}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
               
        </>
    )
}