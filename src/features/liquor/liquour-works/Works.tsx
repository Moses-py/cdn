import React from "react";
import { Title } from "../../../components/title/Title";
import {
  WorkContainer,
  WorkWrapper,
} from "../../../styles/liquors/Liquor.styles";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import LooksOneIcon from "@mui/icons-material/LooksOne";

import { WorkItem } from "./WorkItem";

export const Works = () => {
  return (
    <>
      <WorkContainer>
        <Title
          heading="How it works"
          subHeading="The solution we bring to the industry"
        />
        <WorkWrapper>
          <WorkItem
            heading="Place Order"
            text="Request for any of our products via our email channels or a direct phone call to our agents"
            icon={<LooksOneIcon sx={{ fontSize: "3rem" }} />}
            itemClass="one"
          />

          <WorkItem
            heading="Receive Request"
            text="We recieve and process your order, then send your order to you through our delivery agents nearest to you"
            icon={<LooksTwoIcon sx={{ fontSize: "3rem" }} />}
            itemClass="two"
          />

          <WorkItem
            heading="Delivery Agent Processing"
            text="Our delivery agent recieves your order and delivers it to your location"
            icon={<Looks3Icon sx={{ fontSize: "3rem" }} />}
            itemClass="three"
          />
        </WorkWrapper>
      </WorkContainer>
    </>
  );
};
