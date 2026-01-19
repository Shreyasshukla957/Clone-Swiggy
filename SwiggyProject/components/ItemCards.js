import {  useReducer, useState } from "react";
import { IncrementItems, DecrementItems, AddItems } from "../stores/cartslice";
import { useDispatch } from "react-redux";


export default function ItemCards({ valueinfo }) {
  const [count, setcount] = useState(0);

  const dispatch = useDispatch();
  

  function handleAddItems() {
    setcount(1);
    dispatch(AddItems(valueinfo));
  }

  function handleIncrementItems() {
    setcount(count + 1);
    dispatch(IncrementItems(valueinfo));
  }

  function handleDecrementItems() {
    setcount(count - 1);
    dispatch(DecrementItems(valueinfo));
  }

  return (
    <>
      <div className="flex items-top w-[78vw] h-40 font-roboto">
        <div className="w-[90%] flex flex-col mr-2 mt-1 ">
          <div className=" ">{valueinfo.name}</div>
          <div className="mt-1">
            {valueinfo.price
              ? `₹${valueinfo.price / 100}`
              : `₹${valueinfo.defaultPrice / 100}`}
          </div>
          <div className="mt-1 ml-1  flex items-center text-[12px]  text-green-900 font-bold">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#166534"
              />
            </svg>

            {valueinfo?.ratings?.aggregatedRating?.rating}
            <div className="ml-1 font-black">
              {" "}
              {`(${valueinfo?.ratings?.aggregatedRating?.ratingCountV2})`}
            </div>
          </div>
        </div>

        <div className="w-auto flex  justify-end relative items-top ">
          <div className="">
            <img
              className="h-35 w-40 rounded-2xl object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${valueinfo.imageId}`}
            ></img>
          </div>
          <p className="absolute bottom-[-2] left-1/2 -translate-x-1/2 h-10 w-25 border border-green-200 bg-white rounded-xl text-green-700 font-bold shadow-sm hover:shadow-md transition-shadow flex items-center justify-around cursor-pointer  select-none">
            {count === 0 ? (
              <span onClick={handleAddItems}>ADD</span>
            ) : (
              <span className="flex items-center justify-between w-full px-4">
                <span onClick={handleIncrementItems}>+</span>
                <span>{count}</span>
                <span onClick={handleDecrementItems}>−</span>
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="border border-neutral-400"></div>
    </>
  );
}



