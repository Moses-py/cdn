import React from "react";
import { Button } from "../../../components/button/Button";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            Providing <span>creative solutions</span> across Nigeria
          </>
        }
        heroSubText="Chuks-Darls is a major distributor of ethanol who recently diversified into real estate with over 5 estates in the city of Aba."
        backgroundUrl="/assets/Aba city.jpg"
        buttons={[<Button text="OUR BUSINESSES" url="cdn-about" />]}
      />
    </>
  );
};
