import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestMenu(){

    let {id} = useParams();
    const[apimenu,setapimenu] = useState([])

    async function Fetchdata() {
       const proxyServer = "https://cors-anywhere.herokuapp.com/";
       const SwiggyAPI =`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.46&lng=72.8097&restaurantId=${id}&submitAction=ENTER`;
       const response = await fetch(proxyServer + SwiggyAPI);
       const data = await response.json();
      const filterdata = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items)=>"title" in items?.card.card)
       
        setapimenu(filterdata);
     }

     useEffect(()=>{
        Fetchdata();
     },[])
     
    console.log(apimenu);
   

    return(
        <>
    <div className="h-screen w-screen bg-white ">
              <div className="flex flex-col">       
               {

                apimenu.map((value)=>{
                    return(
                        <div key={value?.card?.card?.title}>
                              <MenuCard  value={value?.card?.card}/>
                        </div>

                      
                       
                    )
                })
               } 
        </div>
            

    </div>
  
        </>
    )

}