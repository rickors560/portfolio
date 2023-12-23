import React from "react";
import MainCard from "../shared/main-card";
import "./styles.scss";
import AboutMe from "../about-me";

const Home = () => {
  return (
    <MainCard className="main-content">
      <AboutMe />
    </MainCard>
  );
};

export default Home;
