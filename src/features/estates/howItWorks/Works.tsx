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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, excepturi quis earum voluptates velit mollitia laudantium laborum soluta in!"
            // image="\assets\one.png"
            itemClass="one"
          />

          <WorkItem
            heading="Confidentiality"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, excepturi quis earum voluptates velit mollitia laudantium laborum soluta in!"
            // image="\assets\two.png"
            itemClass="two"
          />

          <WorkItem
            heading="Transparency"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, excepturi quis earum voluptates velit mollitia laudantium laborum soluta in!"
            // image="\assets\three.png"
            itemClass="three"
          />
        </WorkWrapper>
      </WorkContainer>
    </>
  );
};
