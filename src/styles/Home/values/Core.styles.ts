import styled from "styled-components";

export const CoreContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
`;
export const CoreWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const CoreCardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    .face1 {
      background: #ffc107;
      transform: translateY(0);
    }

    .face2 {
      transform: translateY(0);
    }

    .content {
      opacity: 1;
    }
  }
  .face {
    width: 380px;
    height: 250px;
    transition: 0.5s;

    @media (max-width: 425px) {
      width: 300px;
      height: 250px;
      transition: 0.5s;
    }
  }

  .face1 {
    position: relative;
    background: #0f1daa;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(150px);

    @media (max-width: 990px) {
      transform: translateY(0);
      background: #0f1daa;
    }
  }

  .face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
    transform: translateY(-100px);

    @media (max-width: 990px) {
      transform: translateY(0);
    }
  }

  .content {
    transition: 0.5s;

    img {
      max-width: 100px;
    }

    h3 {
      margin: 10px 0 0;
      padding: 0;
      color: #fff;
      text-align: center;
      font-size: 1.5em;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;
