import React from "react";
import { Footer } from "../components/footer/Footer";
import { Businesses } from "../features/estates/businesses/Businesses";
import { Hero } from "../features/liquor/hero/Hero";
import { Works } from "../features/liquor/liquour-works/Works";

export const Liquor = () => {
  return (
    <>
      <Hero />
      <Works />
      <Businesses />
      <Footer />
    </>
  );
};
