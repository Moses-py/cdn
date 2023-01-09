import React from "react";
import { CoreCardWrapper } from "../../styles/Home/values/Core.styles";
interface CoreCardProps {
  img: string;
  value: string;
}

export const CoreCard: React.FunctionComponent<CoreCardProps> = ({
  img,
  value,
}) => {
  return (
    <>
      <CoreCardWrapper>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={img} alt="core-img" />
              <h3>{value}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
            </div>
          </div>
        </div>
      </CoreCardWrapper>
    </>
  );
};
