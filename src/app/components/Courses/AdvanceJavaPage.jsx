import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import {
  FaCubes,
  FaLeaf,
  FaLayerGroup,
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
import FloatingSocialButtons from "../FloatingSocialButtons";

export default function AdvanceJavaPage() {
  const modules = [
    {
      title: "Java Programming Fundamentals",
      children: [
        {
          title: "1. Basics of Java Programming",
          topics: [
            "What is Java and why it’s platform-independent",
            "Key features of Java: Object-oriented, Secure, Portable",
            "JVM, JRE, JDK architecture",
            "Java code structure and syntax",
            "Writing your first Java program",
          ],
        },
        {
          title: "2. Control Statements",
          topics: [
            "Conditional statements: if, else, switch-case",
            "Looping: for, while, do-while",
            "Jump statements: break, continue, return",
          ],
        },
        {
          title: "3. Type Conversion and Methods",
          topics: [
            "Implicit and explicit type conversion",
            "Defining and invoking methods",
            "Method overloading",
            "Pass by value in Java",
          ],
        },
      ],
    },

    {
      title: "Core Java Data Handling",
      children: [
        {
          title: "1. Arrays and Strings",
          topics: [
            "Single and multidimensional arrays",
            "Array traversal, sorting, and searching",
            "String vs StringBuffer vs StringBuilder",
            "String methods and manipulation",
          ],
        },
        {
          title: "2. Exception Handling",
          topics: [
            "Checked and unchecked exceptions",
            "try, catch, finally, throw, throws",
            "Custom exceptions",
            "Best practices for exception handling",
          ],
        },
        {
          title: "3. File Handling (File I/O)",
          topics: [
            "File, FileReader, FileWriter",
            "Buffered streams",
            "Reading and writing text & binary files",
            "File permissions and exceptions",
          ],
        },
      ],
    },

    {
      title: "Object-Oriented Programming (OOP)",
      children: [
        {
          title: "1. Classes, Objects, and Inheritance",
          topics: [
            "Creating classes and objects",
            "Access modifiers and encapsulation",
            "Constructors and constructor overloading",
            "Inheritance and method overriding",
            "this and super keywords",
          ],
        },
        {
          title: "2. Abstraction and Interfaces",
          topics: [
            "Abstract classes and methods",
            "Interfaces and implementation",
            "Interface vs abstract class",
            "Multiple inheritance using interfaces",
          ],
        },
        {
          title: "3. Polymorphism",
          topics: [
            "Compile-time polymorphism (method overloading)",
            "Runtime polymorphism (method overriding)",
            "Dynamic method dispatch",
            "Real-world use cases",
          ],
        },
      ],
    },

    {
      title: "Advanced Java Concepts",
      children: [
        {
          title: "1. Collections Framework",
          topics: [
            "Introduction to Java Collections",
            "List, Set, Map interfaces",
            "ArrayList, LinkedList, HashSet, TreeSet, HashMap",
            "Iterator and enhanced for loop",
          ],
        },
        {
          title: "2. GUI Development (AWT & Swing)",
          topics: [
            "AWT and Swing fundamentals",
            "GUI components: buttons, labels, text fields",
            "Layout managers",
            "Event handling and listeners",
          ],
        },
        {
          title: "3. Java 8 Features & Lambda Expressions",
          topics: [
            "Lambda expressions",
            "Functional interfaces",
            "Default and static methods",
            "Java 8 Date & Time API",
          ],
        },
        {
          title: "4. Stream API",
          topics: [
            "Introduction to Streams",
            "Stream operations: filter, map, reduce",
            "Streams with collections",
            "Parallel streams",
          ],
        },
      ],
    },

    {
      title: "Aptitude & Logical Reasoning",
      children: [
        {
          title: "1. Quantitative Aptitude",
          topics: [
            "Average",
            "Percentage",
            "Profit and Loss",
            "Simple and Compound Interest",
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
            "Seating Arrangement",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles",
          ],
        },
      ],
    },

    {
      title: "Soft Skills & Career Development",
      children: [
        {
          title: "1. Communication & Professional Skills",
          topics: [
            "Effective communication",
            "Presentation skills",
            "Business communication",
            "Emotional intelligence",
            "Leadership skills",
          ],
        },
        {
          title: "2. Career Readiness",
          topics: [
            "Resume / CV creation",
            "Group discussion practice",
            "Mock interviews",
            "Virtual interview preparation",
            "Industry trends & certifications roadmap",
          ],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "1. Java Projects",
          topics: [
            "3 hands-on Java projects",
            "Real-world problem solving",
            "Application of data structures like heaps & priority queues",
          ],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is Advance Java?",
      answer:
        "Advance Java focuses on enterprise-level Java technologies like JDBC, Servlets, JSP, Spring, and Hibernate used to build real-world web applications.",
    },
    {
      question: "Is Core Java required before learning Advance Java?",
      answer:
        "Yes, a basic understanding of Core Java is recommended before enrolling in this course.",
    },
    {
      question: "Does this course include Spring Boot and REST APIs?",
      answer:
        "Yes, the course covers Spring Boot and REST API development with hands-on projects.",
    },
    {
      question: "What job roles can I get after Advance Java?",
      answer:
        "You can apply for roles such as Java Developer, Backend Developer, Spring Boot Developer, and Full-Stack Java Developer.",
    },
    {
      question: "Do you provide placement support?",
      answer:
        "Yes, Orange ITech offers full placement assistance, interview preparation, and internship support.",
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
            <h1>Advance Java Course | Spring & Hibernate Training</h1>

            <p>
              Master JDBC, Servlets, JSP, Spring Boot & REST APIs with
              real-world projects and placement support.
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
            <img
              src={publicUrlFor("images/courses/AdvanceJava.jpg")}
              alt="Java Course Image"
              style={{
                width: "500px",
                height: "400px",
                objectFit: "contain",
              }}
            />
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
            <div className="about-content-col">
              <h2 className="angular-title">About the DevOps Course</h2>

              <p>
                The Advance Java Course at Orange ITech is a comprehensive,
                industry-ready training program designed to help you master
                enterprise-level Java development. This course goes beyond Core
                Java and focuses on building scalable, secure, and
                high-performance web applications using modern Java frameworks.
              </p>

              <p>
                You’ll gain hands-on expertise in JDBC, Servlets, JSP,
                Hibernate, Spring Framework, and Spring Boot, along with REST
                API development and backend integration. Through real-time
                projects and practical assignments, you’ll learn how Java is
                used in real production environments.
              </p>

              <p>
                With 200+ hours of guided training, live projects, and full
                placement support, this course prepares you to confidently step
                into roles like Java Developer, Backend Developer, or Full-Stack
                Java Developer.
              </p>
            </div>

            {/* RIGHT IMAGE */}
          </Row>
        </Container>
      </section>

      <section className="who-can-join-section">
        <Container>
          {/* HEADING */}
          <h2 className="who-title">
            Who Should Enroll in a Advance Java Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Cyber Security Training Course is designed for a
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
          <h4 className="mean-title">
            Advance Java Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Advance Java course syllabus is structured to cover end-to-end
            full-stack technologies with a strong emphasis on practical
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
                Why Choose Orange ITech for Advance Java?
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
          <h2 className="fee-title">Advance Java Fees & Duration</h2>

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
              <h2 className="about-title">Advance Java Training FAQs</h2>
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
                "Core Java (OOPs, Collections, Exception Handling)",
                "JDBC (Java Database Connectivity)",
                "Servlets",
                "JSP (Java Server Pages)",
                "MVC Architecture",
                "Spring Framework",
                "Spring Boot",
                "RESTful Web Services (REST APIs)",
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
            Career Opportunities After Advance Java Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

         {/* ROLE CARDS */}
<Row className="gy-4 mt-4">
  {/* Java Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaJava className="career-icon" />
      <span>Java Developer</span>
    </div>
  </Col>

  {/* Backend Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaServer className="career-icon" />
      <span>Backend Developer</span>
    </div>
  </Col>

  {/* Spring Boot Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaLeaf className="career-icon" />
      <span>Spring Boot Developer</span>
    </div>
  </Col>

  {/* Software Engineer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaCode className="career-icon" />
      <span>Software Engineer</span>
    </div>
  </Col>

  {/* Full-Stack Java Developer */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaLayerGroup className="career-icon" />
      <span>Full-Stack Java Developer</span>
    </div>
  </Col>

  {/* Maven */}
  <Col md={4}>
    <div
      className="career-card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaCubes className="career-icon" />
      <span>Maven</span>
    </div>
  </Col>
</Row>


          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Advance Java are in high demand across IT services, startups,
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
                  <strong>Advance Java </strong>
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
