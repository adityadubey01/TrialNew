import { useState } from "react";
import { Link } from "react-router-dom";
import { BodyComponent } from "./Body";
import { useSelector } from "react-redux";
//import store from "../utils/store";

const LogoComponent = () => {
  return (
    <Link to="/">
      <img
        className="w-28 p-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UpTMYL-AlhkSDiGCILwei8gLrqO2fphdw&usqp=CAU"
        alt="Logo"
      />
    </Link>
  );
};

const OptionComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex text-lg pt-3">
      <h3 className="p-2">
        <Link to="/">Home</Link>
      </h3>
      <h3 className="p-2">
        <Link to="/about">About</Link>
      </h3>
      <h3 className="p-2">
        <Link to="/contact">ContactUs</Link>
      </h3>
      <h3 className="p-2">Help</h3>
      <h3 className="p-2">
        <Link to="/instaMart">InstaMart</Link>
      </h3>
      <h3 className="p-2">Cart- {cartItems.length} items</h3>
    </div>
  );
};

const AuthenticationComponent = () => {
  const [authenticate, setAuthenticate] = useState(false);
  return authenticate === true ? (
    <div>
      <button
        className="p-2 flex text-lg pt-5"
        onClick={() => {
          setAuthenticate(false);
        }}
      >
        LogOut
      </button>
    </div>
  ) : (
    <div>
      <button
        className="p-2 flex text-lg pt-5"
        onClick={() => {
          setAuthenticate(true);
        }}
      >
        LogIn
      </button>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="flex justify-between bg-blue-50 shadow-lg">
      <LogoComponent />
      <OptionComponent />
      <AuthenticationComponent />
    </div>
  );
};

export default HeaderComponent;
