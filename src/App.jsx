import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import ReactDom from "react-dom/client";
import Delivery from "../src/components/Delivery";
import Home from "../src/components/Home";
import {BrowserRouter , Route , Routes} from "react-router"
import RestMenu from "../src/components/RestMenu";
import Search from "../src/components/Search";
import {Provider} from "react-redux"
import {store} from "../src/stores/stores"
import Checkout from "../src/components/Checkout";
import SwiggyNavbar from '../src/components/navbar.jsx';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route element={<SwiggyNavbar></SwiggyNavbar>}>
        <Route path="/Restaurant" element={<Delivery/>}>
        </Route>
        <Route path="/city/mumbai/:id" element={<RestMenu></RestMenu>}></Route>
        <Route path="/city/mumbai/:id/search" element={<Search></Search>}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
