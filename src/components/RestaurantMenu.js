import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { ResId } = useParams();
  const [selectedMenu, setSelectedMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=" +
        ResId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const datajson = await data.json();
    setSelectedMenu(datajson);
  }

  return selectedMenu.length === 0 ? (
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
