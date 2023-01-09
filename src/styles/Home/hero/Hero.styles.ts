import styled from "styled-components";
import { fonts, palette } from "../../../helpers/customs";

interface HeroStyleProps {
  viewport: number;
}

export const HeroWrapper = styled.div`
  background-image: url("/assets/Aba city.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 90vh;
  position: relative;
  margin-top: 3rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  z-index: 2;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const NavbarLogo = styled.img`
  width: 120px;
  object-fit: contain;
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
  @media (max-width: 600px) {
    position: relative;
    height: 60%;
  }
`;
export const HeroText = styled.div`
  position: relative;
  z-index: 1;
  width: 55vw;
  text-align: center;
  color: white;
  margin-top: 3rem;

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
    color: ${palette.primary};
  }
  .banner-heading {
    font-size: 4vw;
    font-family: ${fonts.serif};
    line-height: 1.5;

    @media (max-width: 1200px) {
      font-size: 5.5vw;
    }

    @media (max-width: 800px) {
      font-size: 6.5vw;
    }
    @media (max-width: 600px) {
      font-size: 7vw;
    }

    @media (max-width: 420px) {
      font-size: 9vw;
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
      font-size: 3vw;
    }
    @media (max-width: 600px) {
      font-size: 3.25vw;
    }

    @media (max-width: 520px) {
      font-size: 4vw;
    }

    @media (max-width: 420px) {
      font-size: 4.5vw;
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
