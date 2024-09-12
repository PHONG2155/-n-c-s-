import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import AboutContact from '../../components/About/AboutContent';
import Team from '../../components/Common/Team';
import PartnerContent from '../../components/Common/PartnerContent';
import FeedbackSlider from '../../components/Common/FeedbackSlider';
import PricingCard from '../../components/Common/PricingCard';
import FreeTrialForm from '../../components/Common/FreeTrialForm';
import Footer from '../../components/Layouts/Footer';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='About Us'
        homePageUrl='/'
        homePageText='Home'
        activePageText='About Us'
        bgImg='/images/page-title-bg1.jpg'
      />

      <AboutContact />

   

      <Team />

      <PartnerContent />

      <FeedbackSlider />

      <PricingCard />

      <FreeTrialForm />

      <Footer />
    </>
  );
}
