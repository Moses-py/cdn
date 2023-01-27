import React from "react";
import { Title } from "../../../components/title/Title";
import {
  LinkGroup,
  OrderContainer,
  OrderGroup,
  SingleOrderWrapper,
} from "../../../styles/liquors/Liquor.styles";

export const Order = () => {
  return (
    <>
      <OrderContainer>
        <Title heading="Place your order" />
        <OrderGroup>
          <SingleOrderWrapper>
            <img src="\assets\Refill.png" alt="refill" />
            <LinkGroup>
              <a href="mailto:chuksdarlsnigeria@email.com">
                Order Refill via Mail
              </a>
              <a href="tel:0808209865">Order Refill via Call</a>
            </LinkGroup>
          </SingleOrderWrapper>
          <SingleOrderWrapper>
            <img src="\assets\Sealed.png" alt="sealed" />
            <LinkGroup>
              <a href="mailto:chuksdarlsnigeria@email.com">
                Order Sealed via Mail
              </a>
              <a href="tel:0808209865">Order Sealed via Call</a>
            </LinkGroup>
          </SingleOrderWrapper>
        </OrderGroup>
      </OrderContainer>
    </>
  );
};
