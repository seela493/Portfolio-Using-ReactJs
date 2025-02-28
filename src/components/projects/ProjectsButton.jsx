import React, { useState } from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import Certificates from "./Certificates";

const ProjectsButton = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div >
      <div className="buttons">
        <button
          className={`toggle-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("projects");
          }}
        >
          Projects
        </button>
        <button
          className={`toggle-button ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("certificates"); // Fixed typo here
          }}
        >
          Certificates
        </button>
      </div>

      <div className="content" >
        {activeTab === "projects" && (
          <Slide>
            <SliderComp />
          </Slide>
        )}
        {activeTab === "certificates" && (
          <div className="certificates-content">
            <Certificates />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsButton;

const Slide = styled.div`
  margin-top: 20px;
`;