import React from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Businesses } from "../features/estates/businesses/Businesses";
import { Hero } from "../features/liquor/hero/Hero";
import { Works } from "../features/liquor/liquour-works/Works";
import { Order } from "../features/liquor/order/Order";

export const Liquor = () => {
  return (
    <>
      <Navbar showContact={false} />
      <Hero />
      <Works />
      <Order />
      <Businesses />
      <Footer />
    </>
  );
};
