import styled from "styled-components";
import { fonts } from "../../../helpers/customs";

export const ContactBannerWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url("/assets/contact-us-6933645_1920.jpg");
  //   background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 50vh;
  width: 100%;
`;

export const ContactCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
  margin: 0;
  padding: 0;
`;

export const ContactCard = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    font-family: ${fonts.serif};
  }
`;

export const ContactCardMeet = styled.div`
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .phone,
  .mail,
  .addressbox {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ContactCardMessage = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: #eaeaea;
  line-height: 1.5;
  .message {
    margin: 2rem 0;
  }
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid #ffc107;
    background: transparent;
    color: #54b6bd;
    font-size: 1rem;
    resize: none;
    &::placeholder {
      color: #54b6bd;
      font-size: 14px;
    }
  }
`;
