import React from "react";
import { Btn, CTAButton } from "../../styles/Button.styles";

interface ButtonProps {
  text: string;
  url?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text, url }) => {
  return (
    <>
      {url ? <CTAButton href={`/${url}`}>{text}</CTAButton> : <Btn>{text}</Btn>}
    </>
  );
};
