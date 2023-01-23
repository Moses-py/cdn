import React from "react";
import { TitleWrapper } from "../../styles/Title.styles";

interface TitleProps {
  heading: string;
  subHeading?: string;
}

export const Title: React.FunctionComponent<TitleProps> = ({
  heading,
  subHeading,
}) => {
  return (
    <>
      <TitleWrapper>
        <div className="core-typography">
          <h1 className="core-text core-header">{heading}</h1>
          <h3 className="core-text core-subtitle">{subHeading}</h3>
        </div>
      </TitleWrapper>
    </>
  );
};
