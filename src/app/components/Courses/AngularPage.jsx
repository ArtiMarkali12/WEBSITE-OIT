import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import { SiAngular } from "react-icons/si";
import {
  FaLaptopCode,  FaPaintBrush, FaLaptop,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
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
import FloatingSocialButtons from "../FloatingSocialButtons";
// import SocialButtons from "./SocialButtons";

export default function DotNetFullStackPage() {
  const modules = [
    {
      title: "Frontend Development",
      children: [
        {
          title: "HTML Syllabus",
          topics: [
            "Introduction to HTML",
            "HTML Tags and Elements",
            "HTML Attributes",
            "HTML Formatting",
            "HTML Phrase Tags",
            "HTML Metatags",
            "HTML Comments",
            "HTML Image Tags",
            "HTML Tables",
            "HTML Lists",
            "HTML Iframes",
            "HTML Blocks",
            "HTML Backgrounds",
            "HTML Colors & Fonts",
          ],
        },
        {
          title: "HTML5 Syllabus",
          topics: [
            "Understanding Web Concepts & Terminologies",
            "HTML Forms",
            "New Features in HTML5",
            "HTML Content & Media Tags",
            "HTML5 Semantic Tags",
            "Media Queries",
            "Project: Static Website",
          ],
        },
        {
          title: "CSS Syllabus",
          topics: [
            "Introduction to CSS",
            "STYLE Element",
            "Measurement Units",
            "Colors & Backgrounds",
            "Fonts, Texts & Images",
            "Tables",
            "Borders",
            "Margins",
            "Paddings",
          ],
        },
        {
          title: "CSS3 Syllabus",
          topics: [
            "CSS3 Introduction",
            "Rounded Corners",
            "Border Image",
            "Shadow Effects",
            "2D Transforms",
            "3D Transforms",
            "Animations",
            "User Interface",
          ],
        },
        {
          title: "Bootstrap 4",
          topics: [
            "Bootstrap Installation",
            "Forms",
            "Containers",
            "Colors",
            "Buttons",
            "Cards",
            "Dropdowns",
            "Navbar",
            "Carousel",
            "Components",
            "Grid System",
            "Responsive Website Development",
          ],
        },
        {
          title: "JavaScript",
          topics: [
            "Variables & Operators",
            "Control Structures",
            "Functions",
            "Events",
            "Dynamic Programming",
            "Strings & Arrays",
            "Date, RegExp & Math Objects",
            "DOM Manipulation",
          ],
        },
        {
          title: "Advanced JavaScript",
          topics: [
            "Error & Exception Handling",
            "Form Validation",
            "Animations",
            "Multimedia",
            "Debugging",
            "Image Map",
            "Browser Compatibility",
          ],
        },
        {
          title: "jQuery",
          topics: [
            "jQuery Introduction & Syntax",
            "Selectors",
            "Effects & Animations",
            "Get & Set Methods",
            "Add & Remove Elements",
            "CSS Manipulation",
            "Traversing",
            "AJAX",
            "Template Website Project",
          ],
        },
        {
          title: "Angular 18",
          topics: [
            "Angular Introduction 18",
            "Introduction to TypeScript and ES6",
            "Development Setup",
            "Components and Templates",
            "Data & Event Binding",
            " Services and Dependency Injection",
            "Routing and Navigation",
            "• Forms and User Input",
            "API Handling",
            "HTTP Client and Observables",
            "Structural Directives",
            "Advanced Angular Features",
            "Template Driven Forms",
            "Reactive Forms",
            "Angular Modules",
          ],
        },
      ],
    },

    {
      title: "Backend Development",
      children: [
        {
          title: "SQL",
          topics: [
            "SQL Server Installation",
            "Database Concepts",
            "DDL & DML Statements",
            "Constraints",
            "Queries (DQL)",
            "Joins & Set Operations",
            "Views",
            "Stored Procedures & Functions",
            "400+ Practice Queries",
          ],
        },
      ],
    },

    {
      title: "Data Structures & Algorithms (DSA)",
      children: [
        {
          title: "Introduction to DSA",
          topics: [
            "DSA Overview",
            "Time & Space Complexity",
            "Big-O, Omega & Theta",
            "Asymptotic Analysis",
            "Algorithm Types",
          ],
        },
        {
          title: "Arrays",
          topics: [
            "Array Basics",
            "Static & Dynamic Arrays",
            "Insertion, Deletion & Traversal",
            "Searching Algorithms",
            "Sorting Algorithms",
          ],
        },
        {
          title: "Linked Lists",
          topics: [
            "Singly, Doubly & Circular Lists",
            "Insertion & Deletion",
            "Reverse Linked List",
            "Cycle Detection",
            "Sorting Linked Lists",
          ],
        },
        {
          title: "Stacks & Queues",
          topics: [
            "Stack Operations",
            "Expression Evaluation",
            "Queue Types",
            "BFS Applications",
          ],
        },
        {
          title: "Recursion & Sorting",
          topics: [
            "Recursion Concepts",
            "Factorial & Fibonacci",
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
          ],
        },
      ],
    },

    {
      title: "Industry Tools",
      children: [
        {
          title: "Postman API Testing",
          topics: [
            "REST APIs",
            "HTTP Methods",
            "Authorization",
            "Environment Variables",
            "Automated Testing",
          ],
        },
        {
          title: "Git & GitHub",
          topics: [
            "Version Control",
            "Git Commands",
            "Branching & Merging",
            "Pull Requests",
            "Code Reviews",
          ],
        },
        {
          title: "Deployment & DevOps Basics",
          topics: [
            "Frontend Deployment",
            "Backend Deployment",
            "Environment Variables",
            "CI/CD Basics",
            "Domain & SSL Setup",
          ],
        },
        {
          title: "Figma UI/UX",
          topics: [
            "UI/UX Fundamentals",
            "Wireframing",
            "Prototyping",
            "Design Systems",
            "Developer Handoff",
          ],
        },
      ],
    },

    {
      title: "Aptitude & Soft Skills",
      children: [
        {
          title: "Quantitative & Logical Aptitude",
          topics: [
            "Quantitative Aptitude",
            "Logical Reasoning",
            "Data Interpretation",
            "Problem Solving",
          ],
        },
        {
          title: "Soft Skills & Career Readiness",
          topics: [
            "Communication Skills",
            "Presentation Skills",
            "Resume Building",
            "Mock Interviews",
            "Career Planning",
          ],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "Capstone Projects",
          topics: [
            "Apply heaps & priority queues for task scheduling",
            "Real-world industry-based projects",
            "Portfolio-ready applications",
          ],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is Angular development?",
      answer:
        "Angular development involves building dynamic, single-page web applications using the Angular framework and TypeScript.",
    },
    {
      question: "Is Angular still in demand?",
      answer:
        "Yes, Angular is widely used by enterprises and large-scale applications due to its scalability, performance, and strong framework structure.",
    },
    {
      question: "Do I need prior coding experience to learn Angular?",
      answer:
        "No prior Angular experience is required. Basic knowledge of HTML, CSS, and JavaScript is helpful but not mandatory.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You will work on real-world projects such as dashboards, admin panels, and single-page applications.",
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
            <h1>Angular Development Career Program</h1>

            <p>
              Master Angular and TypeScript to build powerful, scalable
              single-page applications with hands-on projects and job-ready
              skills.
            </p>

            <div className="hero-buttons">
               <NavLink
                              to="/contact-form"
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
                src="https://www.youtube.com/embed/N74ZbEvHVlE"
                title="Become a Angular Developer | Complete Roadmap &amp; Technologies"
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
                Become a Skilled Angular Developer
              </h2>
            <Col lg={6} md={6} className="about-content-col">
            

              {/* <p>
               Master the art of building dynamic, scalable, and high-performance web applications with the Angular Development Course at Orange ITech. Designed for beginners and aspiring front-end developers, this course takes you from Angular fundamentals to advanced concepts used in real-world applications.

              </p> */}

              <p>
                Master the art of building dynamic, scalable, and
                high-performance web applications with the Angular Development
                Course at Orange ITech. Designed for beginners and aspiring
                front-end developers, this course takes you from Angular
                fundamentals to advanced concepts used in real-world
                applications.
              </p>

              <p>
                {/* You’ll learn everything from TypeScript basics and Angular
                architecture to components, services, routing, and real-time
                data binding, while working on practical projects that help you
                gain confidence and industry-ready skills. */}
                <h5>What Is the Angular Development Course at Orange ITech?</h5>
                The Angular Development Course is a career-focused training
                program that helps you specialize in frontend development using
                Angular, one of the most powerful and widely-used frameworks.
                <br />
                You will gain hands-on experience in:
                <br />
                <ul>
                  <li>Building modern single-page applications (SPAs)</li>
                  <li>Structuring scalable Angular applications</li>
                  <li>Creating responsive and interactive user interfaces</li>
                  <li>Working with APIs and real-time data</li>
                </ul>
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/Angular.jpg")}
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
            Who Can Join Angular Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Angular Development Training Course is designed for
            a wide range of learners, including:
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
          <h4 className="angular-title">
            Angular Development Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Angular development course syllabus is structured to cover
            end-to-end Angular technologies with a strong emphasis on practical
            implementation and real-world projects.
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
                Why Choose Orange ITech for Angular Development?
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
                  <span>Dedicated doubt-clearing sessions</span>
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
            Angular Development Course Fees & Duration
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
              <h2 className="about-title">Angular Development Course FAQs</h2>
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
            <h2 className="about-title">What You Will Learn</h2>

            <div className="tech-grid">
              {[
                "Build dynamic and responsive user interfaces using Angular, HTML, CSS, and TypeScript",
                "Create single-page applications (SPAs) with Angular components, modules, and routing",
                "Work with REST APIs and handle HTTP requests using Angular services",
                "Implement forms, validation, and state management in Angular applications",
                "Apply best practices for performance optimization and reusable component design",
                "Deploy and maintain Angular applications for production environments",
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
            Career Opportunities After Angular Development Course
          </h2>

          <p className="career-subtitle text-center">
            After completing the .NET Full Stack Development Course, you can
            apply for roles such as:
          </p>

          {/* ROLE CARDS */}
        <Row className="gy-4 mt-4">
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <SiAngular className="career-icon" />
      <span>Angular Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaLaptopCode className="career-icon" />
      <span>Front-End Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaServer className="career-icon" />
      <span>Web Application Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaPaintBrush className="career-icon" />
      <span>UI Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaLaptop className="career-icon" />
      <span>Enterprise Application Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <SiAngular className="career-icon" />
      <span>Angular Consultant</span>
    </div>
  </Col>
</Row>


          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Angular developers are in demand across IT companies, startups,
            digital agencies, e-commerce platforms, and enterprise
            organizations.
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
                  <strong>Angular Development</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Angular Web Development. This industry-recognized
                  certificate validates your skills and makes you stand out in
                  the job market.
                  <br />
                  Start Your Angular Development Career Today
                </p>

                {/* <Button className="certification-btn">Get Certified</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
    <FloatingSocialButtons/>

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
