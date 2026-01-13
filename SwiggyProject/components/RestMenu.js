import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

export default function RestMenu() {
  let { id } = useParams();
  const [count, setcount] = useState(false);
  const [redcount, setredcount] = useState(false);
  const [apimenu, setapimenu] = useState([]);

  async function Fetchdata() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const SwiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.46&lng=72.8097&restaurantId=${id}&submitAction=ENTER`;
    const response = await fetch(proxyServer + SwiggyAPI);
    const data = await response.json();
    const filterdata =
      data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (items) => "title" in items?.card.card
      );

    setapimenu(filterdata);
  }

  useEffect(() => {
    Fetchdata();
  }, []);

  console.log(apimenu);

  return (
    <>
      <div className="h-screen w-screen bg-white flex flex-col gap-y-30 font-roboto">
        <div className="h-10 w-full"></div>

        <div className="h-30 w-full  flex  justify-center items-center ">
          <div className="flex h-full w-[80%]  items-center py-3 px-8 gap-x-4 bg-neutral-50 rounded-2xl shadow-aceternity">
            <div className="flex h-10 w-20  items-center justify-start rounded-xl bg-neutral-50 shadow-xl">
              <div
                className={`ml-3 h-5 w-5 cursor-pointer rounded-md bg-green-400 transition-all ${
                  count
                    ? "translate-x-7 rotate-90 duration-400 "
                    : "duration-100"
                }`}
                onClick={() => {
                  setcount(!count);
                  redcount ? setredcount(!redcount) : setcount(!count);
                }}
              ></div>
            </div>

            <div className="flex h-10 w-20 items-center justify-start rounded-xl bg-neutral-50 shadow-xl">
              <div
                className={`ml-3 h-5 w-5 cursor-pointer rounded-md bg-red-400 transition-all ${
                  redcount
                    ? "translate-x-7 rotate-90 duration-400"
                    : "duration-100"
                }`}
                onClick={() => {
                  setredcount(!redcount);
                  count ? setcount(!count) : setredcount(!redcount);
                }}
              ></div>
            </div>
          </div>
        </div>

        <Link to={`/city/mumbai/${id}/search`}>
          <div className="h-15 w-full flex justify-center items-center bg-neutrala-300">
            <div className="flex h-full w-[70%]  items-center justify-start py-3 px-8 gap-x-4  rounded-2xl   outline-none border-orange-600 shadow-sm hover:shadow-orange-500/50 ">
              <button className=" h-full w-[90%] outline-none cursor-pointer text-orange-600 font-inter font-medium ">
                Search Items{" "}
              </button>
              <svg
                className="h-full cursor-pointer text-orange-600 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </Link>

        <div className="flex flex-col ">
          {apimenu.map((value) => {
            return (
              <div key={value?.card?.card?.title}>
                <MenuCard
                  value={value?.card?.card}
                  count={count}
                  redcount={redcount}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
