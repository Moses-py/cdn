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
            templateImage: "/assets/about-image1.png",
            templateDescriptionName: "Chuks Emeka",
            templateDescriptionSubtitle:
              "Eget est sed urna felis. In vulputate in integer feugiat eu tortor ut faucibus. Viverra amet, nulla risus nunc purus lobortis nunc consequat. Fermentum cras elit egestas turpis. Iaculis nisl sit suspendisse tortor et nunc arcu.",
            templateDescriptionItalics: "Chief Executive Officer",
          }}
          cardTwo={{
            templateImage: "/assets/about-image2.png",
            templateDescriptionName: "Chuks Emeka",
            templateDescriptionSubtitle:
              "Eget est sed urna felis. In vulputate in integer feugiat eu tortor ut faucibus. Viverra amet, nulla risus nunc purus lobortis nunc consequat. Fermentum cras elit egestas turpis. Iaculis nisl sit suspendisse tortor et nunc arcu.",
            templateDescriptionItalics: "Chief Executive Officer",
          }}
        />
      </CardContainer>
    </>
  );
};
