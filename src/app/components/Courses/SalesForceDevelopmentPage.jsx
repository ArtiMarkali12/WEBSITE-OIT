import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import {
  FaCloud,
  FaUserCog,
  FaHandshake,
  FaTools,
  FaHeadset,
  FaShieldAlt,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaHeart,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaSyncAlt,
  FaStar,
  FaUserFriends,
  FaCalendarAlt,
  FaLaptopHouse,
  FaClock,
  FaRupeeSign,
  FaWallet,
  FaJava,
  FaServer,
  FaCogs,
  FaGlobe,
  FaVideo,
  FaQuestionCircle,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaCertificate,
} from "react-icons/fa";

import "../Courses/courses.css";
import { useState } from "react";
import SocialButtons from "./SocialButtons";

export default function JavaFullStackPage() {
  const modules = [
    {
      title: "Foundation of Ethical Hacking & Information Security",
      children: [
        {
          title: "1. Introduction to Ethical Hacking",
          topics: [
            "HTML Tags and Elements",
            "HTML Attributes",
            "HTML Formatting",
            "HTML Phrase Tags",
            "HTML Meta Tags",
            "HTML Comments",
            "HTML Image Tags",
            "HTML Tables",
            "HTML Lists",
            "HTML Iframes",
            "HTML Blocks",
            "HTML Backgrounds",
            "HTML Colors and Fonts",
          ],
        },
      ],
    },

    {
      title: "Information Gathering & Vulnerability Assessment",
      children: [
        {
          title: "1. Denial-of-Service (DoS & DDoS)",
          topics: [
            "Execution of large-scale service disruption attacks",
            "Mitigation techniques for DoS and DDoS attacks",
          ],
        },
        {
          title: "2. Session Hijacking",
          topics: [
            "Session hijacking methods",
            "Network-level protection techniques",
          ],
        },
        {
          title: "3. Evading IDS, Firewalls & Honeypots",
          topics: [
            "Bypassing IDS and firewall systems",
            "Strengthening perimeter defenses",
          ],
        },
      ],
    },

    {
      title: "System Exploitation Techniques",
      children: [
        {
          title: "1. Footprinting and Reconnaissance",
          topics: [
            "Passive information gathering",
            "Active information gathering",
            "Modern reconnaissance tools",
          ],
        },
        {
          title: "2. Scanning Networks",
          topics: ["Types of network scanning", "Scanning countermeasures"],
        },
        {
          title: "3. Enumeration",
          topics: [
            "Detailed system information gathering",
            "Defensive enumeration techniques",
          ],
        },
        {
          title: "4. Vulnerability Analysis",
          topics: [
            "Identifying vulnerabilities",
            "Analyzing vulnerabilities",
            "Reporting vulnerabilities using industry tools",
          ],
        },
      ],
    },

    {
      title: "Denial, Hijacking & Evasion Tactics",
      children: [
        {
          title: "1. Denial, Hijacking & Evasion Techniques",
          topics: [
            "Advanced attack techniques",
            "Detection and prevention strategies",
          ],
        },
      ],
    },

    {
      title: "Web & Application-Level Hacking",
      children: [
        {
          title: "1. Cloud Computing Security",
          topics: [
            "Securing cloud environments",
            "Container security",
            "Serverless application security",
          ],
        },
        {
          title: "2. Cryptography",
          topics: [
            "Encryption algorithms",
            "Public Key Infrastructure (PKI)",
            "Digital certificates",
            "Cryptanalysis tools",
          ],
        },
      ],
    },

    {
      title: "Wireless, Mobile & IoT Security",
      children: [
        {
          title: "1. Hacking Web Servers",
          topics: [
            "Web server vulnerability exploitation",
            "Defensive security techniques",
          ],
        },
        {
          title: "2. Hacking Web Applications",
          topics: [
            "OWASP Top 10 vulnerabilities",
            "Injection attacks",
            "Secure coding practices",
          ],
        },
        {
          title: "3. SQL Injection",
          topics: [
            "SQL Injection attack lifecycle",
            "Evasion techniques",
            "Database hardening practices",
          ],
        },
      ],
    },

    {
      title: "Hands-On Learning Labs",
      children: [
        {
          title: "1. Simulated Cyber Attacks",
          topics: [
            "Phishing attacks",
            "Brute force attacks",
            "Malware analysis",
          ],
        },
        {
          title: "2. Live Threat Detection",
          topics: ["Wireshark", "Burp Suite", "Metasploit"],
        },
        {
          title: "3. Red Team vs Blue Team Challenges",
          topics: [
            "Ethical hacking simulations",
            "Incident response exercises",
          ],
        },
        {
          title: "4. Tool-Based Labs",
          topics: ["Kali Linux labs", "SIEM systems", "Firewall configuration"],
        },
        {
          title: "5. Skill Progress Tracker",
          topics: ["Performance monitoring", "Feedback-based improvement"],
        },
      ],
    },

    {
      title: "Aptitude",
      children: [
        {
          title: "1. Quantitative Aptitude",
          topics: [
            "Average",
            "Percentage",
            "Profit and Loss",
            "Simple Interest and Compound Interest",
            "Ratio and Proportion",
            "Time and Work",
            "Time, Speed, and Distance",
            "Number System",
            "Permutation and Combination",
            "Probability",
            "Data Interpretation",
          ],
        },
        {
          title: "2. Logical Reasoning",
          topics: [
            "Blood Relations",
            "Direction Sense",
            "Coding and Decoding",
            "Clocks and Calendar",
            "Cubes and Dice",
            "Seating Arrangements",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles",
          ],
        },
      ],
    },

    {
      title: "Soft Skills",
      children: [
        {
          title: "1. Professional Foundation",
          topics: [
            "Professional growth mindset",
            "Competency matrix understanding",
          ],
        },
        {
          title: "2. Communication & Presentation",
          topics: [
            "Verbal and non-verbal communication",
            "Presentation skills",
            "Business communication",
          ],
        },
        {
          title: "3. Personal Development",
          topics: [
            "Motivation and attitude",
            "Emotional intelligence",
            "Leadership and teamwork",
          ],
        },
        {
          title: "4. Career Readiness",
          topics: [
            "ATS-friendly resume creation",
            "Group discussion strategies",
            "Mock interviews",
            "Virtual interview etiquette",
          ],
        },
        {
          title: "5. Future Planning",
          topics: ["IT industry trends", "Career roadmap and certifications"],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "1. Projects",
          topics: ["Hands-on ethical hacking project implementation"],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is Salesforce Development?",
      answer:
        "Salesforce development involves customizing and extending the Salesforce platform using tools like Apex, Lightning Web Components (LWC), Visualforce, and automation features.",
    },
    {
      question: "Is Salesforce good for beginners?",
      answer:
        "Yes, Salesforce is beginner-friendly and provides a structured learning path starting from admin concepts to advanced development roles.",
    },
    {
      question: "Do I need coding experience to learn Salesforce?",
      answer:
        "No, prior coding experience is not mandatory. You can begin with Salesforce Admin concepts and gradually move into development using Apex and LWC.",
    },
    {
      question: "Is Salesforce a good career option?",
      answer:
        "Yes, Salesforce offers excellent career growth, global demand, and attractive salary packages across various roles.",
    },
    {
      question: "Do you help with Salesforce certification?",
      answer:
        "Yes, the course includes complete Trailhead guidance and dedicated Salesforce certification preparation support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [activeChild, setActiveChild] = useState({});

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
    setActiveChild({}); // ✅ reset children correctly
  };

  const toggleChild = (moduleIndex, childIndex) => {
    setActiveChild((prev) => ({
      ...prev,
      [moduleIndex]: prev[moduleIndex] === childIndex ? null : childIndex,
    }));
  };

  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="java-page">
      {/* ===== HERO SECTION ===== */}
      <section className="java-hero">
        <div className="java-hero-container">
          {/* LEFT CONTENT */}
          <div className="java-hero-left">
            <h1>
              Salesforce Development Course - Build a Career on the Salesforce
              Platform
            </h1>

            <p>
              Learn Salesforce Admin, Apex, LWC & Automation with hands-on
              projects and placement support.
            </p>

            <div className="hero-buttons">
              <NavLink
                             to="/contact-us"
                             className="btn-primary"
                             style={{ textDecoration: "none" }}
                           >
                             Download Syllabus
                           </NavLink>
             
                   
                           <NavLink
                             to="/contact-us"
                             className="btn-outline"
                             style={{ textDecoration: "none" }}
                           >
                             Enroll Now
                           </NavLink>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="java-hero-right">
            <div className="video-wrapper">
              <iframe
                width="550"
                height="310"
                src="https://www.youtube.com/embed/tTX5XScrntc"
                title="Become a Salesforce CRM Expert | Complete Roadmap &amp; Technologies"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSE HIGHLIGHTS ===== */}
      <section className="highlights-section container">
        <div className="row text-center">
          <div className="col-md-3 px-2">
            <div className="highlight-box">
              <h4>Duration</h4>
              <p>6 Months</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Mode</h4>
              <p>Online / Offline</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Projects</h4>
              <p>5+ Live Projects</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Certification</h4>
              <p>Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <h2 className="angular-title">
              About the Salesforce Development Course
            </h2>

            <Col lg={6} md={6} className="about-content-col">
              <p>
                The Salesforce Development Course at Orange ITech is a
                comprehensive, hands-on training program designed for beginners
                and aspiring developers who want to build a high-demand career
                in Salesforce.
              </p>

              <p>
                This course covers everything from Salesforce Admin fundamentals
                to advanced development topics such as Apex programming,
                Lightning Web Components (LWC), Visualforce, automation tools,
                and deployment strategies. You’ll learn how to customize
                Salesforce, automate business processes, and build scalable
                applications on the world’s leading CRM platform.
              </p>

              <p>
                With real-world projects, Trailhead-based learning, and case
                study-driven training, this course prepares you to confidently
                work on Salesforce implementations and become
                certification-ready.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/salesforce.jpg")}
                  alt="Java Course Image"
                  className="gallery-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="who-can-join-section">
        <Container>
          {/* HEADING */}
          <h2 className="who-title">
            Who Should Enroll in a SalesForce Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented SalesForce Development Training Course is designed
            for a wide range of learners, including:
          </p>

          {/* SCROLL WRAPPER */}
          <div className="who-scroll-wrapper">
            <div className="who-scroll-track">
              {/* CARD 1 */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>
                  Students and fresh graduates looking to start their career in
                  IT field
                </span>
              </div>

              {/* CARD 2 */}
              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>
                  Working professionals planning a career switch to software
                  development
                </span>
              </div>

              {/* CARD 3 */}
              <div className="who-card">
                <FaCode className="who-icon" />
                <span>
                  Backend or frontend developers aiming to become full-stack
                  developers
                </span>
              </div>

              {/* CARD 4 */}
              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>
                  Entrepreneurs and freelancers wanting to build full-stack web
                  applications
                </span>
              </div>

              {/* CARD 5 */}
              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>
                  Anyone with a passion for coding (basic programming knowledge
                  is helpful but not mandatory)
                </span>
              </div>

              {/* DUPLICATE FOR SMOOTH LOOP */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>
                  Students and fresh graduates looking to start their career in
                  IT field
                </span>
              </div>

              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>
                  Working professionals planning a career switch to software
                  development
                </span>
              </div>

              <div className="who-card">
                <FaCode className="who-icon" />
                <span>
                  Backend or frontend developers aiming to become full-stack
                  developers
                </span>
              </div>

              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>
                  Entrepreneurs and freelancers wanting to build full-stack web
                  applications
                </span>
              </div>

              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>
                  Anyone with a passion for coding (basic programming knowledge
                  is helpful but not mandatory)
                </span>
              </div>

              {/* DUPLICATE FOR SMOOTH LOOP */}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CURRICULUM ===== */}
      <section className="syllabus-wrapper">
        <div className="syllabus-container">
          <h4 className="mean-title">
            SalesForce Development Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our SalesForce Development course syllabus is structured to cover
            end-to-end full-stack technologies with a strong emphasis on
            practical implementation and real-world projects.
          </p>

          {/* STACKED MODULES */}
          <div className="faq-list">
            {modules.map((module, mIndex) => (
              <div key={mIndex} className="faq-module-wrapper">
                {/* MAIN MODULE */}
                <div
                  className="faq-module"
                  onClick={() => toggleModule(mIndex)}
                >
                  <span className="module-title">{module.title}</span>
                  <span className="module-plus">
                    {activeModule === mIndex ? "−" : "+"}
                  </span>
                </div>

                {/* MODULE CONTENT */}
                {activeModule === mIndex && (
                  <div className="module-desc">
                    {module.children.map((child, cIndex) => (
                      <div key={cIndex} className="inner-wrapper">
                        {/* CHILD TITLE */}
                        <div
                          className="inner-title"
                          onClick={() => toggleChild(mIndex, cIndex)}
                        >
                          <span>{child.title}</span>
                          <span>
                            {activeChild[mIndex] === cIndex ? "−" : "+"}
                          </span>
                        </div>

                        {/* CHILD CONTENT */}
                        {activeChild[mIndex] === cIndex && (
                          <ul className="syllabus-list">
                            {child.topics.map((topic, tIndex) => (
                              <li key={tIndex}>• {topic}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <Container>
          <Row className="align-items-start">
            {/* LEFT SIDE – CONTENT INTRO */}
            <Col lg={5} md={12} className="why-left">
              <h2 className="about-title">
                Why Choose Orange ITech for SalesForce Development?
              </h2>

              <p className="why-subtitle">
                Orange ITech stands out as a trusted training institute by
                focusing on skills, employability, and real-world exposure.
              </p>

              {/* <Button className=" "></Button> */}
               <NavLink
                to="/contact-us"
                className="hero-buttons btn-primary mt-4"
                style={{ textDecoration: "none", width: "180px" }}
              >
                Request Callback
              </NavLink>
            </Col>

            {/* RIGHT SIDE – FEATURE GRID */}
            <Col lg={7} md={12}>
              <div className="why-grid">
                <div className="why-card">
                  <FaChalkboardTeacher className="why-icon" />
                  <span>
                    Industry-expert trainers with real project experience
                  </span>
                </div>

                <div className="why-card">
                  <FaProjectDiagram className="why-icon" />
                  <span>Real-time full-stack project exposure</span>
                </div>

                <div className="why-card">
                  <FaSyncAlt className="why-icon" />
                  <span>
                    Updated syllabus aligned with current industry needs
                  </span>
                </div>

                <div className="why-card">
                  <FaStar className="why-icon" />
                  <span>High student satisfaction & positive reviews</span>
                </div>

                <div className="why-card">
                  <FaUserFriends className="why-icon" />
                  <span>1:1 mentorship and career guidance</span>
                </div>

                <div className="why-card">
                  <FaBriefcase className="why-icon" />
                  <span>Interview preparation & placement assistance</span>
                </div>

                <div className="why-card">
                  <FaVideo className="why-icon" />
                  <span>Recorded sessions (where applicable)</span>
                </div>

                <div className="why-card">
                  <FaQuestionCircle className="why-icon" />
                  <span>Doubt-clearing sessions</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fees-duration-section">
        <Container>
          {/* HEADING */}
          <h2 className="fee-title">SalesForce Development Fees & Duration</h2>

          {/* CARD GRID */}
          <Row className="gy-4 mt-4">
            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaCalendarAlt className="fees-icon blue" />
                <h5>Course Duration</h5>
                <p>6 Months</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaLaptopHouse className="fees-icon red" />
                <h5>Training Mode</h5>
                <p>Online & Offline</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaClock className="fees-icon green" />
                <h5>Batch Timings</h5>
                <p>Weekday & Weekend Batches Available</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaRupeeSign className="fees-icon orange" />
                <h5>Fee Structure</h5>
                <p>Contact our team for detailed fees</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaWallet className="fees-icon purple" />
                <h5>Installment Options</h5>
                <p>Available</p>
              </div>
            </Col>

            {/* NEW CARD */}
            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaCertificate className="fees-icon teal" />
                <h5>Certification</h5>
                <p>Industry Recognized Certificate</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-tech-wrapper">
        <div className="faq-tech-container">
          {/* LEFT : FAQ */}
          <div className="faq-col">
            <div className="faq-header">
              <h2 className="about-title">
                SalesForce Development Training FAQs
              </h2>
            </div>

            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-card">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="module-plus">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className="faq-answer">
                      {item.answer.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT : TECHNOLOGIES */}
          <div className="tech-col">
            <h2 className="about-title">Technologies You Will Learn</h2>

            <div className="tech-grid">
              {[
                "Salesforce Platform Fundamentals",
                "Salesforce Admin Concepts",
                "Apex Programming",
                "Lightning Web Components (LWC)",
                "Visualforce Pages",
                "SOQL & SOSL",
                "Salesforce Object Model",
                "Flows & Process Automation",
                "Triggers & Batch Apex",
              ].map((tech, index) => (
                <div key={index} className="tech-card">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-opportunity-section">
        <Container>
          {/* HEADING */}
          <h2 className="career-title">
            Career Opportunities After SalesForce Development Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

          {/* ROLE CARDS */}
         <Row className="gy-4 mt-4">
  {/* Salesforce Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaCloud className="career-icon" />
      <span>Salesforce Developer</span>
    </div>
  </Col>

  {/* Salesforce Administrator */}
  <Col md={4}>
    <div className="career-card">
      <FaUserCog className="career-icon" />
      <span>Salesforce Administrator</span>
    </div>
  </Col>

  {/* CRM Consultant */}
  <Col md={4}>
    <div className="career-card">
      <FaHandshake className="career-icon" />
      <span>CRM Consultant</span>
    </div>
  </Col>

  {/* Salesforce Technical Consultant */}
  <Col md={4}>
    <div className="career-card">
      <FaTools className="career-icon" />
      <span>Salesforce Technical Consultant</span>
    </div>
  </Col>

  {/* Salesforce Support Engineer */}
  <Col md={4}>
    <div className="career-card">
      <FaHeadset className="career-icon" />
      <span>Salesforce Support Engineer</span>
    </div>
  </Col>

  {/* Salesforce Security */}
  <Col md={4}>
    <div className="career-card">
      <FaShieldAlt className="career-icon" />
      <span>Salesforce Security</span>
    </div>
  </Col>
</Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            SalesForce Development are in high demand across IT services,
            startups, product companies, fintech, and enterprise organizations.
          </p>
        </Container>
      </section>

      <section className="certification-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT: CERTIFICATE IMAGE */}
            <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
              <div className="certificate-image-wrapper">
               <img
                  src={publicUrlFor("images/courses/CertificateImg.jpg")}
                  alt="Java Course Image"
                  className="gallery-image"
                />
              </div>
            </Col>

            {/* RIGHT: CONTENT */}
            <Col lg={6} md={12}>
              <div className="certification-content">
                <h2 className="about-title">Certification</h2>

                <h3 className="certification-subtitle">
                  Earn a Master Certification in <br />{" "}
                  <strong>SalesForce Development </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Cyber Security . This industry-recognized certification
                  validates your skills and helps you stand out in the
                  competitive job market.
                </p>

                {/* <Button className="certification-btn">Get Certified</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SocialButtons />

      {/* ===== CTA ===== */}
      <section className="cta-section text-center">
        <h2>Start Your IT Career Today</h2>
          <NavLink to="/contact-us" className="btn btn-primary cta-btn">
          Book Free Demo
        </NavLink>
      </section>
    </div>
  );
}
