import styled from "styled-components";

export const CTAButton = styled.a`
  padding: 0.7rem 1rem;
  background-color: #ffc107;
  width: 250px;
  font-size: 1rem;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.33s ease;
  text-align: center;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: #fff8eb;
    border: 0.5px solid #ffc107;
    color: #333;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Btn = styled.div`
  padding: 0.7rem 1rem;
  background-color: #ffc107;
  width: 250px;
  font-size: 1rem;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.33s ease;
  text-align: center;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: #fff8eb;
    border: 0.5px solid #ffc107;
    color: #333;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
