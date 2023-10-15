import { useState } from "react";
import { Link } from "react-router-dom";

const LogoComponent = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UpTMYL-AlhkSDiGCILwei8gLrqO2fphdw&usqp=CAU"
      alt="Logo"
    />
  );
};

const OptionComponent = () => {
  return (
    <div className="option">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>
        <Link to="/about">About</Link>
      </h3>
      <h3>Cart</h3>
      <h3>
        <Link to="/contact">ContactUs</Link>
      </h3>
      <h3>Help</h3>
    </div>
  );
};

const AuthenticationComponent = () => {
  const [authenticate, setAuthenticate] = useState(false);
  return authenticate === true ? (
    <div>
      <button
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
        onClick={() => {
          setAuthenticate(true);
        }}
      >
        LogIn
      </button>
    </div>
  );
};

const Title = () => {
  return <h1 className="title">FoodApp</h1>;
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <LogoComponent />
      <Title />
      <OptionComponent />
      <AuthenticationComponent />
    </div>
  );
};

export default HeaderComponent;
