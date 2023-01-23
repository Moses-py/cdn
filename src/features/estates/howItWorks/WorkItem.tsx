import React from "react";
import {
  WorkItemTextWrapper,
  WorkItemWrapper,
} from "../../../styles/about/work/Work.styles";

interface WorkItemProps {
  heading: string;
  text: string;
  image?: string;
  itemClass: string;
}
export const WorkItem: React.FunctionComponent<WorkItemProps> = ({
  heading,
  text,
  image,
  itemClass,
}) => {
  return (
    <>
      <WorkItemWrapper className={itemClass}>
        <WorkItemTextWrapper>
          <h1>{heading}</h1>
          <p>{text}</p>
        </WorkItemTextWrapper>
      </WorkItemWrapper>
    </>
  );
};
