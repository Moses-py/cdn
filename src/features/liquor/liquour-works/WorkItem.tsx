import React from "react";
import {
  LinkGroup,
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
      {itemClass === "one" ? (
        <WorkItemWrapper className={itemClass}>
          <p>{icon}</p>

          <WorkItemTextWrapper>
            <h1>{heading}</h1>
            <p>{text}</p>
          </WorkItemTextWrapper>
          <LinkGroup>
            <a href="mailto:chuksdarlsnigeria@email.com">Email us</a>
            <a href="tel:0808209865">Call us</a>
          </LinkGroup>
        </WorkItemWrapper>
      ) : (
        <WorkItemWrapper className={itemClass}>
          <p>{icon}</p>

          <WorkItemTextWrapper>
            <h1>{heading}</h1>
            <p>{text}</p>
          </WorkItemTextWrapper>
        </WorkItemWrapper>
      )}
    </>
  );
};
