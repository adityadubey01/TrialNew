import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { updateRestaurantList } from "../utils/Helper";
import useOnline from "../utils/useOnline";

export const BodyComponent = () => {
  const [currSearch, setCurrSearch] = useState("Burger");
  const [allRestaurantList, setAllCurrentRestaurantList] = useState([]);
  const [currRestaurantList, setCurrentRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  async function fetchRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const datajson = await data.json();
    setAllCurrentRestaurantList(
      datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCurrentRestaurantList(
      datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline)
    return (
      <>
        <h1>Something Went Wrong...</h1>
        <h2>Please check your internet connection</h2>
      </>
    );

  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-2 pt-5">
      <input
        className="bg-blue-50 border-spacing-1 focus:bg-green-300 p-1"
        placeholder="Text"
        value={currSearch}
        onChange={(e) => {
          setCurrSearch(e.target.value);
        }}
      />
      <button
        className="ml-5 p-1 bg-purple-800 text-white rounded-lg hover:bg-fuchsia-800"
        onClick={() => {
          const data = updateRestaurantList(currSearch, allRestaurantList);
          setCurrentRestaurantList(data);
        }}
      >
        Search
      </button>
      <div className="mt-4 flex flex-wrap">
        {currRestaurantList?.map((curr) => {
          return (
            <Link to={"/restaurant/" + curr.info.id} key={curr.info.id}>
              <RestaurantCard RestaurantNum={curr} />
            </Link>
          );
        })}
      </div>
      ;
    </div>
  );
};
