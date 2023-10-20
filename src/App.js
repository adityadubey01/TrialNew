import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import { BodyComponent } from "./components/Body";
import { FooterComponent } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

const InstaMart = lazy(() => import("./components/InstaMart"));

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const MyAppRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <BodyComponent /> },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:ResId", element: <RestaurantMenu /> },
      {
        path: "instaMart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<RouterProvider router={MyAppRoute} />);
