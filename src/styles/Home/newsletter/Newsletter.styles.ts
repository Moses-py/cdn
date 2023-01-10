import styled from "styled-components";
import { fonts } from "../../../helpers/customs";

export const NewsletterContainer = styled.div`
  background: #fff8eb;
  width: 100%;
  padding: 5rem 0;
`;

export const NewsletterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
  margin: 0;
  padding: 0;
`;

export const NewsletterImage = styled.img`
  text-align: center;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const NewsletterInvite = styled.div`
  padding: 1rem;

  .newsletterHeading {
    font-family: ${fonts.serif};
    margin: 2rem 0;
  }
  .newsletterDesc {
    font-size: 1.2rem;
    margin: 2rem 0;
  }
  .newsletterPolicy {
    font-size: 0.8rem;
    margin: 2rem 0;
  }
`;

export const NewsletterInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    border: none;
    padding: 1rem;
  }
`;
