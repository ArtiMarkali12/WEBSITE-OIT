import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "../Courses/courses.css";
// import "./SocialButtons.css"; // separate CSS file

const SocialButtons = () => {
  return (
    <div className="social-buttons-wrapper">
      <div className="social-buttons">
        <a href="https://wa.me/9975708774" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/orangeitech/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/orangeitech/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@Orangeitech" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/orange-itech-intstitue/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
