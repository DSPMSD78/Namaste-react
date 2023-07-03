import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = props?.resData?.data;

  return (
    <div className="res-card">
      <img
        className="display-image"
        src={CDN_URL + cloudinaryImageId}
        alt="Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>₹{costForTwo / 100} for two</h4>
      <h4>{avgRating}</h4>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
