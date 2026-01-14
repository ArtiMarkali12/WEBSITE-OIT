import axios from "axios";
import { useEffect, useState } from "react";
import "./ContactPage.css";

const API = process.env.REACT_APP_API_BASE_URL;
const DOMAIN = process.env.REACT_APP_DOMAIN;

function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [contactInfo, setContactInfo] = useState(null);
  const [loading1, setLoading1] = useState(true);

  /* ================= FETCH CONTACT INFO ================= */
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await axios.get(`${API}/api/contact-info`, {
          params: { domain: DOMAIN }, // ✅ SAME AS FOOTER
        });

        const data = res.data?.data;
        setContactInfo(Array.isArray(data) ? data[0] : data);
      } catch (err) {
        console.error("Contact fetch error", err);
      } finally {
        setLoading1(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading1) return null;

  // 🔹 input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 submit enquiry
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await axios.post(`${API}/api/enquiries`, {
        ...form,
        domain: DOMAIN, // 🔥 VERY IMPORTANT
      });

      setSuccessMsg("Contact submitted successfully ✅");

      // reset form
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMsg(
        error.response?.data?.message || "Failed to submit enquiry ❌"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* hero section */}
      <section className="contact-head-section shadow">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 col-md-10 hero-content">
              <h6 className="contact-hero-subtitle"> Get in Touch With Us</h6>

              <h1 className="contact-hero-title text-white">
                We're Here to Help Let's <br />
                Start a Conversation <br />
                Today
              </h1>

              <p className="contact-hero-text">
                Have questions or need guidance? Reach out to us and our team
                will be happy to assist you every step of the way.
              </p>

              <button className="contact-hero-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="container-fluid mt-3 contact-bg">
        <div className="container contact-page shadow-lg rounded">
          <div className="row">
            {/* LEFT PANEL */}
            <div className="col-md-3 left-panel d-flex flex-column justify-content-between p-4">
              <div>
                <div className="logo mb-4">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <strong>OrangeITech</strong>
                </div>
                <h3 className="contact-headline">
                  Let’s Build Your <span>Career</span>
                </h3>
                <div className="contact-divider"></div>
                <ul className="contact-feature-list">
                  <li>Industry-ready courses</li>
                  <li>Live project-based learning</li>
                  <li>Placement & career support</li>
                  <li>Expert mentor guidance</li>
                </ul>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="col-md-9 right-panel d-flex align-items-center">
              <div className="contact-form-wrapper w-100">
                <h2 className="contact-form-title">Contact Us</h2>
                <p className="contact-subtitle">
                  Tell us your goals — we'll guide you within{" "}
                  <strong>24 hours</strong>
                </p>

                {successMsg && (
                  <div className="alert alert-success">{successMsg}</div>
                )}
                {errorMsg && (
                  <div className="alert alert-danger">{errorMsg}</div>
                )}

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Course</option>
                      <option>Full Stack Development</option>
                      <option>Mern Stack</option>
                      <option>Java FullStack</option>
                      <option>PHP FullStack</option>
                      <option>Python FullStack</option>
                      <option>.Net FullStack</option>
                      <option>Mean Stack</option>
                      <option>Data Science</option>
                      <option>Cyber Security</option>
                      <option>Digital Marketing</option>
                      <option>UI UX Developer</option>
                      <option>UI UX Developer</option>
                      <option>Flutter</option>
                      <option>Sales Force Development</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn send-btn"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact info */}
      <div className="container my-5 contact-section mt-3">
        <div className="row g-4 contact-row">
          {/* PHONE */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="contact-card p-4 h-100 animate">
              <div className="contact-icon bg-gradient1">
                <i className="flaticon-telephone"></i>
              </div>
              <div className="contact-info mt-3">
                <h6>Contact Phone</h6>
                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  {contactInfo?.phones?.[0] || "—"}
                </p>
                {contactInfo?.phones?.[1] && (
                  <p>
                    <i className="bi bi-telephone-fill me-2"></i>
                    {contactInfo.phones[1]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="contact-card p-4 h-100 animate">
              <div className="contact-icon bg-gradient2">
                <i className="flaticon-email-2"></i>
              </div>
              <div className="contact-info mt-3">
                <h6>Contact Mail</h6>
                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  {contactInfo?.email || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* TIME */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="contact-card p-4 h-100 animate">
              <div className="contact-icon bg-gradient3">
                <i className="flaticon-clock"></i>
              </div>
              <div className="contact-info mt-3">
                <h6>Lecture Time</h6>
                <p>
                  <i className="bi bi-clock-fill me-2"></i>
                  {contactInfo?.openingTime || "—"} -{" "}
                  {contactInfo?.closingTime || ""}
                </p>
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="contact-card p-4 h-100 animate">
              <div className="contact-icon bg-gradient4">
                <i className="flaticon-map-location"></i>
              </div>
              <div className="contact-info mt-3">
                <h6>Contact Location</h6>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {contactInfo?.address || "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* loacation */}
      <div className="location-section mt-0">
        {/* HEADER */}
        <div className="location-header">
          <h2>Our Locations</h2>
          <p>Find us at our premium office locations across Pune</p>
        </div>

        {/* LOCATION CARD */}
        <div className="location-card animate">
          {/* CARD HEADER */}
          <div className="card-header  p-3">
            <div>
              <h3> {contactInfo?.address || "—"}</h3>
              <span className="badge">PREMIER LOCATION</span>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="address-box">
            <h4>ADDRESS & CONTACT</h4>
            <p>{contactInfo?.fullAddress || ""}</p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              {contactInfo?.phones?.[0] || "—"}
            </p>
          </div>

          {/* MAP */}
          <div className="map-container">
            <iframe
              title="OIT Orange ITech Dhankawadi Pune"
              src="https://www.google.com/maps?q=18.4644275,73.8519334&z=16&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* BUTTON */}
          <a
            href="https://www.google.com/maps/place/OIT+-+ऑरेंज+आयटेक/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
