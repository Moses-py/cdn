import React from "react";
import { CTAButton } from "../styles/Button.styles";

interface ButtonProps {
  text: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
  return <CTAButton>{text}</CTAButton>;
};
