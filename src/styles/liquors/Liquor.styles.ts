import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  .inner-slider {
    .slick-list {
      height: 70vh !important;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;
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
    padding: 2rem;
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
  padding: 2rem;

  @media (min-width: 1000px) {
    height: 320px;
  }
  @media (max-width: 500px) {
    padding: 4rem 2rem;
  } ;
`;

export const WorkItemTextWrapper = styled.div`
  // text-align: center;
  h1 {
    font-size: 1.6rem;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;

export const OrderContainer = styled.div`
  padding: 1rem 2rem;
`;

export const OrderGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 15%;

  @media (max-width: 1250px) {
    padding: 0 10%;
  }
  @media (max-width: 991px) {
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`;

export const SingleOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  position: relative;
  // @media (max-width: 500px) {
  //   width: 100%;
  // });
  img {
    object-fit: contain;
    width: 100%;
    // @media (max-width: 768px) {
    //   height: 350px;
    // })
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 925px) {
    flex-flow: wrap;
    gap: 1rem;
  }

  a {
    padding: 0.7rem 1rem;
    background-color: #ffc107;
    width: 100%;
    font-size: 1rem;
    line-height: 1.3;
    cursor: pointer;
    transition: all 0.33s ease;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: none;
    &:hover {
      background-color: #fff8eb;
      border: 0.5px solid #ffc107;
      color: #333;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media (max-width: 500px) {
      font-size: 0.8rem;
      padding: 0.5rem;
    }
  }
`;
