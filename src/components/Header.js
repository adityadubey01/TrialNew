import { useState } from "react";

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
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Cart</h3>
      <h3>ContactUs</h3>
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
