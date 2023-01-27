import styled from "styled-components";

interface HeroStyleProps {
  viewport?: number;
  url?: string;
}

export const HeroWrapper = styled.div<HeroStyleProps>`
  background-image: url("${(props) => props.url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 50vh;
  }
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
  flex-flow: wrap;
  gap: 2rem;
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
