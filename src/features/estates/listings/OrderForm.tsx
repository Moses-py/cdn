import React from "react";
import {
  OrderFormEstateBox,
  OrderFormEstateBoxGroup,
  OrderFormEstateBoxTextarea,
  OrderFormEstateBoxWrapper,
  OrderFormImput,
  OrderFormImputContainer,
  OrderFormSubmit,
  OrderFormTemplate,
  OrderFormWrapper,
  OrderFormWrapperTitle,
} from "../../../styles/about/listings/Listing.styles";

export const OrderForm: React.FunctionComponent = () => {
  return (
    <>
      <OrderFormWrapper>
        <OrderFormTemplate>
          <OrderFormWrapperTitle>Mail Order Form</OrderFormWrapperTitle>
          <OrderFormImputContainer>
            <OrderFormImput type="text" placeholder="Email Address" required />
          </OrderFormImputContainer>

          <OrderFormImputContainer>
            <OrderFormImput type="text" placeholder="Phone Number (optional)" />
          </OrderFormImputContainer>

          <OrderFormEstateBoxWrapper>
            <OrderFormEstateBoxGroup>
              <OrderFormImputContainer>
                <OrderFormImput
                  type="text"
                  placeholder="Estate Selected"
                  disabled
                />
              </OrderFormImputContainer>
              <OrderFormEstateBox />
            </OrderFormEstateBoxGroup>

            <OrderFormEstateBoxGroup>
              <OrderFormImputContainer>
                <OrderFormImput
                  type="text"
                  placeholder="Esatate Group"
                  disabled
                />
              </OrderFormImputContainer>
              <OrderFormEstateBox />
            </OrderFormEstateBoxGroup>
          </OrderFormEstateBoxWrapper>

          <OrderFormImputContainer>
            <OrderFormEstateBoxTextarea rows={7} placeholder="Your Message" />
          </OrderFormImputContainer>

          <OrderFormSubmit type="submit">Send Enquiry</OrderFormSubmit>
        </OrderFormTemplate>
      </OrderFormWrapper>
    </>
  );
};
