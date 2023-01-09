import React from "react";
import { Dropdown } from "./components/Dropdown";
import MainContextProvider from "./context/Main";
import { Home } from "./pages/Home";
function App() {
  return (
    <MainContextProvider>
      <Dropdown />
      <Home />
    </MainContextProvider>
  );
}

export default App;
