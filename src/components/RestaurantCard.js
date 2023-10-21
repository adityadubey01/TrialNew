import { IMG_URL } from "../config";

const RestaurantCard = ({ RestaurantNum }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = RestaurantNum.info;
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-50">
      <img src={IMG_URL + cloudinaryImageId} alt="CardImage" />
      <h2 className="text-lg font-bold">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestaurantCard;
