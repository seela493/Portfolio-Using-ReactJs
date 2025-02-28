import React from 'react';

// Define image paths instead of using JSX directly
const serviceData = [
  {
    name: "Design",
    icon: "/images/website.png",
    title: "UI/UX DESIGN",
    desc: "Designing visually engaging and user-friendly interfaces to create seamless digital experiences.",
  },
  {
    name: "Web-Development",
    icon: "/images/coding.png",
    title: "WEB DEVELOPMENT",
    desc: "Using React, JavaScript, HTML, CSS, and Django, creating responsive interfaces with secure backend systems.",
  },
  {
    name: "SEO",
    icon: "/images/seo.png",
    title: "SEO",
    desc: "Boosting website visibility and driving organic traffic through effective SEO strategies.",
  },
  {
    name: "PowerBi",
    icon: "/images/powerbi.png",
    title: "POWER BI DATA ANALYTICS",
    desc: "Transforming raw data into interactive dashboards and insightful reports for data-driven decisions.",
  },
];

const Services = () => {
  return (
    <section className="service-container">
      <h2>My Services</h2>
      <div className="services">
        {serviceData.map((service, index) => (
          <article key={index} className="service-card">
            <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
