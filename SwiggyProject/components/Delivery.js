import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import RestCard from "./RestCard";

export default function Delivery() {
  const [apidata, setapidata] = useState([]);

  async function Fetchdata() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const SwiggyAPI =
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.46&lng=72.8097&carousel=true&third_party_vendor=1";
    const response = await fetch(proxyServer + SwiggyAPI);
    const data = await response.json();
    setapidata(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  console.log(apidata);
  useEffect(() => {
    Fetchdata();
  }, []);

  useEffect(() => {
    if (apidata && apidata.length > 0) {
      localStorage.setItem("swiggyData", JSON.stringify(apidata));
    }
  }, [apidata]);

  useEffect(() => {
    const saved = localStorage.getItem("swiggyData");

    if (saved) {
      setapidata(JSON.parse(saved));
    } else {
      Fetchdata(); // sirf tab jab local data na ho
    }
  }, []);

  if (apidata.length === 0) {
    return <h1>Data is Loading</h1>;
  }

  return (
    <>
      <div className="min-h-screen w-screen bg-neutral-50 ">
        <div className="mt-50"></div>
        <div className="container flex flex-wrap mx-auto h-auto w-screen gap-4  justify-center p-5 pt-2">
          {apidata.map((value) => {
            console.log(value);
            return (
              <div className="" key={value.info.id}>
                <RestCard value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
