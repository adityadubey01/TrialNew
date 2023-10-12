import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../config";

export const BodyComponent = () => {
  return (
    <div className="RestaurantList">
      {RestaurantList.map((curr) => {
        return <RestaurantCard RestaurantNum={curr} />;
      })}
    </div>
  );
};
