import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantMenu = () => {
  const { ResId } = useParams();
  const selectedMenu = useRestaurantDetails(ResId);

  return selectedMenu === null ? (
    <Shimmer />
  ) : (
    <div className="p-6 flex">
      <div className="bg-blue-50 p-4 shadow-lg">
        <img
          className="w-96 shadow-lg"
          src={
            IMG_URL +
            selectedMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="RestaurantImg"
        />
        <h2 className="text-lg">
          RestaurnatId - {selectedMenu?.data?.cards[0]?.card?.card?.info?.id}
        </h2>
        <h2 className="text-lg">
          Name - {selectedMenu?.data?.cards[0]?.card?.card?.info?.name}
        </h2>
        <h3 className="text-lg">
          Cuisines -
          {selectedMenu?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
        </h3>
      </div>
      <div className="pl-16 ">
        <h1 className="text-lg font-bold shadow-lg p-2 mb-4 bg-blue-50">
          Menu
        </h1>
        <ul className="text-lg bg-blue-50 p-4 shadow-lg">
          {selectedMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (currItem) => {
              return (
                <li key={currItem?.card?.info?.id}>
                  {currItem?.card?.info?.name}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
