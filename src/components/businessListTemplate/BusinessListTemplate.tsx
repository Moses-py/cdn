import React from "react";
import { Button } from "../button/Button";
import { BusinessListTemplateItem } from "./BusinessListTemplateItem";
import "./businessListTemplate.css";
export const BusinessListTemplate = () => {
  return (
    <>
      <div className="business-template-wrapper">
        <ul className="cards">
          <BusinessListTemplateItem
            image_url="\assets\listing.JPG"
            title="Estates"
            button={<Button text="Explore" url="cdn-estates" />}
          />
          <BusinessListTemplateItem
            image_url="\assets\home-ethanol.png"
            title="Ethanols"
            button={<Button text="Explore" url="cdn-liquor" />}
          />
        </ul>
      </div>
    </>
  );
};
