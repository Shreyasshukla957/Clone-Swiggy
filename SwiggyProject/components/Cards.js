import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant";

export default function Cards(props) {
  // console.log(props);
  return (
    <>
      <div className="w-85 shrink-0 h-100 ">

        <div className="relative">
          <a href={props.data.cta.link} target="_blank">
               <img
            className="w-full object-cover h-45 rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${props.data.info.mediaFiles[0].url}`}
          ></img>
          </a>
       

          <p className="absolute bottom-1 text-white left-1 z-1">
            {props.data.info.name}
          </p>
          <p className="absolute bottom-1 text-white right-1 z-2">
            {props.data.info.rating.value}
          </p>
          <div className="absolute bottom-0 right-0 left-0 bg-linear-to-t h-5 from-black to-transparent z-0"></div>
        </div>

        <div className="flex flex-col  border border-black-1 mt-2 h-auto">
          <div className="flex justify-between align-center mb-1">
            <div>{props.data.info.cuisines}</div>
            <div>{props.data.info.costForTwo}</div>
          </div>

          <div className="flex justify-between align-center mb-1">
            <div>{props.data.info.locationInfo.formattedAddress}</div>
            <div>{props.data.info.costForTwo}</div>
          </div>
          <div className="flex justify-between align-center mb-1">
            <div>{props.data.info.cuisines}</div>
            <div>{props.data.info.costForTwo}</div>
          </div>
          <div className="flex justify-between align-center mb-1">
            <div>{props.data.info.cuisines}</div>
            <div>{props.data.info.costForTwo}</div>
          </div>
        </div>
      </div>
    </>
  );
}
