import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import { BodyComponent } from "./components/Body";
import { FooterComponent } from "./components/Footer";

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Applayout />);
