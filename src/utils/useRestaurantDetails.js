import { useEffect, useState } from "react";
import { MENU_START_URL, MENU_END_URL } from "../config";

const useRestaurantDetails = (ResId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchFoodDetails();
  }, []);

  async function fetchFoodDetails() {
    const data = await fetch(MENU_START_URL + ResId + MENU_END_URL);

    const datajson = await data.json();
    setMenu(datajson);
  }

  return menu;
};

export default useRestaurantDetails;
