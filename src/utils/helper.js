export function updateRestaurantList(currSearch, allRestaurantList) {
  return allRestaurantList.filter((curr) =>
    curr.info.name.toLowerCase().includes(currSearch.toLowerCase())
  );
}
