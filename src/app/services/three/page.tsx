import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ServicesStyleThree from "../../../components/Services/ServicesStyleThree";

const ServicesThree = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Services Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Three"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ServicesStyleThree />

      <Footer />
    </>
  );
};

export default ServicesThree;
