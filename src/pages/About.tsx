import React from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Newsletter } from "../components/newsletter/Newsletter";
import { BusinessPage } from "../features/about/hero/BusinessPage";
import { Subsidiary } from "../features/about/subsidiary/Subsidiary";
import { Team } from "../features/about/team/Team";

export const About: React.FunctionComponent = () => {
  return (
    <>
      <Navbar showContact={false} />
      <BusinessPage />
      <Subsidiary />
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
};
