import { CDN_URL } from "../utils/constants";

const FoodCard = ({ name, price, imageId }) => {
  return (
    <div className="m-4 p-2 flex-col bg-orange-100 border rounded-lg border-orange-200 w-max-sm">
      <img className="rounded-lg" src={CDN_URL + imageId} alt="Logo" />
      <h3 className="text-lg font-bold px-1 py-2 ">{name}</h3>
      <h4 className="px-1 py-2 ">₹{price / 100}</h4>
    </div>
  );
};

export default FoodCard;
