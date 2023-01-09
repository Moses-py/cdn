import React from "react";
import { Button } from "../../components/Button";
import {
  NewsletterContainer,
  NewsletterInputBox,
  NewsletterInvite,
  NewsletterWrapper,
} from "../../styles/Home/newsletter/Newsletter.styles";

export const Newsletter: React.FunctionComponent = () => {
  return (
    <>
      <NewsletterContainer>
        <NewsletterWrapper>
          {/* <NewsletterImage src="\assets\newsletter.png" alt="newsletter" /> */}
          <NewsletterInvite>
            <h1 className="newsletterHeading">Join our Newsletter</h1>
            <p className="newsletterDesc">
              Stay updated with news, promotional offers and everything you need
              to know
            </p>
            <NewsletterInputBox>
              <input type="text" placeholder="E-mail" />
              <Button text="Sign up" />
            </NewsletterInputBox>

            <p className="newsletterPolicy">
              We won't pass your details on to anyone else. By clicking signup,
              you agree to our <a href="/">Terms of Use</a> and{" "}
              <a href="/">Privacy Policy</a>
            </p>
          </NewsletterInvite>
        </NewsletterWrapper>
      </NewsletterContainer>
    </>
  );
};
