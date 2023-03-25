import React from "react";
import {
  HeroWrapper,
  Overlay,
  HeroContainer,
  HeroText,
  CTAButtonContainer,
} from "../../styles/Home/hero/Hero.styles";

interface HeroTemplateProps {
  backgroundUrl: string;
  heroText?: string | React.ReactNode;
  heroSubText?: string;
  buttons?: React.ReactNode[] | React.ReactNode;
}

export const HeroTemplate: React.FunctionComponent<HeroTemplateProps> = ({
  backgroundUrl,
  heroSubText,
  heroText,
  buttons,
}) => {
  return (
    <>
      <HeroWrapper url={backgroundUrl} id="hero">
        <Overlay />
        <HeroContainer>
          <HeroText>
            <h1 className="banner-heading">{heroText}</h1>
            <p className="banner-text">
              {heroSubText
                ? heroSubText
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda harum delectus veniam inventore jnvsnviosvnsivnisv fjnsfbsfbins bofjbdbisbfin"}
            </p>
            <CTAButtonContainer>{buttons}</CTAButtonContainer>
          </HeroText>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};
