import React from "react";
import styled from "styled-components";

const SocialMedia = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <a href="https://www.linkedin.com/in/shilapradhan/"><img src="./images/linkedin.png" alt="LinkedIn" /></a>
        </li>
        <li className="icon whatsapp">
          <span className="tooltip">WhatsApp</span>
          <a href="https://wa.me/+9779818051975"><img src="./images/whatsapp.png" alt="WhatsApp" /></a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <a href="https://www.instagram.com/seela493/"><img src="./images/instagram.png" alt="instagram" /></a>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon img {
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease;
  }

  .wrapper .icon:hover img {
    transform: scale(1.2);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }

  .wrapper .whatsapp:hover,
  .wrapper .whatsapp:hover .tooltip,
  .wrapper .whatsapp:hover .tooltip::before {
    background: #25d366;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }
`;

export default SocialMedia;
