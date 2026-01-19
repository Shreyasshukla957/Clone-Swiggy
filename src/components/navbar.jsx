import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


export default function SwiggyNavbar() {


  const cart = useSelector((state)=> state.cartslice.count);
  console.log(cart);
  
  return (
    <>

    <header className="w-full bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
        <div className="flex items-center gap-2">
          <img 
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png" 
            alt="Swiggy Logo" 
            className="h-12 w-auto"
          />
          
        </div>

      <Link to="/Checkout">
        <button className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <p>Cart {`${cart}`}</p>
        </button>
        </Link>
      </div>
     
    </header>
     <Outlet></Outlet>
    </>

  );
}