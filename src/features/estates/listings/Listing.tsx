import React from "react";
import { Title } from "../../../components/title/Title";
import {
  ListingContainer,
  ListingWrapper,
} from "../../../styles/about/listings/Listing.styles";
import { ListingGallery } from "./ListingGallery";
import { OrderForm } from "./OrderForm";

export const Listing = () => {
  return (
    <>
      <ListingContainer>
        <Title heading="Listings" />
        <ListingWrapper>
          <ListingGallery />
          <OrderForm />
        </ListingWrapper>
      </ListingContainer>
    </>
  );
};
