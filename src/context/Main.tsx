import React, { createContext, useState } from "react";

interface ContextProps {
  open: boolean;
  updateDropdown: () => void;
}

type Context = {
  children: React.ReactNode;
};

export const AppContext = createContext<ContextProps>({
  open: false,
  updateDropdown: () => {},
});

const MainContextProvider: React.FunctionComponent<Context> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const updateDropdown = () => setOpen(!open);

  return (
    <AppContext.Provider value={{ open, updateDropdown }}>
      {children}
    </AppContext.Provider>
  );
};

export default MainContextProvider;
