import React from "react";
import {
  WorkItemTextWrapper,
  WorkItemWrapper,
} from "../../../styles/liquors/Liquor.styles";

interface WorkItemProps {
  heading: string;
  text: string;
  image?: string;
  itemClass: string;
  icon: React.ReactNode;
}
export const WorkItem: React.FunctionComponent<WorkItemProps> = ({
  heading,
  text,
  image,
  itemClass,
  icon,
}) => {
  return (
    <>
      <WorkItemWrapper className={itemClass}>
        <p>{icon}</p>

        <WorkItemTextWrapper>
          <h1>{heading}</h1>
          <p>{text}</p>
        </WorkItemTextWrapper>
      </WorkItemWrapper>
    </>
  );
};
