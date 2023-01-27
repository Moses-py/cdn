import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;
  height: 80px;
  margin: 0;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 3rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
  background: #fff;
`;
export const NavbarLogo = styled.img`
  width: 150px;
  object-fit: contain;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    width: 120px;
  }
`;
export const NavbarListGroup = styled.div`
  display: inline;
`;

export const NavbarListWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
`;

export const NavbarListItem = styled.li`
  color: #111;
  font-size: 1rem;
  padding-left: 40px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #111;
    &:hover {
      color: #ffc107;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  opacity: 0.58;
  z-index: 1;
`;

export const ArrowDirection = styled.div`
  z-index: 3;
  &::before {
    animation: bounce 1s ease infinite;
    bottom: 5rem;
    color: #fff;
    content: "╲╱";
    font-size: 1.5rem;
    height: 5rem;
    left: 50%;
    letter-spacing: -1px;
    line-height: 4rem;
    margin-left: -3rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 6rem;

    @media (max-width: 600px) {
      width: 5rem;
      height: 1rem;
      line-height: 25rem;
      font-size: 1rem;
    }
  }

  @keyframes bounce {
    50% {
      transform: translateY(-50%);
    }
  }
`;
