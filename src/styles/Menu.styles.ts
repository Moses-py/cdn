import styled from "styled-components";
import { palette } from "../helpers/customs";

interface MenuStyleProps {
  shouldOpen: boolean;
}
export const HamburgerHolder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .hamburger {
    width: 40px;
    height: 1px;
    background: #111;
    margin: 0.4rem 0;
  }
`;

export const DropdownContainer = styled.div<MenuStyleProps>`
  height: ${(props) => (props.shouldOpen ? "70vh" : 0)};
  width: 100%;
  background: ${palette.primary};
  position: fixed;
  top: 10%;
  transition: all 0.53s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;

  @media (max-width: 600px) {
    height: ${(props) => (props.shouldOpen ? "80vh" : 0)};
  }
`;
