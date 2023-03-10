import React from "react";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  return (
    <>
      <HeroTemplate
        heroText={
          <>
            <span>Estates</span>
          </>
        }
        heroSubText="We offer affordable residential and office spaces well situated for your convenience and comfort"
        backgroundUrl="/assets/Hero - estates.png"
      />
    </>
  );
};
