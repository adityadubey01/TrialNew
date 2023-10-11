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

const HeaderOption = () => {
  return (
    <>
      <h1>Home</h1>
      <h1>About</h1>
    </>
  );
};
const HeaderComponent = () => {
  return (
    <div>
      {<HeaderOption />}
      <h1>Contact</h1>
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<HeaderComponent />);
