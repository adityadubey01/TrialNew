Shimmer = () => {
  return (
    <div className="RestaurantList">
      {Array(10)
        .fill("")
        .map((curr) => {
          return <div className="shimmer"></div>;
        })}
    </div>
  );
};

export default Shimmer;
