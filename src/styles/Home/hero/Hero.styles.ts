import styled from "styled-components";
import { fonts } from "../../../helpers/customs";

interface HeroStyleProps {
  viewport: number;
}

export const HeroWrapper = styled.div`
  background-image: url("/assets/Aba city.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  opacity: 0.5;
  z-index: 1;
`;
export const NavbarContainer = styled.div<HeroStyleProps>`
  position: relative;
  height: 80px;
  margin: 0;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 4rem;
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
  width: 120px;
  object-fit: contain;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    width: 100px;
  }
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

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroText = styled.div`
  position: relative;
  z-index: 1;
  width: 55vw;
  text-align: center;
  color: white;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 800px) {
    width: 85vw;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }

  @media (max-width: 420px) {
    width: 90vw;
  }
  span {
    color: #ffc107;
  }
  .banner-heading {
    font-size: 3.5vw;
    font-family: ${fonts.serif};
    line-height: 1.1;
    overflow: hidden;

    @media (max-width: 1200px) {
      font-size: 5vw;
    }

    @media (max-width: 800px) {
      font-size: 5.5vw;
    }

    @media (max-width: 600px) {
      font-size: 6.5vw;
    }

    @media (max-width: 420px) {
      font-size: 8vw;
    }
  }

  .banner-text {
    font-size: 1.2rem;
    line-height: 1.5;
    @media (max-width: 1200px) {
      font-size: 1.5vw;
    }

    @media (max-width: 990px) {
      font-size: 2vw;
    }

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
    @media (max-width: 600px) {
      font-size: 3vw;
    }

    @media (max-width: 520px) {
      font-size: 3.5vw;
    }

    @media (max-width: 420px) {
      font-size: 4vw;
    }
  }
`;
export const CTAButtonContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesignCircle = styled.div`
  width: 400px;
  height: 400px;
  border: 10px solid #009dff;
  opacity: 0.1;
  position: fixed;
  top: 70%;
  left: -10%;
  border-radius: 100%;
  z-index: -1;
`;
export const DesignCircleDuo = styled.div`
  top: 5%;
  right: -10%;
  width: 450px;
  height: 450px;
  border: 10px solid #009dff;
  opacity: 0.1;
  position: fixed;
  border-radius: 100%;
  z-index: -1;
`;
