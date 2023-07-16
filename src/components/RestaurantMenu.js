import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-4 mx-auto p-4 border border-solid border-orange-200">
      <div className="w-6/12 mx-auto">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold pb-2">
          {cuisines.join(", ")} - ₹{costForTwo / 100} for Two
        </p>
        <h4 className="font-bold py-2">Menu</h4>
        {categories.map((c) => (
          <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
