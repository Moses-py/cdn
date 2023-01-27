import styled from "styled-components";

export const CTAButton = styled.div`
  a {
    padding: 0.7rem 1rem;
    background-color: #ffc107;
    width: 250px;
    font-size: 1rem;
    line-height: 1.3;
    cursor: pointer;
    transition: all 0.13s ease;
    text-align: center;
    text-decoration: none;
    color: #fff;
    display: block;
    text-decoration: none;
    color: #fff;

    &:hover {
      background-color: #fff8eb;
      color: #ffc107;
    }
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }

    @media (max-width: 500px) {
      font-size: 0.8rem;
      width: 200px;
      padding: 0.7rem;
    }
  }
`;

export const Btn = styled.button`
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
    padding: 0.5rem;
  }
`;
