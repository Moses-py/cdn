import React from "react";
import { Button } from "../../components/Button";
import {
  ContactBannerWrapper,
  ContactCard,
  ContactCardContainer,
  ContactCardMeet,
  ContactCardMessage,
} from "../../styles/Home/contact/Contact.style";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
export const Contact: React.FunctionComponent = () => {
  return (
    <>
      <ContactBannerWrapper />
      <ContactCardContainer>
        <ContactCard>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map"
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=No.%20113,%20Opobo%20road,%20Aba,%20Abia%20state,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>{" "}
            </div>
          </div>
        </ContactCard>
        <ContactCard>
          <ContactCardMeet>
            <h1 className="heading">Meet Us</h1>
            <div className="phone">
              <LocalPhoneRoundedIcon />
              <p className="tel">(234)703-736-3820</p>
            </div>
            <div className="mail">
              <MailOutlineRoundedIcon />
              <p className="mail">chuksdarlsnigeria@email.com</p>
            </div>
            <div className="addressbox">
              <BusinessRoundedIcon />
              <p className="address">
                No. 113, Opobo road, Aba, Abia state, Nigeria
              </p>
            </div>
            <div className="addressbox">
              <HomeRoundedIcon />
              <p className="address">
                31 Umuimo Rd, Behind Afor Ule market Umungasi Aba
              </p>
            </div>
          </ContactCardMeet>
        </ContactCard>
        <ContactCard>
          <ContactCardMessage>
            <h1 className="heading">Message Us</h1>
            <p>Hello,</p>
            <p className="message">
              My name is <input type="text" placeholder="Your name" /> and my
              email is <input type="email" placeholder="Your email" /> and I
              would like to discuss about{" "}
              <textarea rows={5} cols={30} placeholder="Your message" />
            </p>
            <Button text="Send" />
          </ContactCardMessage>
        </ContactCard>
      </ContactCardContainer>
    </>
  );
};
