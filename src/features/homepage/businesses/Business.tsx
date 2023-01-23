import React from "react";
import { CardTemplate } from "../../../components/card/CardTemplate";
import { Title } from "../../../components/title/Title";
import { BusinessContainer } from "../../../styles/Home/businesses/Business.styles";

export const Business: React.FunctionComponent = () => {
  return (
    <>
      <BusinessContainer>
        <Title
          heading="Our Businesses"
          subHeading="All Chuks-Darls Nigerian Businesses"
        />
        <CardTemplate
          cardOne={{
            templateImage: "/assets/Chuks darls ethanols.png",
            templateDescriptionName: "Chuks Darls Ethanols",
            templateDescriptionSubtitle:
              "Major distributor of Ethanol in Nigeria",
            buttonUrl: "cdn-liquor",
          }}
          cardTwo={{
            templateImage: "/assets/Chuks Darls Estates.png",
            templateDescriptionName: "Chuks Darls Estates",
            templateDescriptionSubtitle: "Estates in the city of Aba",
            buttonUrl: "cdn-estates",
          }}
        />
      </BusinessContainer>
    </>
  );
};
