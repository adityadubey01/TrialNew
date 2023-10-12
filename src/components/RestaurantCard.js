const RestaurantCard = ({ RestaurantNum }) => {
  const { imageurl, name, cuisines, rating } = RestaurantNum;
  return (
    <div className="card">
      <img src={imageurl} alt="CardImage" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{rating}</h3>
    </div>
  );
};

export default RestaurantCard;
