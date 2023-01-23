import React from "react";
import useWindowSize from "../../helpers/windowDimesions";
import "./navbar.css";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarWrapper,
} from "../../styles/Home/hero/Hero.styles";

export const Navbar: React.FunctionComponent = () => {
  const { height } = useWindowSize();
  return (
    <>
      <NavbarContainer viewport={height as number}>
        <NavbarWrapper>
          <NavbarLogo src="\assets\logo-black.png" alt="company-logo" />
          <div className="navbar-holder">
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn">
              <span></span>
            </label>
            <label htmlFor="active" className="close"></label>
            <div className="nav-wrapper">
              <div className="navlink-holder">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Our Businesses</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
