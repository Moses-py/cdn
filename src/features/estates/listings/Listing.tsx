import React from "react";
import { Title } from "../../../components/title/Title";
import {
  ListingContainer,
  ListingWrapper,
} from "../../../styles/about/listings/Listing.styles";
import { ListingGallery } from "./ListingGallery";

export const Listing = () => {
  return (
    <>
      <ListingContainer>
        <Title heading="Listings" />
        <ListingWrapper>
          <ListingGallery />
        </ListingWrapper>
      </ListingContainer>
    </>
  );
};
