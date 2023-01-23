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
        backgroundUrl="/assets/Aba city.jpg"
        buttons={[<Button text="OUR BUSINESSES" url="cdn-about" />]}
      />
    </>
  );
};
