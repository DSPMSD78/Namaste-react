import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json);
    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>₹{costForTwo / 100} for Two</p>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((x) => (
          <li key={x.card.info.id}>
            {x.card.info.name} -{" "}
            {x.card.info.price / 100 || x.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
