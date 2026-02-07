
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import {
  FaAndroid, FaMobileAlt, FaLaptopCode, FaPaintBrush, FaCode,
  FaUserGraduate,
  FaBriefcase,
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

export default function AndroidPage() {
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
          title: " Version Control System",
          topics: [
            "Installation Of Bootstrap 4",
            "Bootstrap Forms",
            "Bootstrap Containers",
            "Bootstrap Colors",
            "Bootstrap Buttons",
            "Bootstrap Cards",
            "Bootstrap Dropdowns",
            "Bootstrap Navbar",
            "Bootstrap Carousel",
            "Bootstrap Components",
            "Bootstrap Grid System",
            "Responsive Website Development",
          ],
        },
      ],
    },

    {
      title: "Android Development",
      children: [
        {
          title: "Android App Development",
          topics: [
            "Introduction to Android Development",
            "UI Design & User Interaction",
            "Activities, Intents & Fragments",
            "Android Components",
            "Data Storage & Database Management",
            "Networking & Web Services",
            "Background Tasks & Multithreading",
            "User Interaction & Input Handling",
            "Networking & API Integration",
            "Security & Performance Optimization",
            "Testing & Debugging",
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
      question: "What is Android development?",
      answer:
        "Android development involves creating mobile applications for Android devices using programming languages like Kotlin and Java.",
    },
    {
      question: "Is Android development still in demand?",
      answer:
        "Yes, Android development remains in high demand as Android powers the majority of smartphones worldwide.",
    },
    {
      question: "Do I need prior programming knowledge to learn Android?",
      answer:
        "No, prior experience is not mandatory. The course starts from basics and gradually covers advanced topics.",
    },
    {
      question: "Will I build real Android apps during the course?",
      answer:
        "Yes, you will work on real-world Android projects to gain practical development experience.",
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer:
        "Yes, you will receive an industry-recognized Android Development certification from Orange ITech.",
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
            <h1> Android Development Course</h1>

            <p>
              Master Kotlin, Java, Jetpack Compose, and Firebase to build
              high-performance Android apps with hands-on training and
              real-world projects.
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
                src="https://www.youtube.com/embed/SCmWiLUMGF8"
                title="Become a Android Developer | Complete Roadmap &amp; Technologies"
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
                Become a Skilled Android App Developer
              </h2>
            <Col lg={6} md={6} className="about-content-col">
             <br />
              <p>
                Build powerful, modern mobile applications with the Android
                Development Course at Orange ITech. Designed for beginners and
                working professionals, this course helps you learn how to
                design, develop, test, and deploy Android apps using
                industry-standard tools and technologies.
              </p>
              <p>
                You’ll gain practical experience with Kotlin, Java, Jetpack
                Compose, Firebase, and Android Studio, enabling you to create
                real-world applications that are fast, secure, and
                user-friendly.
              </p>
              <h4> What Is the Android Development Course at Orange ITech?</h4>
              The Android Development Course is a career-oriented training
              program focused on building high-quality Android mobile
              applications.
              <br />
              You will learn how to:
              <br />
              <ul>
                <li>Develop Android apps using Kotlin and Java</li>
                <li>Create modern UI using Jetpack Compose</li>
                <li>Integrate backend services using Firebase</li>
                <li>Build, test, and deploy apps via Android Studio</li>
              </ul>
              <p></p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/Android.jpg")}
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
            Who Can Join Android Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Android Development Course Training Course is
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
          <h4 className="angular-title">
            Android Development Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Android Development Course syllabus is structured to cover
            end-to-end technologies with a strong emphasis on practical
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
                Why Choose Orange ITech for Android Development Course ?
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
            Android Development Course Fees & Duration
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
              <h2 className="about-title">Android Development Course FAQs</h2>
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
                "Build modern Android user interfaces using XML and Jetpack Compose",
                "Develop Android app logic using Kotlin and Java",
                "Work with local databases using SQLite and Room",
                "Create scalable Android applications with MVVM architecture",
                "Implement authentication, permissions, and Android security best practices",
                "Build, test, and deploy Android applications to Google Play Store",
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
            Career Opportunities After Android Development Course
          </h2>

          <p className="career-subtitle text-center">
            After completing the Android Development Course, you can apply for
            roles such as:
          </p>

          {/* ROLE CARDS */}
      <Row className="gy-4 mt-4">
  {/* Android App Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaAndroid className="career-icon" />
      <span>Android App Developer</span>
    </div>
  </Col>

  {/* Mobile Application Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaMobileAlt className="career-icon" />
      <span>Mobile Application Developer</span>
    </div>
  </Col>

  {/* Kotlin Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaServer className="career-icon" />
      <span>Kotlin Developer</span>
    </div>
  </Col>

  {/* Software Engineer (Android) */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaCode className="career-icon" />
      <span>Software Engineer (Android)</span>
    </div>
  </Col>

  {/* Android UI/UX Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaPaintBrush className="career-icon" />
      <span>Android UI/UX Developer</span>
    </div>
  </Col>

  {/* Mobile Software Engineer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <FaLaptopCode className="career-icon" />
      <span>Mobile Software Engineer</span>
    </div>
  </Col>
</Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Android Development Course are in demand across IT companies,
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
                  <strong>Android Development</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Android Development. This industry-recognized certificate
                  validates your skills and makes you stand out in the job
                  market.
                  <br />
                  Turn your ideas into powerful Android applications with Orange
                  ITech’s Android Development Course.
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
