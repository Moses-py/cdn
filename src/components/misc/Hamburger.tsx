import React, { useContext } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { AppContext } from "../../context/Main";
export const Hamburger: React.FunctionComponent = () => {
  const { updateDropdown, open } = useContext(AppContext);
  const style = {
    fontSize: "2.5rem",
    color: "#000",
  };
  return (
    <>
      {open ? (
        <CloseRoundedIcon onClick={updateDropdown} sx={style} />
      ) : (
        <MenuRoundedIcon onClick={updateDropdown} sx={style} />
      )}
    </>
  );
};
