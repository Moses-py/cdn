import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin: 5rem 2rem;
  padding: 0 1rem;

  @media (max-width: 600px) {
    margin: 3rem 0;
  }
  .core-typography {
    text-align: center;
  }

  .core-header {
    color: #0f1daa;
    font-size: 2rem;
    display: inline;
    border-bottom: 3px solid #ffc107;
    line-height: 1.5;
    @media (max-width: 1200px) {
      font-size: 1.8rem;
    }
  }

  .core-subtitle {
    font-size: 1.5rem;
    line-height: 1.5;
    @media (max-width: 1200px) {
      font-size: 1.55rem;
    }

    // @media (max-width: 990px) {
    //   font-size: 2vw;
    // }

    // @media (max-width: 768px) {
    //   font-size: 2.5vw;
    // }
    // @media (max-width: 600px) {
    //   font-size: 3vw;
    // }

    // @media (max-width: 520px) {
    //   font-size: 3.5vw;
    // }

    // @media (max-width: 420px) {
    //   font-size: 4vw;
    // }
  }
`;
