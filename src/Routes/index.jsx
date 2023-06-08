import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetails from "./ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/d",
    element: <ProductDetails />,
  },
]);
