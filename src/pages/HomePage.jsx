import React from "react";
import AboutMe from "../components/AboutMe";
import IntroSection from "../components/IntroSection";
import MyWorks from "../components/MyWorks";
import ServicesOffered from "../components/ServicesOffered";
import Layout from "../components/shared/Layout";
import TechStack from "../components/TechStack";
const HomePage = () => {
  return (
    <Layout>
      <IntroSection />
      <ServicesOffered />
      <AboutMe />
      <MyWorks />
      <TechStack />
    </Layout>
  );
};

export default HomePage;
