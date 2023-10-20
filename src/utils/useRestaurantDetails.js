import { useEffect, useState } from "react";

const useRestaurantDetails = (ResId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchFoodDetails();
  }, []);

  async function fetchFoodDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=" +
        ResId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const datajson = await data.json();
    setMenu(datajson);
  }

  return menu;
};

export default useRestaurantDetails;
