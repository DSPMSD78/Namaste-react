import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4473388&lng=78.3564887&page_type=DESKTOP_WEB_LISTING"
    );

    x = await data.json();
    setList(x?.data?.cards[2]?.data?.data?.cards);
  };
  return list;
};
export default useRestaurant;
