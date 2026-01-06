import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import RestCard from "./RestCard"

export default function Delivery (){

    const[apidata,setapidata]=useState([])

    async function Fetchdata() {

        const proxyServer ="https://cors-anywhere.herokuapp.com/"
        const SwiggyAPI = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.46&lng=72.8097&carousel=true&third_party_vendor=1"
        const response = await fetch(proxyServer+SwiggyAPI)
        const data = await response.json()
        setapidata(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       

    }
    console.log(apidata);
    useEffect(()=>{
        Fetchdata();
    },[])

   
    return(
        <>
        
        <div>
            
        </div>
        <div className="container flex flex-wrap mx-auto h-150 w-screen gap-3 items-center justify-center">
            {
                apidata.map((value)=>{
                   console.log(value);
                    return(
                        <div className="">
                            <RestCard value={value} key={value.info.id}/>
                        </div>
                    )
                })
            }
        </div>

        
        </>
    )






}