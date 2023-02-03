import React from "react";
import { Title } from "../../../components/title/Title";
import {
  LinkGroup,
  OrderContainer,
  OrderGroup,
  SingleOrderWrapper,
} from "../../../styles/liquors/Liquor.styles";
import Slider from "react-slick";

export const Order = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <OrderContainer>
        <Title heading="Place your order" />
        <OrderGroup>
          <SingleOrderWrapper>
            <Slider {...settings}>
              <div>
                <img src="\assets\Refill.png" alt="refill" />
              </div>
              <div>
                <img src="\assets\Sealed.png" alt="sealed" />
              </div>
            </Slider>
            <LinkGroup>
              <a href="mailto:chuksdarlsnigeria@email.com">Email us</a>
              <a href="tel:+2348080209865">Call us</a>
            </LinkGroup>
          </SingleOrderWrapper>
        </OrderGroup>
      </OrderContainer>
    </>
  );
};
