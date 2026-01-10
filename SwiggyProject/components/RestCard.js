import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router";

export default function RestCard({ value }) {
  return (
    <>

    <Link to={`/city/mumbai/`+value?.info?.id}>
      <div className="h-60 w-68 transition-all hover:scale-90 duration-300 cursor-pointer border-none outline-none ">
        <img
          className="h-35 w-[90%] object-cover rounded-2xl  "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            value.info.cloudinaryImageId
          }
        ></img>

        <div className=" h-22 mt-1 flex flex-col font-roboto ">
          <p className="font-bold text-[14px] ml-2">{value?.info?.name}</p>
          <div className="flex items-center ml-1 text-[13px] font-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 bg-green-600 rounded-4xl ml-1 text-white"
            >
              <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7L12 17.8 5.8 21.2 7 14.2 2 9.3l7.1-0.7L12 2z" />
            </svg>

            <p className="ml-1 mr-2 font-medium">{value?.info?.avgRating}</p>
            <p className="text-xs font-bold">{value?.info?.sla?.slaString}</p>
          </div>

           <div className="text-[12px] ml-2 mt-1 font-medium text-neutral-600">
            {value?.info?.cuisines.join(",")}
          </div>

           <div className="text-[14px] ml-2 font-medium text-neutral-500">
            {value?.info?.areaName}
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
