import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ServicesContent from '../../components/Services/ServicesContent';
import FeedbackSlider from '../../components/Common/FeedbackSlider';
import Footer from '../../components/Layouts/Footer';

const Services = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Services'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Services'
        bgImg='/images/page-title-bg1.jpg'
      />

      <ServicesContent />

      <FeedbackSlider />

      <Footer />
    </>
  );
};

export default Services;
