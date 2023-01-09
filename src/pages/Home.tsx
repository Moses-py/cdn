import React from "react";
import { Business } from "../features/businesses/Business";
import { Contact } from "../features/contact/Contact";
import { Hero } from "../features/hero/Hero";
import { Navbar } from "../features/hero/Navbar";
import { Newsletter } from "../features/newsletter/Newsletter";
import { Testimonial } from "../features/testimonials/Testimonial";
import { Core } from "../features/values/Core";
import { Footer } from "../footer/Footer";
import { DesignCircle, DesignCircleDuo } from "../styles/Home/hero/Hero.styles";

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Core />
      <Business />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
      <DesignCircle />
      <DesignCircleDuo />
    </>
  );
};
