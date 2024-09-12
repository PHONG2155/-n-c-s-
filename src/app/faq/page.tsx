import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import FaqContent from "../../components/Faq/FaqContent";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImg="/images/page-title-bg1.jpg"
      />

      <FaqContent />

      <Footer />
    </>
  );
}
