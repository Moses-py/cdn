import React from "react";
import { CardTemplate } from "../../../components/card/CardTemplate";
import { Title } from "../../../components/title/Title";
import { CardContainer } from "../../../styles/card/Card.styles";

export const Team = () => {
  return (
    <>
      <CardContainer>
        <Title heading="Our Team" subHeading="Board Members" />
        <CardTemplate
          cardOne={{
            templateImage: "/assets/ceo-fix.jpg",
            templateDescriptionName: "Nwachukwu Azubuike (Founder)",
          }}
        />
      </CardContainer>
    </>
  );
};
