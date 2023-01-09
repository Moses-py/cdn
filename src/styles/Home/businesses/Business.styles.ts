import { fonts } from "./../../../helpers/customs";
import styled from "styled-components";

export const BusinessContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;
`;

export const BusinessTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BusinessTemplateImage = styled.img`
  width: 45vw;
  @media (max-width: 790px) {
    width: 70vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

export const BusinessTemplateDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 790px) {
    text-align: center;
  }
  h3 {
    font-size: 2rem;
    font-family: ${fonts.serif};
    margin: 0;
    @media (max-width: 790px) {
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-family: ${fonts.sanSerif};
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

export const BusinessWrapper = styled.div`
  padding: 1rem;
`;

export const BusinessEthanol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  gap: 2rem;
`;

export const BusinessEstates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
`;
