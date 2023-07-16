import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = props?.resData?.data;

  const { user } = useContext(UserContext);

  return (
    <div className="m-4 p-2 min-h-[29rem] flex-col bg-orange-100 border rounded-lg border-orange-200 w-max-sm">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Logo"
      />
      <h3 className="text-lg font-bold px-1 py-2 ">{name}</h3>
      <h4 className="px-1 py-2 ">{cuisines.join(", ")}</h4>
      <h4 className="px-1 py-2 ">₹{costForTwo / 100} for two</h4>
      <h4 className="px-1 py-2 ">{avgRating}</h4>
      <h5 className="px-1 py-2">{deliveryTime}</h5>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-1 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
