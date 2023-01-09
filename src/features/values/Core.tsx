import React from "react";
import { Title } from "../../components/Title";
import {
  CoreContainer,
  CoreWrapper,
} from "../../styles/Home/values/Core.styles";
import { CoreCard } from "./CoreCard";

export const Core = () => {
  return (
    <>
      <CoreContainer>
        <Title heading="Our Core Values" subHeading="What we stand for" />
        <CoreWrapper>
          <CoreCard
            img="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
            value="Design"
          />
          <CoreCard
            img="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
            value="Code"
          />
          <CoreCard
            img="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
            value="Launch"
          />
        </CoreWrapper>
      </CoreContainer>
    </>
  );
};
