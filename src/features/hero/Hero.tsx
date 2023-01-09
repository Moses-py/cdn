import React from "react";
import { Button } from "../../components/Button";
import {
  HeroText,
  HeroWrapper,
  Overlay,
  HeroContainer,
  CTAButtonContainer,
  ArrowDirection,
} from "../../styles/Home/hero/Hero.styles";
import { Wavy } from "./Wavy";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroWrapper>
        <Overlay>
          <Wavy />
        </Overlay>
        <Wavy />
        <HeroContainer>
          <HeroText>
            <h1 className="banner-heading">
              Providing <span>creative solutions</span> across Nigeria
            </h1>
            <p className="banner-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda harum delectus veniam inventore nisi id magnam, impedit
              cupiditate, cum voluptatibus quae temporibus recusandae
              laboriosam, quas accusantium
            </p>
            <CTAButtonContainer>
              <Button text="OUR BUSINESSES" />
            </CTAButtonContainer>
          </HeroText>
          <ArrowDirection />
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};
