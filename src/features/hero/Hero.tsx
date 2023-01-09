import React from "react";
import { Button } from "../../components/Button";
import {
  HeroText,
  HeroWrapper,
  Overlay,
  HeroContainer,
  CTAButtonContainer,
} from "../../styles/Home/hero/Hero.styles";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroWrapper>
        <Overlay />
        <HeroContainer>
          <HeroText>
            <h1 className="banner-heading">
              Providing <span>creative solutions</span> across Nigeria
            </h1>
            <p className="banner-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda harum delectus veniam inventore nisi id magnam, impedit
              cupiditate, cum voluptatibus
            </p>
            <CTAButtonContainer>
              <Button text="OUR BUSINESSES" />
            </CTAButtonContainer>
          </HeroText>
        </HeroContainer>
      </HeroWrapper>
      {/* <ArrowDirection /> */}
    </>
  );
};
