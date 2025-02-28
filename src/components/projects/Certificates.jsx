import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const certificates = [
  {
    image: "/images/gitbubCertificate.jpg",
    alt: "Certificate 1",
  },
  {
    image: "/images/diploma.jpg",
  },
  {
    image: "/images/website.png",
    alt: "Certificate 3",
  },
  {
    image: "/images/website.png",
    alt: "Certificate 4",
  },
  {
    image: "/images/website.png",
    alt: "Certificate 5",
  },
];

const Certificates = () => {
  return (
    <div className="certificates">
      {certificates.map((certificate, index) => (
        <motion.div
          key={index}
          className="certificate-part"
          whileHover={{ scale: 1.05 }} // Add hover animation
          transition={{ type: "spring", stiffness: 300 }} // Smooth transition
        >
          <img src={certificate.image} alt={certificate.alt} />
        </motion.div>
      ))}
    </div>
  );
};

export default Certificates;