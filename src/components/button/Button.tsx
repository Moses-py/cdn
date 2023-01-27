import React from "react";
import { Link } from "react-router-dom";
import { Btn, CTAButton } from "../../styles/Button.styles";

interface ButtonProps {
  text: string;
  url?: string;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  url,
  onClick,
}) => {
  return (
    <>
      {url ? (
        <CTAButton onClick={onClick}>
          <Link to={`/${url}`}>{text}</Link>
        </CTAButton>
      ) : (
        <Btn onClick={onClick}>{text}</Btn>
      )}
    </>
  );
};
