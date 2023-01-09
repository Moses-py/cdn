import React from "react";
import { Hamburger } from "../../components/Hamburger";
import useWindowSize from "../../helpers/windowDimesions";
import {
  NavbarContainer,
  NavbarLogo,
} from "../../styles/Home/hero/Hero.styles";

export const Navbar: React.FunctionComponent = () => {
  const { height } = useWindowSize();
  console.log(height);
  return (
    <>
      <NavbarContainer viewport={height as number}>
        <NavbarLogo src="\assets\logo-black.png" alt="company-logo" />
        <Hamburger />
      </NavbarContainer>
    </>
  );
};
