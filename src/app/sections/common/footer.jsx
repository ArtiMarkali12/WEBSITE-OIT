import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import axios from "axios";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import SocialBtn from "../../components/SocialBtn";
// import FloatingSocialButtons from "../../components/FloatingSocialButtons";

const API = process.env.REACT_APP_API_BASE_URL;
const DOMAIN = process.env.REACT_APP_DOMAIN;

export default function Footer() {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH CONTACT INFO ================= */
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await axios.get(`${API}/api/contact-info`, {
          params: { domain: DOMAIN }, // ✅ SAME AS CONTACT PAGE
        });

        const data = res.data?.data;

        if (Array.isArray(data)) {
          setContactInfo(data[0] || null);
        } else {
          setContactInfo(data || null);
        }
      } catch (err) {
        console.error("❌ Footer contact fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading || !contactInfo) return null;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO */}
       <div className="footer-col">
  <img src="/logo5.png" alt="Logo" className="footer-logo" />

  <p className="footer-text">
    Building careers with practical learning & industry-ready skills.
  </p>

  {/* 🔥 SOCIAL ICONS BELOW TEXT */}
  {/* 🔥 SOCIAL ICONS BELOW TEXT */}
<div className="footer-social-icons">
  <a
    href="https://www.facebook.com/orangeitech/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon fb"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/orangeitech/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon ig"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/company/orange-itech-intstitue/?originalSubdomain=in"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon ln"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.youtube.com/@Orangeitech"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon yt"
  >
    <FaYoutube />
  </a>

  {/* <a
    href="https://wa.me/9975708774"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon wa"
  >
    <FaWhatsapp />
  </a> */}
</div>

</div>


        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            {/* <li>
              <Link to="/courses">Courses</Link>
            </li> */}
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Career</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/careers">Internship</Link>
            </li>
            <li>
              <Link to="/placement">Placements</Link>
            </li>
            <li>
              <Link to="/">Upcoming Batches</Link>
            </li>
            {/* <li>
              <Link to="/events">Events</Link>
            </li> */}
          </ul>
        </div>






        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            {contactInfo?.fullAddress || ""}
            <br />

            <a href={`tel:${contactInfo.phones?.[0]}`}>
              {contactInfo.phones?.[0]}
            </a>
            <br />

            {contactInfo.phones?.[1] && (
              <>
                <a href={`tel:${contactInfo.phones[1]}`}>
                  {contactInfo.phones[1]}
                </a>
                <br />
              </>
            )}

            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>

          
         
        </div>

      
        {/* <FloatingSocialButtons/> */}
      </div>






      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Orange ITech. All Rights Reserved.
      </div>

      {/* FLOATING BUTTONS */}
      

     
          {/* <a href="https://wa.me/9975708774" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
          <FaWhatsapp />
        </a> */}

         {/* ✅ SOCIAL ICONS BELOW SERVICES */}
  <div className="footer-social-row">
    <SocialBtn />
  </div>
        





        
    </footer>
  );
}
