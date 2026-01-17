import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import {
  FaFileAlt,
  FaPalette,
  FaUserCheck,
  FaPaintBrush,
  FaBoxOpen,
  FaMousePointer,
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
// import SocialButtons from "./SocialButtons";

export default function UIUXDeveloperPage() {
  const modules = [
    {
      title: "Frontend Development",
      children: [
        {
          title: "1. HTML",
          topics: [
            "Introduction to HTML and web structure",
            "HTML tags, elements, attributes, formatting, phrase tags, and comments",
            "Images, tables, lists, iframes, blocks, backgrounds, colors, and fonts",
            "Understanding page layout and basic web content structuring",
          ],
        },
        {
          title: "2. HTML5",
          topics: [
            "Understanding modern web concepts and terminologies",
            "HTML forms and new HTML5 features",
            "Media and semantic tags for structured content",
            "Responsive design basics using media queries",
            "Project: Static Website Development",
          ],
        },
        {
          title: "3. CSS & CSS3",
          topics: [
            "Styling web pages using CSS selectors and properties",
            "Working with colors, backgrounds, fonts, borders, margins, and padding",
            "Modern CSS3 features like animations, shadows, transforms, and UI effects",
            "Creating visually appealing and responsive layouts",
          ],
        },
        {
          title: "4. Bootstrap 4",
          topics: [
            "Bootstrap installation and layout system",
            "Using containers, grid system, and responsive utilities",
            "Designing UI components like buttons, cards, navbars, carousels",
            "Building fully responsive websites with Bootstrap",
          ],
        },
        {
          title: "5. JavaScript & Advanced JavaScript",
          topics: [
            "Core JavaScript concepts: variables, operators, functions, and events",
            "DOM manipulation and dynamic web behavior",
            "Working with arrays, strings, objects, dates, and regex",
            "Advanced topics like form validation, debugging, animations, and browser compatibility",
          ],
        },
        {
          title: "6. jQuery",
          topics: [
            "jQuery basics, syntax, and selectors",
            "Effects, animations, DOM manipulation, and AJAX",
            "Traversing and event handling techniques",
            "Project: Template-based website using jQuery",
          ],
        },
        {
          title: "7. Angular 18",
          topics: [
            "Angular fundamentals with TypeScript and ES6",
            "Component-based architecture and data binding",
            "Directives, services, dependency injection, and routing",
            "Forms, API integration, HTTP client, and observables",
            "Building scalable single-page applications (SPA)",
          ],
        },
      ],
    },

    {
      title: "UI / UX Design",
      children: [
        {
          title: "1. UI/UX Fundamentals",
          topics: [
            "Understanding UI and UX concepts and differences",
            "Design thinking process and real-world UI/UX examples",
            "Roles and responsibilities of UI/UX designers",
          ],
        },
        {
          title: "2. UX Research & Planning",
          topics: [
            "User research, personas, empathy mapping, and journey mapping",
            "Competitor analysis and information architecture",
            "Storyboarding and UX flow planning",
          ],
        },
        {
          title: "3. Wireframing & Prototyping",
          topics: [
            "Low-fidelity and high-fidelity wireframes",
            "Creating interactive and clickable prototypes",
            "Hands-on tools: Figma, Adobe XD, Balsamiq, Sketch",
          ],
        },
        {
          title: "4. UI Design Principles",
          topics: [
            "Color theory, typography, grids, spacing, and visual hierarchy",
            "Responsive design and accessibility (WCAG)",
            "Design systems and UI kits",
          ],
        },
      ],
    },

    {
      title: "Data Structures & Algorithms (DSA)",
      children: [
        {
          title: "1. DSA Fundamentals",
          topics: [
            "Introduction to data structures and algorithms",
            "Time and space complexity analysis",
            "Big-O, Omega, and Theta notations",
          ],
        },
        {
          title: "2. Linear Data Structures",
          topics: [
            "Arrays, linked lists, stacks, and queues",
            "Operations, implementations, and real-world applications",
            "Problem-solving techniques using linear structures",
          ],
        },
        {
          title: "3. Recursion & Sorting",
          topics: [
            "Recursive problem-solving and call stack behavior",
            "Sorting algorithms: Bubble, Selection, Insertion, Merge, Quick, Heap",
            "Choosing the right algorithm based on complexity",
          ],
        },
      ],
    },

    {
      title: "Industry Tools",
      children: [
        {
          title: "1. API Testing & Version Control",
          topics: [
            "Postman for API testing and automation",
            "Git fundamentals and collaboration workflow",
            "GitHub repositories, pull requests, and code reviews",
          ],
        },
        {
          title: "2. Deployment & Design Tools",
          topics: [
            "Frontend and backend deployment platforms",
            "CI/CD basics and environment configuration",
            "Figma for UI/UX collaboration and developer handoff",
          ],
        },
      ],
    },

    {
      title: "Aptitude",
      children: [
        {
          title: "1. Quantitative Aptitude",
          topics: [
            "Arithmetic, percentages, profit & loss, ratios",
            "Time, speed, distance, probability, and data interpretation",
          ],
        },
        {
          title: "2. Logical Reasoning",
          topics: [
            "Blood relations, direction sense, puzzles, seating arrangements",
            "Coding-decoding, syllogisms, and analytical reasoning",
          ],
        },
      ],
    },

    {
      title: "Soft Skills",
      children: [
        {
          title: "1. Communication & Professional Skills",
          topics: [
            "Verbal and non-verbal communication",
            "Presentation and business communication skills",
            "Emotional intelligence and leadership qualities",
          ],
        },
        {
          title: "2. Career Readiness",
          topics: [
            "ATS-friendly resume building",
            "Group discussion and interview preparation",
            "Career planning and industry trends",
          ],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "1. Major Project",
          topics: [
            "Apply data structures like heaps and priority queues",
            "Build a task scheduling system using algorithmic logic",
          ],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "Is UI/UX suitable for beginners?",
      answer:
        "Yes, this course is specially designed for beginners and gradually progresses from UI/UX fundamentals to advanced design concepts with hands-on practice.",
    },
    {
      question: "Do I need coding knowledge for UI/UX?",
      answer:
        "No prior coding knowledge is required. However, a basic understanding of HTML and CSS can be helpful for better collaboration with developers.",
    },
    {
      question: "Will I build a portfolio during the course?",
      answer:
        "Yes, you will work on real-world projects, design assignments, and case studies to build a strong professional UI/UX portfolio.",
    },
    {
      question: "What is the duration of the UI/UX course?",
      answer:
        "The course duration varies based on the learning track, but it includes extensive hands-on practice and project-based learning.",
    },
    {
      question: "Do you provide placement support?",
      answer:
        "Yes, Orange ITech provides complete placement support including resume building, mock interviews, internships, and job assistance.",
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
              UI/UX Development Course – Become a Professional UI/UX Designer
            </h1>

            <p>
              Design intuitive, engaging, and user-friendly digital experiences
              using industry-standard tools and real-world projects.
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
                src="https://www.youtube.com/embed/tl-Sh7YKs1s"
                title="Become a UI/UX Designer | Complete Roadmap &amp; Technologies"
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
                About the UI/UX Development Course
              </h2>

            <Col lg={6} md={6} className="about-content-col">
              
              <p>
                The UI/UX Development Roadmap Course at Orange ITech is a
                comprehensive, beginner-to-advanced program designed to help you
                master the art and science of creating seamless digital
                experiences.
              </p>

              <p>
                This course takes you step-by-step through the complete UI and
                UX design lifecycle — from user research and design thinking to
                wireframing, prototyping, usability testing, and final developer
                handoff. You’ll learn how top companies design products that are
                intuitive, visually appealing, and conversion-focused.
              </p>

              <p>
                Whether you’re starting your design career or looking to sharpen
                your design thinking skills, this course equips you with
                practical knowledge, hands-on projects, and industry-ready
                skills to succeed as a UI/UX professional.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/uiux.jpg")}
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
          <h2 className="who-title">Who Can Join UI/UX Development Course?</h2>

          <p className="who-subtitle">
            Our Job Oriented UI/UX Development Training Course is designed for a
            wide range of learners, including:
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
          <h4 className="about-title">
           
            UI/UX Development Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our UI/UX Development course syllabus is structured to cover
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
                Why Choose Orange ITech for UI/UX Development ?
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
          <h2 className="fee-title">
            UI/UX Development Course Fees & Duration
          </h2>

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
              <h2 className="about-title"> UI/UX Development Training FAQs</h2>
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
                "Figma",
                "Adobe XD",
                "Sketch",
                "Balsamiq",
                "InVision",
                "Zeplin",
                "Miro",
                "FigJam",
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
            Career Opportunities After UI/UX Development Training Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

          {/* ROLE CARDS */}
     <Row className="gy-4 mt-4">
  {/* UI Designer */}
  <Col md={4}>
    <div className="career-card">
      <FaPalette className="career-icon" />
      <span>UI Designer</span>
    </div>
  </Col>

  {/* UX Designer */}
  <Col md={4}>
    <div className="career-card">
      <FaUserCheck className="career-icon" />
      <span>UX Designer</span>
    </div>
  </Col>

  {/* Web Designer */}
  <Col md={4}>
    <div className="career-card">
      <FaPaintBrush className="career-icon" />
      <span>Web Designer</span>
    </div>
  </Col>

  {/* Product Designer */}
  <Col md={4}>
    <div className="career-card">
      <FaBoxOpen className="career-icon" />
      <span>Product Designer</span>
    </div>
  </Col>

  {/* Interaction Designer */}
  <Col md={4}>
    <div className="career-card">
      <FaMousePointer className="career-icon" />
      <span>Interaction Designer</span>
    </div>
  </Col>

  {/* Content Marketing */}
  <Col md={4}>
    <div className="career-card">
      <FaFileAlt className="career-icon" />
      <span>Content Marketing</span>
    </div>
  </Col>
</Row>
          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            UI/UX Development are in high demand across IT services, startups,
            product companies, fintech, and enterprise organizations.
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
                  <strong> UI/UX Development </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in UI/UX Development . This industry-recognized certification
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
