import React from "react";
import useWindowSize from "../../helpers/windowDimesions";
import {
  CardWrapper,
  CardTemplateImage,
  CardTemplateDescription,
  CardOne,
  CardTwo,
} from "../../styles/card/Card.styles";
import { Button } from "../button/Button";

interface CardTemplateProps {
  cardOne: {
    templateImage: string;
    templateDescriptionName: string;
    templateDescriptionSubtitle?: string;
    templateDescriptionItalics?: string;
    buttonUrl?: string;
  };
  cardTwo?: {
    templateImage: string;
    templateDescriptionName: string;
    templateDescriptionSubtitle?: string;
    templateDescriptionItalics?: string;
    buttonUrl?: string;
  };
}

export const CardTemplate: React.FunctionComponent<CardTemplateProps> = ({
  cardOne,
  cardTwo,
}) => {
  const { width } = useWindowSize();

  return (
    <>
      <CardWrapper>
        <CardOne>
          <CardTemplateImage src={cardOne.templateImage} alt="template-img" />
          {/* \assets\Chuks darls ethanols.png */}
          <CardTemplateDescription>
            <h3 className="Card-name">{cardOne.templateDescriptionName}</h3>
            {cardTwo && cardTwo.templateDescriptionItalics && (
              <p className="cardDescriptionItalics">
                {cardOne.templateDescriptionItalics}
              </p>
            )}
            <p className="Card-subtitle">
              {cardOne.templateDescriptionSubtitle}
            </p>
            {cardOne.buttonUrl && (
              <Button text="Learn more" url={cardOne.buttonUrl} />
            )}
          </CardTemplateDescription>
        </CardOne>
        {cardTwo && (
          <CardTwo>
            {(width as number) > 791 ? (
              <>
                <CardTemplateDescription>
                  <h3 className="Card-name">
                    {cardTwo && cardTwo.templateDescriptionName}
                  </h3>
                  {cardTwo && cardTwo.templateDescriptionItalics && (
                    <p className="cardDescriptionItalics">
                      {cardTwo.templateDescriptionItalics}
                    </p>
                  )}
                  <p className="Card-subtitle">
                    {cardTwo && cardTwo.templateDescriptionSubtitle}
                  </p>

                  {cardTwo && cardTwo.buttonUrl && (
                    <Button text="Learn more" url={cardTwo.buttonUrl} />
                  )}
                </CardTemplateDescription>
                <CardTemplateImage
                  src={cardTwo && cardTwo.templateImage}
                  alt="estates"
                />
                {/* \assets\Chuks Darls Estates.png */}
              </>
            ) : (
              <>
                <CardTemplateImage
                  src={cardTwo && cardTwo.templateImage}
                  alt="estates"
                />

                <CardTemplateDescription>
                  <h3 className="Card-name">
                    {cardTwo && cardTwo.templateDescriptionName}
                  </h3>
                  {cardTwo && cardTwo.templateDescriptionItalics && (
                    <p className="cardDescriptionItalics">
                      {cardTwo.templateDescriptionItalics}
                    </p>
                  )}
                  <p className="Card-subtitle">
                    {cardTwo && cardTwo.templateDescriptionSubtitle}
                  </p>

                  {cardTwo && cardTwo.buttonUrl && (
                    <Button text="Learn more" url={cardTwo.buttonUrl} />
                  )}
                </CardTemplateDescription>
              </>
            )}
          </CardTwo>
        )}
      </CardWrapper>
    </>
  );
};
