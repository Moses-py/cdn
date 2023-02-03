import React from "react";
import { BusinessListTemplate } from "../../../components/businessListTemplate/BusinessListTemplate";
import { Title } from "../../../components/title/Title";

export const Subsidiary = () => {
  return (
    <>
      <div className="business-wrapper">
        <Title heading="Our Businesses" />
        <BusinessListTemplate />
      </div>
    </>
  );
};
