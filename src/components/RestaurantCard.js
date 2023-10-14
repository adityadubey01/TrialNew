import { IMG_URL } from "../config";

const RestaurantCard = ({ RestaurantNum }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = RestaurantNum.info;
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="CardImage" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestaurantCard;
