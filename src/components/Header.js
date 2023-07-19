import { useContext, useState } from "react";
import logo from "../utils/Logo/Icon.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useOnlineStatus();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-200">
      <div>
        <img className="w-20" src={logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2">
          <li className="m-4">Status - {status ? "💚" : "🔴"}</li>
          <li className="m-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="m-4">
            <Link to={"/contact"}>Contact US</Link>
          </li>
          <li className="m-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="m-4">{user.name}</li>
          <li className="m-4">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
          <button
            className="m-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
