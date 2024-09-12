import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import TermsConditionsContent from "../../components/TermsConditions/TermsConditionsContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
        bgImg="/images/page-title-bg1.jpg"
      />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}
