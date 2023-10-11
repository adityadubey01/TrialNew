import React from "react";
import ReactDOM from "react-dom/client";

// const reacth1 = React.createElement("h1", { key: "1" }, "Home");
// const reacth2 = React.createElement("h1", { key: "2" }, "About");
// const reacth3 = React.createElement("h1", { key: "3" }, "Contact");
// const reactdiv = React.createElement("div", {}, [reacth1, reacth2, reacth3]);

// const reactjsx1 = <h1>Home</h1>;
// const reactjsx2 = <h1>About</h1>;
// const reactjsx3 = <h1>Contact</h1>;

// const reactjsxdiv = (
//   <div>
//     <h1>Home</h1>
//     <h1>About</h1>
//     <h1>Contact</h1>
//   </div>
// );

const LogoComponent = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UpTMYL-AlhkSDiGCILwei8gLrqO2fphdw&usqp=CAU"
      alt="Logo"
    ></img>
  );
};

const SearchComponent = () => {
  return (
    <div className="search-bar">
      <input placeholder="Search"></input>
      <button>Search</button>
    </div>
  );
};

const OptionComponent = () => {
  return (
    <div className="option">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>ContactUs</h3>
      <h3>Help</h3>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <LogoComponent />
      <SearchComponent />
      <OptionComponent />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<HeaderComponent />);
