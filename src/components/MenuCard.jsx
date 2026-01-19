import { useState } from "react";
import ItemCards from "./ItemCards";

export default function MenuCard({ value, count, redcount }) {
  const [imgclick, setimgclick] = useState(false);

 if (imgclick) {
    return (
      <>
        <div className="flex-col flex items-center  mt-4">
          <div className="border-6 border-neutral-200 w-[80vw] mb-4 rounded-xl"></div>
          <div className=" w-[79vw] mb-6 font-bold flex justify-between ">
            <div> {value.title} </div>
            <div
              onClick={() => {
                setimgclick(!imgclick);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 cursor-pointer"
              >
                <polyline points="6 15 12 9 18 15" />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (count) {
   
    return (
      <div className="flex-col flex items-center  mt-4">
        <div className="border-6 border-neutral-200 w-[80vw] mb-4 rounded-xl"></div>
        <div className=" w-[79vw] mb-6 font-bold flex justify-between ">
          <div> {value.title} </div>

          <div
            onClick={() => {
              setimgclick(!imgclick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 cursor-pointer"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-2 align-center">
          {value?.categories
            ? value.categories.map((category) =>
                category.itemCards
                  .filter((option) => "isVeg" in option?.card?.info)
                  .map((item) => (
                    <ItemCards
                      key={item?.card?.info?.id}
                      valueinfo={item?.card?.info}
                    />
                  ))
              )
            : value?.itemCards
                ?.filter((option) => "isVeg" in option?.card?.info)
                .map((data) => (
                  <ItemCards
                    valueinfo={data?.card?.info}
                    key={data?.card?.info?.id}
                  ></ItemCards>
                ))}
        </div>
      </div>
    );
  }

  if (redcount) {

    return (
      <div className="flex-col flex items-center  mt-4">
        <div className="border-6 border-neutral-200 w-[80vw] mb-4 rounded-xl"></div>
        <div className=" w-[79vw] mb-6 font-bold flex justify-between ">
          <div> {value.title} </div>

          <div
            onClick={() => {
              setimgclick(!imgclick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 cursor-pointer"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-2 align-center">
          {value?.categories
            ? value.categories.map((category) =>
                category.itemCards
                  .filter((option) => !("isVeg" in option?.card?.info))
                  .map((item) => (
                    <ItemCards
                      key={item.card.info.id}
                      valueinfo={item.card.info}
                    />
                  ))
              )
            : value?.itemCards
                ?.filter((option) => !("isVeg" in option?.card?.info))
                .map((data) => (
                  <ItemCards
                    valueinfo={data?.card?.info}
                    key={data?.card?.info?.id}
                  ></ItemCards>
                ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex-col flex items-center  mt-4 font-roboto">
        <div className="border-6 border-neutral-200 w-[80vw] mb-4 rounded-xl"></div>
        <div className=" w-[79vw] mb-6 font-bold flex justify-between ">
          <div> {value.title} </div>

          <div
            onClick={() => {
              setimgclick(!imgclick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 cursor-pointer"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-2 align-center">
          {value?.categories
            ? value.categories.map((category) =>
                category.itemCards.map((item) => (
                  <ItemCards
                    key={item.card.info.id}
                    valueinfo={item.card.info}
                  />
                ))
              )
            : value?.itemCards?.map((data) => (
                <ItemCards
                  valueinfo={data?.card?.info}
                  key={data?.card?.info?.id}
                ></ItemCards>
              ))}
        </div>
      </div>
    </>
  );
}
