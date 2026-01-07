import React from "react";
import ReactDom from "react-dom/client";
import Delivery from "../components/Delivery";
import Home from "../components/Home";
import {BrowserRouter , Route , Routes} from "react-router"
import Restaurant from "../components/Restaurant";
import RestMenu from "../components/RestMenu";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/Restaurant" element={<Delivery/>}>
        </Route>
        <Route path="/city/mumbai/:id" element={<RestMenu></RestMenu>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
