import React from "react";
import { Button } from "../../../components/button/Button";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";
export const BusinessPage: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            <span>Chuks Darls</span> Nigeria
          </>
        }
        heroSubText="Chuks-Darls is a major distributor of ethanol in Aba with NAFDAC approved number. Recently it has diversified into real estate with over 5 estates in the city of Aba."
        backgroundUrl="/assets/Aba city.jpg"
        buttons={[
          <Button text="ESTATES" url="cdn-estates" />,
          <Button text="ETHANOLS" url="cdn-liquor" />,
        ]}
      />
    </>
  );
};
