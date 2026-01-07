import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router";
// first div : swiggy logo

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-roboto overflow-auto scrollbar-hide">
      <div className="flex justify-between container mx-auto">
        <div className="w-40 h-12 py-8">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
        </div>

        <div className="text-white font-roboto font-bold py-8 flex gap-7 items-center shrink-[-3]">
          <a href="https://www.swiggy.com/corporate/" target="_blank">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">
            Partner with us
          </a>
          <a
            href="https://www.swiggy.com/corporate/"
            target="_blank"
            className="border border-white py-3 px-4 rounded-md"
          >
            Get the App
          </a>
          <div className="bg-black py-3 px-7 rounded-xl">
            <a href="https://www.swiggy.com/corporate/" target="_blank ">
              Sign in
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-5 flex justify-between ">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            className="w-65 h-115"
          ></img>

          <div className="flex flex-col">
            <div className="text-5xl text-white max-w-[60vw] container mx-auto text-center pt-16 pb-8 px-8 font-bold">
              Order food & groceries. Discover best restaurants. Swiggy it!
            </div>

            <div className="text-[13px] flex justify-center items-center container mx-auto gap-3 font-bold align-middle">
              <div className="bg-white text-black min-w-70 rounded-2xl h-14 flex justify-center font-bold">
                <input
                  placeholder="Enter your delivery location"
                  className="w-60 align-middle outline-0 p-2 font-bold"
                ></input>
              </div>

              <div className="bg-white text-black min-w-120 rounded-2xl h-15 flex font-bold">
                <input
                  placeholder="Search for Restaurants items & more"
                  className="min-w-120 align-middle p-2 outline-0 font-bold"
                ></input>
              </div>
            </div>
          </div>

          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            className="w-65 h-115"
          ></img>
        </div>
      </div>

      <div className="max-w-full flex items-center justify-center ">
        
        <div className="flex max-w-[80%] ">

          <Link to="/Restaurant">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png ">
          </img>
        </Link>
          
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png">
          </img>
        </a>

        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" >
          </img>
        </a>
        </div>
        

      </div>
    </header>
  );
}








