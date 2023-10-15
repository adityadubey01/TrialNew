import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import { BodyComponent } from "./components/Body";
import { FooterComponent } from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const MyAppRoute = createBrowserRouter([
  { path: "/", element: <Applayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={MyAppRoute} />);
