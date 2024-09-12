import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import BlogThreeGrid from '../../components/Blog/BlogThreeGrid';
import Footer from '../../components/Layouts/Footer';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Blog Grid'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Blog Grid'
        bgImg='/images/page-title-bg2.jpg'
      />

      <BlogThreeGrid />

      <Footer />
    </>
  );
}
