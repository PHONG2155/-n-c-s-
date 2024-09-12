import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import Services from "../../../components/HomeTwo/Services";
import Footer from "../../../components/Layouts/Footer";

const ServicesTwo = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
        bgImg="/images/page-title-bg2.jpg"
      />

      <Services />

      <Footer />
    </>
  );
};

export default ServicesTwo;
