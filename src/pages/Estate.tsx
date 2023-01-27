import React from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Businesses } from "../features/estates/businesses/Businesses";
import { Hero } from "../features/estates/hero/Hero";
import { Works } from "../features/estates/howItWorks/Works";
import { Listing } from "../features/estates/listings/Listing";

export const Estate = () => {
  return (
    <>
      <Navbar showContact={false} />
      <Hero />
      <Works />
      <Listing />
      <Businesses />
      <Footer />
    </>
  );
};
