import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ContactFormContent from '../../components/Contact/ContactFormContent';
import Footer from '../../components/Layouts/Footer';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Contact'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Contact'
        bgImg='/images/page-title-bg3.jpg'
      />

      <ContactFormContent />

      <Footer />
    </>
  );
}
