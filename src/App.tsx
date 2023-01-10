import React from "react";
import MainContextProvider from "./context/Main";
import { Home } from "./pages/Home";
function App() {
  return (
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  );
}

export default App;
