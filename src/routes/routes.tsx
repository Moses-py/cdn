import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Estate } from "../pages/Estate";
import { Home } from "../pages/Home";
import { Liquor } from "../pages/Liquor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cdn-about",
    element: <About />,
  },
  {
    path: "/cdn-estates",
    element: <Estate />,
  },
  {
    path: "/cdn-liquor",
    element: <Liquor />,
  },
]);
