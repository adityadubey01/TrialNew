Shimmer = () => {
  return (
    <div className="RestaurantList">
      {Array(10)
        .fill("")
        .map((curr, index) => {
          return <div key={index} className="shimmer"></div>;
        })}
    </div>
  );
};

export default Shimmer;
