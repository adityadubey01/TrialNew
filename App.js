import React from "react";
import ReactDOM from "react-dom/client";

const reacth1 = React.createElement("h1", { key: "1" }, "Home");
const reacth2 = React.createElement("h1", { key: "2" }, "About");
const reacth3 = React.createElement("h1", { key: "3" }, "Contact");
const reactdiv = React.createElement("div", {}, [reacth1, reacth2, reacth3]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(reactdiv);
