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

interface NavbarProps {
  showContact: boolean;
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  showContact,
}) => {
  const { width } = useWindowSize();
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/">
            <NavbarLogo src="\assets\logo_black.png" alt="company-logo" />
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
                      <Link to="/cdn-estates">Estate</Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/cdn-liquor">Ethanols</Link>
                    </li>
                    <hr />
                    <li>
                      <a href="/#contact">Contact</a>
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
                  <Link to="/cdn-estates">Estates</Link>
                </NavbarListItem>
                <NavbarListItem>
                  <Link to="/cdn-liquor">Ethanols</Link>
                </NavbarListItem>
                {showContact && (
                  <NavbarListItem>
                    <a href="#contact">Contact</a>
                  </NavbarListItem>
                )}
              </NavbarListWrapper>
            </NavbarListGroup>
          )}
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
