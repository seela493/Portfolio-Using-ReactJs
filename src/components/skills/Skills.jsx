import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";


const skills = [
  {
    name: "HTML",
    icon: (
      <FaHtml5 style={{ color: "#CE6003", width: "40px", height: "200px" }} />
    ),
  },
  {
    name: "CSS",
    icon: (
      <FaCss3Alt style={{ color: "#0A78CD", width: "40px", height: "200px" }} />
    ),
  },
  {
    name: "javascript",
    icon: (
      <TbBrandJavascript
        style={{ color: "#ffffff", width: "60px", height: "200px" }}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact style={{ color: "#4989F8", width: "40px", height: "200px" }} />
    ),
  },
  { name: "Django", icon: <img src="/images/django.png" alt="django" /> },
  { name: "Figma", icon: <img src="/images/figma.png" alt="figma" /> },
  { name: "Python", icon: <img src="/images/python.png" alt="python" /> },
  { name: "PowerBI", icon: <img src="/images/power-bi.png" alt="powerbi" /> },
  { name: "SQL", icon: <img src="/images/SQL.png" alt="SQL" /> },
  { name: "TailwindCSS", icon: <img src="/images/tailwind.png" alt="Tailwind" /> },

];

const Skills = ({className}) => {
  return (
    <div>
      <div className={`${className}`}>
            <h2 className="skills-title">Tools and Skills</h2>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Skills
