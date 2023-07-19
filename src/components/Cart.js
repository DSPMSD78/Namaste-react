import { useDispatch, useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-2xl text-center m-4 p-4 flex">
        <h1>CartItems - {cartItems.length}</h1>
        <button
          className="px-3 py-1 mx-4 bg-orange-200 rounded-lg"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <FoodCard key={item?.card?.info?.id} {...item?.card?.info} />
          ))}
      </div>
    </>
  );
};

export default Cart;
