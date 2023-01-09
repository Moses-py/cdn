import styled from "styled-components";
import { fonts } from "../helpers/customs";

export const CTAButton = styled.div`
  padding: 0.7rem 1rem;
  background-color: #ffc107;
  width: 200px;
  font-size: 1rem;
  line-height: 1.3;
  font-family: ${fonts.sanSerif};
  cursor: pointer;
  transition: all 0.33s ease;
  text-align: center;
  &:hover {
    background-color: #fff8eb;
    color: #333;
    border: 1px solid #ffc107;
  }
  @media (max-width: 1200px) {
    font-size: 1.2vw;
  }

  @media (max-width: 990px) {
    font-size: 1.5vw;
  }

  @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 3vw;
  }

  @media (max-width: 520px) {
    font-size: 3.25vw;
  }

  @media (max-width: 420px) {
    font-size: 4vw;
  }
`;
