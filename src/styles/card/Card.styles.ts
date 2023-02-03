import styled from "styled-components";
export const CardContainer = styled.div`
  padding: 3rem;
  margin-top: 2rem;
`;

export const CardTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTemplateImage = styled.img`
  width: 30vw;
  // height: 300px;
  object-fit: contain;
  @media (max-width: 790px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const CardTemplateDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  @media (max-width: 1440px) {
    width: 35vw;
  }
  @media (max-width: 1024px) {
    width: 35vw;
  }
  @media (max-width: 990px) {
    width: 45vw;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
  }
  @media (max-width: 790px) {
    text-align: center;
  }
  h3 {
    font-size: 1.8rem;
    margin: 0;

    @media (max-width: 990px) {
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  .cardDescriptionItalics {
    font-style: italic;
    color: #333;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;

export const CardWrapper = styled.div`
  padding: 1rem;
`;

export const CardOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  gap: 2rem;

  p {
    word-wrap: wrap;
  }
`;

export const CardTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  p {
    word-wrap: wrap;
  }
`;
