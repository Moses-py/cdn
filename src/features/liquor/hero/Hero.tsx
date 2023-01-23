import React from "react";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            <span>Chuks Darls</span> Liquors
          </>
        }
        heroSubText="Major distributor of Ethanols in Nigeria"
        backgroundUrl="/assets/home-ethanol.png"
      />
    </>
  );
};
