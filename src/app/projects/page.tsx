import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ProjectsCard from "../../components/Projects/ProjectsCard";

const Projects = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        bgImg="/images/page-title-bg1.jpg"
      />

      <ProjectsCard />

      <Footer />
    </>
  );
};

export default Projects;
