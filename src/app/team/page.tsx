import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import TeamContent from "../../components/Team/TeamContent";
import FreeTrialForm from "../../components/Common/FreeTrialForm";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Our Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImg="/images/page-title-bg1.jpg"
      />

      <TeamContent />

      <FreeTrialForm />

      <Footer />
    </>
  );
}
