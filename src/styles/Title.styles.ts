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
  }
`;
