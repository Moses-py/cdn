import React from "react";
import { Footer } from "../components/footer/Footer";
import { Business } from "../features/homepage/businesses/Business";
import { Contact } from "../features/homepage/contact/Contact";
import { Hero } from "../features/homepage/hero/Hero";
import { Newsletter } from "../components/newsletter/Newsletter";
import { Core } from "../features/homepage/values/Core";
import { Navbar } from "../components/navbar/Navbar";

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <Navbar showContact={true} />
      <Hero />
      <Core />
      <Business />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};
