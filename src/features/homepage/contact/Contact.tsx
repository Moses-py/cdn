import React from "react";
import {
  ContactCard,
  ContactCardContainer,
  ContactCardMeet,
  ContactCardMessage,
} from "../../../styles/Home/contact/Contact.style";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
export const Contact: React.FunctionComponent = () => {
  return (
    <>
      <ContactCardContainer id="contact">
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
        <ContactCard>
          <ContactCardMeet>
            <h1 className="heading">Meet Us</h1>
            <div className="phone">
              <LocalPhoneRoundedIcon />
              <p className="tel">(234)808-020-9865</p>
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
            <h1 className="heading">Mail Us</h1>
            <p className="message">
              Need to make enquiries or place an order?, feel free to reach out{" "}
              <span style={{ fontWeight: "bold" }}>
                @chuksdarlsnigeria@email.com
              </span>
            </p>
            <a href="mailto:chuksdarlsnigeria@email.com">Send a mail</a>
          </ContactCardMessage>
        </ContactCard>
      </ContactCardContainer>
    </>
  );
};
