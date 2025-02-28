import React from "react";
import Header from "../../components/header/header";
import "./About.css";
import Skills from "../../components/skills/Skills";
import Chatbot from "../../components/QABox/QuestionBox";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="about-banner">
          <h1>
            A passionate and detail-oriented developer with a knack for creating
            innovative solutions and delivering seamless user experiences.
          </h1>
          <div className="profile-img">
            <img src="./images/shila.png" alt="shilaProfile" />
          </div>
        </div>
        <div className="about-container">
          <span>Scroll to see more about me</span>
          <div className="about-fullcontain">
            <div className="about-content">
              <p>
                Hello! I'm Shila Pradhan, a Data Science & AI student at Sunway
                College, with a strong passion for web development, database
                management, and tech innovations. I love building projects that
                solve real-world problems and constantly challenge myself to
                learn and grow. I have experience in Django, SQL, React,
                JavaScript, and full-stack web development, and I'm currently
                learning NoSQL (MongoDB) alongside SQL to expand my database
                expertise. As a team leader in multiple hackathons and
                innovation projects, I’ve developed problem-solving, leadership,
                and strategic thinking skills. One of my key projects is the
                Smart Canteen Management System, which integrates RFID
                technology with a web app for cashless transactions. This
                project was recognized as the best innovation at my college.
                Beyond academics, I enjoy sharing knowledge and am actively
                working on educational content about web development, databases,
                and tech innovations to help others learn and grow.
                <br />
                I don’t just build websites – I craft digital experiences
                 that prioritize user needs while maintaining technical excellence. 
                 Whether it’s debugging late into the night or learning a new framework 
                 to meet project requirements, I’m committed to delivering results that 
                 exceed expectations.
              </p>
            </div>
            <Chatbot></Chatbot>
          </div>
        </div>
        <Skills className="about-skill"></Skills>
      </div>
      <section className="contact-section" id="contact">
          <div className="contact-container">
          <div className="left">
              <img src="images/contact-img.jpg" alt="Profile" className="profile-pic" />
              <h1 className="title">
                Let’s work <br /> together
              </h1>
            </div>
            <div className="right">
              {/* Contact Me & Arrow in Same Row */}
              <div className="contact-header">
                <h2 className="contact-title">Contact Me</h2>
                <span className="arrow">←</span>
              </div>

              {/* Contact Buttons */}
              <div className="contact-buttons">
                <a href="mailto:nceelshila12@gmail.com" className="contact-btn">
                  nceelshila12@gmail.com
                </a>
                <a href="tel:+9779741732322" className="contact-btn">
                  +977-9741732322
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
    </div>
  );
};

export default About;
