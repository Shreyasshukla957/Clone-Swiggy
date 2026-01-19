import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import FoodOption from "./FoodOption"
import Grocery from "./grocery"
import Restaurant from "./Restaurant"


export default function Home(){

    return(
        <>
        
              <Header />
              <FoodOption />
              <Grocery />
              <Restaurant />

        </>
    )

}