import React from "react";
import { BusinessListTemplate } from "../../../components/businessListTemplate/BusinessListTemplate";
import { Title } from "../../../components/title/Title";

export const Businesses: React.FunctionComponent = () => {
  return (
    <>
      <Title heading="Other Businesses" />
      <BusinessListTemplate />
    </>
  );
};
