import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
        bgImg="/images/page-title-bg2.jpg"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
