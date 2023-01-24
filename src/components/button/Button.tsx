import React from "react";
import { Link } from "react-router-dom";
import { Btn, CTAButton } from "../../styles/Button.styles";

interface ButtonProps {
  text: string;
  url?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text, url }) => {
  return (
    <>
      {url ? (
        <CTAButton>
          <Link to={`/${url}`}>{text}</Link>
        </CTAButton>
      ) : (
        <Btn>{text}</Btn>
      )}
    </>
  );
};
