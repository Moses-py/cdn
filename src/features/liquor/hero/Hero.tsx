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
        heroSubText="Major Exporter and distributor of ethanol since 1999."
        backgroundUrl="/assets/liquour_hero.JPG"
      />
    </>
  );
};
