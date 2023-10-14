import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState } from "react";

function updateRestaurantList(currSearch, currRestaurantList) {
  return currRestaurantList.filter((curr) => curr.name.includes(currSearch));
}

export const BodyComponent = () => {
  const [currSearch, setCurrSearch] = useState("Burger");
  const [currRestaurantList, setCurrentRestaurantList] =
    useState(RestaurantList);
  return (
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
          const data = updateRestaurantList(currSearch, currRestaurantList);
          setCurrentRestaurantList(data);
        }}
      >
        Search
      </button>
      <div className="RestaurantList">
        {currRestaurantList?.map((curr) => {
          return <RestaurantCard RestaurantNum={curr} key={curr.id} />;
        })}
      </div>
      ;
    </>
  );
};
