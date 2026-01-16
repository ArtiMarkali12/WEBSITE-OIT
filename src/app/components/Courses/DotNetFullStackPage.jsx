import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
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
          title: "Angular 16",
          topics: [
            "Angular Introduction",
            "Development Setup",
            "Components",
            "Data & Event Binding",
            "Structural Directives",
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
          title: "C#.NET",
          topics: [
            "C# Basics",
            ".NET Framework, CLR & FCL",
            "Control Statements",
            "Functions",
            "Arrays & Strings",
            "Exception Handling",
            "OOP Concepts",
            "Collections",
            "Multithreading & Synchronization",
            "Delegates & Reflection",
          ],
        },
        {
          title: "ADO.NET",
          topics: [
            "ADO.NET Introduction",
            "Data Providers",
            "SQL Server Connectivity",
            "Connection & Command",
            "DataReader & DataSet",
            "DataAdapter & DataTables",
            "Window & Web Form Examples",
            "Project: Window-based Application",
          ],
        },
        {
          title: "ASP.NET",
          topics: [
            "ASP.NET Introduction",
            "Life Cycle",
            "Web Forms",
            "Server Controls",
            "File Upload & Download",
            "Cookies & Sessions",
            "Validation",
            "State Management",
            "Project with ADO.NET",
          ],
        },
        {
          title: "Entity Framework",
          topics: [
            "EF Introduction & Core",
            "Architecture",
            "Context Class",
            "Entity Types & States",
            "Database First Approach",
            "Web API",
            "ASP.NET MVC Project with EF",
            "Agile & Scrum Methodology",
          ],
        },
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
      question:
        "Do I need prior programming experience to join the .NET Full Stack Development course?",
      answer:
        "No prior experience is required. This course is suitable for beginners as well as professionals who want to upskill in .NET full stack development.",
    },
    {
      question: "How long is the .NET Full Stack Development course?",
      answer:
        "The course duration varies based on batch type and learning pace. Contact Orange ITech for detailed batch schedules.",
    },
    {
      question: "How can I enroll in the .NET Full Stack Development course?",
      answer:
        "You can enroll by contacting Orange ITech directly or booking a free counseling session through the website.",
    },
    {
      question: "Is .NET still in demand?",
      answer:
        "Yes, .NET is still in high demand across startups and enterprises for building secure, scalable web and enterprise applications. With continuous updates from Microsoft and strong cloud support, .NET developers continue to have excellent career opportunities.",
    },
    {
      question: "Which .NET course is best?",
      answer:
        "The best .NET course depends on your career goals, but full-stack .NET courses covering ASP.NET Core, Entity Framework, Blazor, and modern frontend frameworks are most in demand. Choose a course that focuses on hands-on projects, clean architecture, and the latest .NET versions to ensure job readiness.",
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
            <h1>.NET Full Stack Development Course</h1>

            <p>
              Learn in-demand .NET technologies and become a job-ready full
              stack developer.
            </p>

            <div className="hero-buttons">
              <a
                href="/enquiry"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Download Syllabus
              </a>
              <a
                href="/enquiry"
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="java-hero-right">
            <div className="video-wrapper">
              <iframe
                width="2304"
                height="1296"
                src="https://www.youtube.com/embed/wyeyFce4zkg"
                title="Become a .NET Full Stack Developer | Complete Roadmap &amp; Technologies"
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
              Become a Job-Ready .NET Full Stack Developer
            </h2>

            <Col lg={6} md={6} className="about-content-col">
              <p>
                Looking to build dynamic, scalable web applications and launch a
                successful tech career? The .NET Full Stack Development Course
                at Orange ITech is designed to help you become an industry-ready
                full-stack developer with strong frontend and backend expertise.
              </p>

              <p>
                This course covers everything from HTML, CSS, Bootstrap, and
                JavaScript on the frontend to C#, ADO.NET, ASP.NET, Entity
                Framework Core, ASP.NET Core MVC, SQL Server, and Blazor on the
                backend. Whether you are a beginner or an aspiring developer,
                you’ll learn how to write clean code, build real-world
                applications, and follow best development practices.
              </p>

              <p>
                By the end of the course, you’ll be confident in developing
                secure, high-performance web applications and ready to step into
                professional .NET full stack roles. Start Your Full Stack
                Development Journey
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/DotNet.jpg")}
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
            Who Can Join .Net Full Stack Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented .Net Full Stack Development Training Course is
            designed for a wide range of learners, including:
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
          <h4 className="curriculam-title">
            .Net Full Stack Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our .Net full stack development course syllabus is structured to
            cover end-to-end full-stack technologies with a strong emphasis on
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
                Why Choose Orange ITech for .Net Full Stack Development?
              </h2>

              <p className="why-subtitle">
                Orange ITech stands out as a trusted training institute by
                focusing on skills, employability, and real-world exposure.
              </p>

              {/* <Button className=" "></Button> */}
              <a
                href="/enquiry"
                className="hero-buttons btn-primary mt-4"
                style={{ textDecoration: "none", width: "180px" }}
              >
                Request Callback
              </a>
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
            .Net Full Stack Development Course Fees & Duration
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
              <h2 className="about-title">
                .NET Full Stack Development Course FAQs
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
            <h2 className="about-title">What You Will Learn</h2>

            <div className="tech-grid">
              {[
                "Build responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript",
                "Develop backend logic using C# and ASP.NET Core",
                "Work with databases using SQL Server and Entity Framework Core",
                "Create scalable web applications using MVC architecture",
                "Implement authentication, authorization, and security best practices",
                "Deploy and optimize .NET web applications",
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
            Career Opportunities After .NET Full Stack Development Course
          </h2>

          <p className="career-subtitle text-center">
            After completing the .NET Full Stack Development Course, you can
            apply for roles such as:
          </p>

          {/* ROLE CARDS */}
          <Row className="gy-4 mt-4">
            <Col md={4}>
              <div className="career-card">
                <FaCogs className="career-icon" />
                <span>.NET Full Stack Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaCode className="career-icon" />
                <span>ASP.NET Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaServer className="career-icon" />
                <span>Backend Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaLaptopCode className="career-icon" />
                <span>Web Application Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaGlobe className="career-icon" />
                <span>Web Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaBriefcase className="career-icon" />
                <span>Software Engineer</span>
              </div>
            </Col>
          </Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            PHP full-stack developers are in demand across IT companies,
            startups, digital agencies, e-commerce platforms, and enterprise
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
                  <strong>.NET Full-Stack Development</strong>
                </h3>

                <p className="certification-text">
                  Upon successful completion of the course, you will receive a
                  Master Certification in .NET Full Stack Web Development from
                  Orange ITech.
                  <br />
                  This industry-recognized certification:
                  <ul>
                    <li>Validates your technical expertise</li>
                    <li>Enhances your resume and job prospects</li>
                    <li>Helps you stand out in a competitive job market</li>
                    <li>Boosts confidence during interviews</li>
                  </ul>
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
        <a href="/enquiry" className="btn btn-primary cta-btn">
          Book Free Demo
        </a>
      </section>
    </div>
  );
}
