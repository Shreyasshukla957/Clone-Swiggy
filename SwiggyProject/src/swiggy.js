import React , {useState,useEffect,useMemo,useRef} from "react";
import ReactDom from "react-dom/client"
import Header from "../components/Header";
import FoodOption from "../components/FoodOption";


function App(){


        return(
            <div>
                   <Header/>
                    <FoodOption/>
            
            </div>
         

        )

}








const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);