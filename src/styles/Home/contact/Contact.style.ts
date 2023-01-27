import styled from "styled-components";

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
  display: flex;
  align-items: center;
`;

export const ContactCardMeet = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  line-height: 1.5;

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
  height: 100%;
  background: #eaeaea;
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
  .message {
    margin: 2rem 0;
    line-height: 2.5;
  }
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid #ffc107;
    background: transparent;
    color: #54b6bd;
    font-size: 1rem;
    &::placeholder {
      color: #54b6bd;
      font-size: 14px;
    }
  }
`;
