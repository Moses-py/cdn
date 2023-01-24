import React from "react";
import MainContextProvider from "./context/Main";
import { DesignCircle, DesignCircleDuo } from "./styles/Home/hero/Hero.styles";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <MainContextProvider>
      <RouterProvider router={router} />
      <DesignCircle />
      <DesignCircleDuo />
    </MainContextProvider>
  );
}

export default App;
