import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import axios from "axios";

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
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/internship">Internship</Link>
            </li>
            <li>
              <Link to="/placement">Placements</Link>
            </li>
            <li>
              <Link to="/batches">Upcoming Batches</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
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
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Orange ITech. All Rights Reserved.
      </div>

      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">
        {/* WhatsApp */}
        {contactInfo?.phones?.[0] && (
          <a
            href={`https://wa.me/91${contactInfo.phones[0].replace(
              /\D/g,
              ""
            )}?text=Hello%20I%20want%20to%20enquire`}
            target="_blank"
            rel="noreferrer"
            className="float-btn whatsapp pulse"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </a>
        )}

        {/* Call */}
        {contactInfo?.phones?.[0] && (
          <a
            href={`tel:${contactInfo.phones[0]}`}
            className="float-btn call bounce"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Call"
            />
          </a>
        )}
      </div>
    </footer>
  );
}
