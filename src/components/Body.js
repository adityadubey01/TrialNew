import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

export const BodyComponent = () => {
  return (
    <div className="RestaurantList">
      <RestaurantCard RestaurantNum={restaurantList[0]} />
      <RestaurantCard RestaurantNum={restaurantList[1]} />
      <RestaurantCard RestaurantNum={restaurantList[2]} />
      <RestaurantCard RestaurantNum={restaurantList[3]} />
      <RestaurantCard RestaurantNum={restaurantList[4]} />
    </div>
  );
};
