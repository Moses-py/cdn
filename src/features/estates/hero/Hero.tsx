import React from "react";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            <span>Chuks Darls</span> Estates
          </>
        }
        heroSubText="Estates in the city of Aba"
        backgroundUrl="/assets/Hero - estates.png"
      />
    </>
  );
};
