import React, { useContext } from "react";
import { AppContext } from "../context/Main";
import { DropdownContainer } from "../styles/Menu.styles";

export const Dropdown: React.FunctionComponent = () => {
  const { open } = useContext(AppContext);
  return <DropdownContainer shouldOpen={open}></DropdownContainer>;
};
