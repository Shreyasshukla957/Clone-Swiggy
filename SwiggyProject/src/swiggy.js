import React from "react";
import ReactDom from "react-dom/client";
import Header from "../components/Header";
import FoodOption from "../components/FoodOption";
import Grocery from "../components/grocery";
import Restaurant from "../components/Restaurant";
import Delivery from "../components/Delivery";

function App() {
  return (
    <>
      <Header />
      <FoodOption />
      <Grocery />
      <Restaurant />
      <Delivery/>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
