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
    <div className="OverallMenu">
      <div>
        <img
          className="IndividualImg"
          src={
            IMG_URL +
            selectedMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="RestaurantImg"
        />
        <h2>
          RestaurnatId - {selectedMenu?.data?.cards[0]?.card?.card?.info?.id}
        </h2>
        <h2>Name - {selectedMenu?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>
          Cuisines -
          {selectedMenu?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
        </h3>
      </div>
      <div className="MenuList">
        <h1>Menu</h1>
        <ul>
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
