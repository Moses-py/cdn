import React from "react";
import { listings } from "../../../mocks/mock_listing";
import { ListingGalleryWrapper } from "../../../styles/about/listings/Listing.styles";
import { GalleryCard } from "./GalleryCard";
import TransitionsModal from "./Modal";

export const ListingGallery: React.FunctionComponent = () => {
  return (
    <>
      <ListingGalleryWrapper>
        {listings.map((listing) => {
          return (
            <GalleryCard
              id={listing.id}
              url={listing.url}
              location={listing.location}
              bedroomCount={listing.bedroomCount}
              bathroomCount={listing.bathroomCount}
            />
          );
        })}
      </ListingGalleryWrapper>

      <TransitionsModal />
    </>
  );
};
