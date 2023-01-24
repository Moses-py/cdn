import React from "react";
import { Title } from "../../../components/title/Title";
import {
  CoreContainer,
  CoreWrapper,
} from "../../../styles/Home/values/Core.styles";
import { CoreCard } from "./CoreCard";

export const Core = () => {
  return (
    <>
      <CoreContainer>
        <Title heading="Our Core Values" subHeading="What we stand for" />
        <CoreWrapper>
          <CoreCard
            img="\assets\icons8-excellence-100.png"
            value="Excellence"
            text="Since conception, we are commited to our customers' satisfaction by ensuring we deliver what they desire and deserve"
          />
          <CoreCard
            img="\assets\icons8-loyalty-100.png"
            value="Loyalty"
            text="We are customer-centric, dedicated and strive for a long-lasting relationship with our customers, clients and business partners. You can trust us for good and fulfilling services."
          />
          <CoreCard
            img="\assets\icons8-increase-100.png"
            value="Growth"
            text="By being aware of Customers' needs, building good customer relationships and effective communication, we have establisjed our values and continue to grow our excellence"
          />
          <CoreCard
            img="\assets\icons8-light-on-100.png"
            value="Innovation"
            text="Our business culture is dynamic, empowering quality and responsibilities. We respect the knowledge, skills and ideas that each employee contributes to the team. We strive to offer the best innovative product and services to customer stisfaction."
          />
        </CoreWrapper>
      </CoreContainer>
    </>
  );
};
