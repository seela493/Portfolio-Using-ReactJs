import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideWrapper from "./SlideWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const projects = [
  {
    id: 1,
    cardNumber: "01",
    cardTitle: "E-Commerce Website",
    task: "-Design and Development",
    features: "Thrift With Me is a web-based platform designed to promote sustainable shopping.",
    techStack: "Figma | HTML | CSS",
    image: "/images/thrift.png",
    githubUrl: "https://github.com/seela493/Web-development-Thriftwithme-",
  },
  {
    id: 2,
    cardNumber: "02",
    cardTitle: "Smart Canteen Management System",
    task: "-Development",
    features: "A system that streamlines ordering and payments through RFID technology.",
    techStack: "Django | Firebase | HTML |CSS | Js",
    image: "/images/canteen.png",
    githubUrl: "https://github.com/seela493/CanteenManagementSystem",
  },
  {
    id:3,
    cardNumber:"03",
    cardTitle: "Portfolio",
    task: "-Development and Design",
    features: "A modern, responsive personal portfolio website showcasing my projects and skills. Includes smooth scrolling, animations, and a contact form.",
    techStack: "React | HTML | CSS | JavaScript | Figma",
    image: "/images/portfolio.png",
    githubUrl: "https://github.com/your-repo-url",

  }

];

const ProjectSlider = () => {
  return (
    <div className="slider-container">
      <SlideWrapper>
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="card">
              {/* Card Header */}
              <div className="card-header">
                <h1>{project.cardNumber}</h1>
                <div className="card-title">
                  <p>{project.cardTitle}</p>
                  <span>{project.task}</span>
                </div>
              </div>

              {/* Features & Tech Stack */}
              <div className="features-tools">
                <span>Features</span>
                <p className="features">{project.features}</p>
                <p className="tools">{project.techStack}</p>
              </div>

              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.cardTitle} />
              </div>

              {/* Project Links */}
              <div className="project-links">
                 <a href={project.githubUrl}>
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    style={{ color: "#ffffff" }}
                                    size="2x"
                                  />
                                </a>
                <a href={project.githubUrl}><motion.button
                  className="details-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Details
                </motion.button></a>
              </div>
            </div>
          </div>
        ))}
      </SlideWrapper>
    </div>
  );
};

export default ProjectSlider;