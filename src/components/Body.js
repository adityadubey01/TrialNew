import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function updateRestaurantList(currSearch, allRestaurantList) {
  return allRestaurantList.filter((curr) =>
    curr.name.toLowerCase().includes(currSearch.toLowerCase())
  );
}

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
    console.log(datajson);
    setAllCurrentRestaurantList(
      datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setCurrentRestaurantList(
      datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        className="SearchBox"
        placeholder="Text"
        value={currSearch}
        onChange={(e) => {
          setCurrSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const data = updateRestaurantList(currSearch, allRestaurantList);
          setCurrentRestaurantList(data);
        }}
      >
        Search
      </button>
      <div className="RestaurantList">
        {currRestaurantList?.map((curr) => {
          return <RestaurantCard RestaurantNum={curr} key={curr.info.id} />;
        })}
      </div>
      ;
    </>
  );
};
