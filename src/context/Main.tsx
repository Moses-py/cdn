import React, { createContext, useState } from "react";

interface ContextProps {
  open: boolean;
  updateOpen: () => void;
  updatePropertyId: (id: number) => void;
  property_id: number;
}

type Context = {
  children: React.ReactNode;
};

export const AppContext = createContext<ContextProps>({
  open: false,
  updateOpen: () => {},
  updatePropertyId: () => {},
  property_id: 1,
});

const MainContextProvider: React.FunctionComponent<Context> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [property_id, setPropertyId] = useState(1);

  const updateOpen = () => setOpen(!open);
  const updatePropertyId = (id: number) => setPropertyId(id);

  return (
    <AppContext.Provider
      value={{ open, updateOpen, property_id, updatePropertyId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MainContextProvider;
