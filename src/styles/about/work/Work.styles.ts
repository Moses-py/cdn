import styled from "styled-components";

export const WorkContainer = styled.div`
  position: relative;
`;
export const WorkWrapper = styled.div`
  padding: 2rem 5rem;
  margin: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1300px) {
    margin: 0;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 2rem 3rem;
  }
  .one,
  .three {
    background-color: #fff8eb;
  }

  .two {
    background-color: #0f1daa;
    color: #eee;
  }

  .three {
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;

export const WorkItemWrapper = styled.div`
    padding: 5rem 3rem;
    text-align: center;
    @media (min-width: 900px) {
    height: 320px;
    };
    @media (max-width: 500px) {
      padding: 4rem 2rem;
    };
    img {
      position: absolute
      top: 0;
      left: 0;
    }
`;

export const WorkItemTextWrapper = styled.div`
  text-align: center;
`;
