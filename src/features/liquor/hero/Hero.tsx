import React from "react";
import { HeroTemplate } from "../../../components/hero/HeroTemplate";

export const Hero: React.FunctionComponent = () => {
  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   className: "inner-slider",
  // };
  return (
    <>
      {/* <HeroWrapper>
        <Slider {...settings}>
          <img src="\assets\liquour_hero.JPG" alt="refill" />
          <img src="\assets\home-ethanol.png" alt="sealed" />
        </Slider>
      </HeroWrapper> */}
      <HeroTemplate
        heroText={
          <>
            <span>Ethanols</span>
          </>
        }
        heroSubText="Chuks-Darls Nigeria is a major distributor of ethanol since 1999 with an approved NAFDAC number"
        backgroundUrl="/assets/liquour_hero.JPG"
      />
    </>
  );
};
