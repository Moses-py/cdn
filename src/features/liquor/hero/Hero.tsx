import React from "react";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            <span>Ethanols</span>
          </>
        }
        heroSubText="Chuks-Darls Nigeria is a major distributor of ethanol since 1999 with an approved NAFDAC number"
        backgroundUrl="/assets/liquour_hero.JPG"
      />
    </>
  );
};
