import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import MainContextProvider from "./context/Main";
import { About } from "./pages/About";
import { Estate } from "./pages/Estate";
import { Home } from "./pages/Home";
import { Liquor } from "./pages/Liquor";
import { DesignCircle, DesignCircleDuo } from "./styles/Home/hero/Hero.styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
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
function App() {
  return (
    <MainContextProvider>
      <Navbar />
      <RouterProvider router={router} />
      <DesignCircle />
      <DesignCircleDuo />
    </MainContextProvider>
  );
}

export default App;
