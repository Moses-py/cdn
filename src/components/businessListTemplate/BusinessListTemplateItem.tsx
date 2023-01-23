import React from "react";
import "./businessListTemplate.css";
interface BusinessListItemProps {
  image_url: string;
  title: string;
  button: React.ReactNode;
}
export const BusinessListTemplateItem: React.FunctionComponent<
  BusinessListItemProps
> = ({ image_url, title, button }) => {
  return (
    <>
      <li>
        <div className="card">
          <img src={image_url} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h3 className="card__title">{title}</h3>
              </div>
            </div>
            <p className="card__description">{button}</p>
          </div>
        </div>
      </li>
    </>
  );
};
