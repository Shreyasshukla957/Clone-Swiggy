import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Search() {
  const { id } = useParams();
  const [searched, setsearched] = useState("");

  const [apimenu, setapimenu] = useState([]);

  async function Fetchdata() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const SwiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.46&lng=72.8097&restaurantId=${id}&submitAction=ENTER`;
    const response = await fetch(proxyServer + SwiggyAPI);
    const data = await response.json();
    const filterdata =
      data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (data) => data?.card?.card?.itemCards ? data?.card?.card?.itemCards : data?.card?.card?.categories?.flatMap((items)=>items?.itemCards))
    
      console.log(filterdata);
      

    setapimenu(filterdata);
  }

  useEffect(() => {
    Fetchdata();
  }, []);

  // idhar flatmap ne data aur item jo 2D array create kr rhe the unke saare "data" ko single array mein convert krke store krdiya

  if (searched.length > 1) {
    const result = apimenu.map((data) =>
      data?.card?.info)

    const filteredResult = result.filter((info) =>
      info?.name?.toLowerCase().includes(searched.toLowerCase())
    );

    return (
      <>
        <div className="min-h-screen w-screen flex flex-col items-center">
          <div className="flex h-14 w-[80%] items-center justify-center py-3 px-8 gap-x-4 bg-neutral-100 rounded-2xl shadow-aceternity outline-none mt-10">
            <input
              type="Search"
              placeholder="Search In ..."
              className="h-full w-[90%] outline-none text-neutral-700 font-inter font-extralight bg-transparent"
              onChange={(event) => setsearched(event.target.value)}
            />
          </div>

          <div className="w-[80%] mt-8">
            {filteredResult.map((info , index) => (
              <div
                key={`${info.id}+${index}`}
                className="flex justify-between items-center border-b border-gray-200 py-4 px-6"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {info.name}
                  </h3>

                  <p className="text-base font-medium text-gray-700 mb-2">
                    ₹{(info.defaultPrice ?? info.price) / 100}
                  </p>

                  {info.ratings?.aggregatedRating?.rating && (
                    <p className="text-sm text-gray-600 mb-2">
                      ★ {info.ratings.aggregatedRating.rating} (
                      {info.ratings.aggregatedRating.ratingCountV2})
                    </p>
                  )}

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {info.description}
                  </p>
                </div>

                <div className="relative ml-6">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info.name}
                    className="w-36 h-36 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
     <div className="min-h-screen w-screen flex flex-col items-center">
          <div className="flex h-14 w-[80%] items-center justify-center py-3 px-8 gap-x-4 bg-neutral-100 rounded-2xl shadow-aceternity outline-none mt-10">
            <input
              type="Search"
              placeholder="Search In ..."
              className="h-full w-[90%] outline-none text-neutral-700 font-inter font-extralight bg-transparent"
              onChange={(event) => setsearched(event.target.value)}
            />
          </div>
        </div>
    </>
  );
}
