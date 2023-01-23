import React from "react";
import { Footer } from "../components/footer/Footer";
import { Business } from "../features/homepage/businesses/Business";
import { Contact } from "../features/homepage/contact/Contact";
import { Hero } from "../features/homepage/hero/Hero";
import { Newsletter } from "../components/newsletter/Newsletter";
import { Testimonial } from "../features/homepage/testimonials/Testimonial";
import { Core } from "../features/homepage/values/Core";

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <Hero />
      <Core />
      <Business />
      <Testimonial />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};
