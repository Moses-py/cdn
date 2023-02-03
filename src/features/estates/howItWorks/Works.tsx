import React from "react";
import { Title } from "../../../components/title/Title";
import {
  WorkContainer,
  WorkWrapper,
} from "../../../styles/about/work/Work.styles";
import { WorkItem } from "./WorkItem";

export const Works = () => {
  return (
    <>
      <WorkContainer>
        <Title
          heading="How it works"
          subHeading="The solution we bring to the industry"
        />
        <WorkWrapper>
          <WorkItem
            heading="Ingenuity"
            text="We are working hard to solve the problems inherent in Nigeria's real estate space. All our estates are designed and built with customer-centric mindsets to ensure tenants' comfort and satisfaction."
            // image="\assets\one.png"
            itemClass="one"
          />

          <WorkItem
            heading="Confidentiality"
            text="We protect all personal data collected from our customers and do not sell or share it with any third party."
            // image="\assets\two.png"
            itemClass="two"
          />

          <WorkItem
            heading="Transparency"
            text="We are honest in all our transactions and ensure that all our customers receive a returned value for their money."
            // image="\assets\three.png"
            itemClass="three"
          />
        </WorkWrapper>
      </WorkContainer>
    </>
  );
};
