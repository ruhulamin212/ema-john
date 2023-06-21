import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Order from "./Components/Order/Order.jsx";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import Login from "./Components/Login/Login.jsx";
import cartProdutsLoder from "./Loders/CartProdutsLoder.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "Order",
        element: <Order></Order>,
        loader: cartProdutsLoder
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
