import React, { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Projects from "../../components/projects/Projects";
import Header from "../../components/header/header";
import CvButton from "../../components/CvButton";
import Services from "../../components/Services";
import Footer from "../../components/footer/Footer";
import Skills from "../../components/skills/Skills";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const first = "SHILA";
    const last = "PRADHAN";
    let typeFirst, typeLast;
  
    typeFirst = setInterval(() => {
      if (currentIndex <= first.length) {
        setFirstName(first.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeFirst);
        currentIndex = 0;
  
        setTimeout(() => {
          typeLast = setInterval(() => {
            if (currentIndex <= last.length) {
              setLastName(last.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typeLast);
              setShowCursor(false);
            }
          }, 150);
        }, 500);
      }
    }, 150);
  
    return () => {
      clearInterval(typeFirst);
      clearInterval(typeLast); 
    };
  }, []);
  
  return (
    <div className="wrapper" id="top">
      <Header></Header>
      <main>
        <section className="banner-section">
          <div className="banner-container">
            <div className="banner-text">
              <span className="greetings">
                Hi Everyone,
                <br /> I'm
              </span>
              <h2 className="banner-name">
                <span className={showCursor ? "typing-animation" : ""}>
                  {firstName}
                </span>
                <br />
                <span className={showCursor ? "typing-animation" : ""}>
                  {lastName}
                </span>
              </h2>
              <div className="social-link">
                <a
                  href="https://github.com/seela493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ffffff" }}
                    size="2x"
                  />
                </a>

                <a href="https://www.linkedin.com/in/shilapradhan/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#3176aa" }}
                    size="2x"
                  />
                </a>
                <a href="https://wa.me/+9779818051975">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#63E6BE" }}
                    size="2x"
                  />
                </a>
              </div>
            </div>
            <div className="image-container">
              <div className="background-box"></div>
              <img src="images/banner-profile.png" alt="bannerProfile" />
            </div>
          </div>
        </section>
        <h2 className="about-title">About me</h2>
        <div className="container">
          <section className="about-section">
            <div className="profile-content">
              <p className="about-para">
                Hi, <br /> I'm Shila Pradhan, <br /> a web developer with a
                knack for turning ideas into functional and aesthetically
                pleasing web applications. With expertise in Django, Firebase,
                and front-end development, I’ve built projects like a 'Smart
                Canteen Management System' that streamlines ordering and
                payments through RFID technology.
                <br />
                My goal is to design user-centric solutions that solve
                real-world problems. When I’m not coding, I enjoy traveling and
                exploring new cultures. Take a look at my projects below, and
                don’t hesitate to reach out if you'd like to collaborate!
              </p>
              <CvButton></CvButton>
            </div>
            <div className="profile-image">
              <img
                src="/images/shila.jpeg"

                alt="profilePIC"
              />
            </div>
          </section>
        </div>

        <Skills className="skill-section"></Skills>
        <div className="container">
          <Services></Services>
        </div>
        <Projects></Projects>

        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="left">
              <img
                src="images/contact-img.jpg"
                alt="Profile"
                className="profile-pic"
              />
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
              <div className="back-top">
                <a href="#top" style={{ color: "white" }}>
                  Back to top ⬆
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
};
export default Home;
