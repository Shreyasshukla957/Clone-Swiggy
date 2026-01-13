import { imageGridCards } from "../utils/fooddata";
import React from "react";
import ReactDOM from "react-dom/client";

export default function FoodOption() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 font-roboto">
          <div className="w-[80vw] h-[5vh] mt-20 flex items-center justify-start font-bold text-2xl">
            Order our best food Options
          </div>
        <div className="container mx-auto flex overflow-x-scroll scrollbar-hide">
        
          {imageGridCards.map((value) => {
            return (
              <div key={value.id}>
                <div  className="h-45 w-40 ">
                    <a href={value.action.link}>
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`}
                    className="h-45 w-36 object-cover"
                  ></img>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
