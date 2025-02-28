import React from "react";
import styled from "styled-components";
import ProjectsButton from "./ProjectsButton";

const Projects = () => {
  return (
    <div className="container" id="portfolio">
      <div className="portfolio-showcase">
        <h2 className="portfolio-title">Portfolio Showcase</h2>
        <p className="portfolio-subtitle">
          Explore my projects which reflect a commitment to excellence,
          combining creativity with robust development practices.
        </p>
        <ProjectsButton></ProjectsButton>
      </div>
    </div>
  );
};

export default Projects;

const Slide = styled.div`
  margin-top: 20px;
`;