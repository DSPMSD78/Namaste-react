import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="m-4 p-4 border border-solid border-orange-200">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold pb-2">
        {cuisines.join(", ")} - ₹{costForTwo / 100} for Two
      </p>
      <h4 className="font-bold py-2">Menu</h4>
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
