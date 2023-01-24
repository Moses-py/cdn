import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../helpers/windowDimesions";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarListGroup,
  NavbarListWrapper,
  NavbarListItem,
  Overlay,
} from "../../styles/navbar/Navbar.styles";
import "./navbar.css";

export const Navbar: React.FunctionComponent = () => {
  const { width } = useWindowSize();
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/">
            <NavbarLogo src="\assets\logo-black.png" alt="company-logo" />
          </Link>

          {(width as number) <= 901 ? (
            <div className="navbar-holder">
              <input type="checkbox" id="active" />
              <label htmlFor="active" className="menu-btn">
                <span></span>
              </label>
              <label htmlFor="active" className="close"></label>
              <div className="nav-wrapper">
                <Overlay />
                <div className="navlink-holder">
                  <ul>
                    <hr />
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/cdn-about">About us</Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/cdn-estates">Chuks Darls Estate</Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/cdn-liquor">Chuks Darls Ethanols</Link>
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <NavbarListGroup>
              <NavbarListWrapper>
                <NavbarListItem>
                  <Link to="/">Home</Link>
                </NavbarListItem>
                <NavbarListItem>
                  <Link to="/cdn-about">About us</Link>
                </NavbarListItem>
                <NavbarListItem>
                  <Link to="/cdn-estates">Chuks Darls Estates</Link>
                </NavbarListItem>
                <NavbarListItem>
                  <Link to="/cdn-liquor">Chuks Darls Ethanols</Link>
                </NavbarListItem>
              </NavbarListWrapper>
            </NavbarListGroup>
          )}
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
