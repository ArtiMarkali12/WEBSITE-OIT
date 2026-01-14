import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
  FaJava, FaCode, FaServer, FaLaptopCode, 
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

export default function CoreJavaPage() {
  const modules = [
    {
      title: "Java Programming",
      children: [
        {
          title: "1. Basics of Java Programming",
          topics: [
            "What is Java and why it’s platform-independent",
            "Key features of Java: Object-oriented, Secure, Portable",
            "JVM (Java Virtual Machine), JRE, JDK",
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
        {
          title: "4. Arrays and Strings",
          topics: [
            "Single and multidimensional arrays",
            "Array traversal, sorting, and searching",
            "String class vs StringBuffer vs StringBuilder",
            "String methods and string manipulation",
          ],
        },
        {
          title: "5. Exception Handling",
          topics: [
            "Types of exceptions: checked & unchecked",
            "try, catch, finally, throw, throws",
            "Custom exceptions",
            "Best practices for exception handling",
          ],
        },
        {
          title: "6. Classes, Objects, and Inheritance",
          topics: [
            "Creating classes and objects",
            "Access modifiers and encapsulation",
            "Constructors and overloading",
            "Inheritance: extends, method overriding",
            "super and this keyword",
          ],
        },
        {
          title: "7. Abstraction and Interface",
          topics: [
            "Abstract classes and methods",
            "Interface implementation",
            "Differences between interface and abstract class",
            "Multiple inheritance via interfaces",
          ],
        },
        {
          title: "8. Polymorphism",
          topics: [
            "Compile-time polymorphism (method overloading)",
            "Runtime polymorphism (method overriding)",
            "Dynamic method dispatch",
            "Real-time use cases",
          ],
        },
        {
          title: "9. File Handling in Java (File I/O)",
          topics: [
            "Working with File, FileReader, FileWriter",
            "Buffered streams",
            "Reading and writing text and binary files",
            "File exceptions and permissions",
          ],
        },
        {
          title: "10. Collections Framework",
          topics: [
            "Introduction to Java Collections",
            "List, Set, Map interfaces",
            "ArrayList, LinkedList, HashSet, TreeSet, HashMap",
            "Iterator and enhanced for loop",
          ],
        },
        {
          title: "11. GUI Development (Swing, AWT, Event Handling)",
          topics: [
            "Basics of AWT and Swing",
            "Creating GUI components: buttons, labels, text fields",
            "Layout managers",
            "Event handling and listeners",
          ],
        },
        {
          title: "12. Lambda Functions and Java 8 Features",
          topics: [
            "Introduction to Lambda Expressions",
            "Functional interfaces",
            "Java 8 Date and Time API",
            "Default and static methods in interfaces",
          ],
        },
        {
          title: "13. Stream API",
          topics: [
            "What are Streams in Java",
            "Stream operations: filter, map, reduce",
            "Working with collections and pipelines",
            "Parallel streams",
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
            "Clocks and Calendar Problems",
            "Seating Arrangements",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles",
          ],
        },
      ],
    },

    {
      title: "Softskills",
      children: [
        {
          title: "1. Professional Communication",
          topics: [
            "Verbal and non-verbal communication",
            "Email and business communication",
            "Presentation skills",
          ],
        },
        {
          title: "2. Personal Development",
          topics: [
            "Confidence building",
            "Time management",
            "Problem-solving mindset",
            "Team collaboration",
          ],
        },
        {
          title: "3. Career Readiness",
          topics: [
            "Resume building",
            "Interview preparation (HR + Technical)",
            "Group discussion techniques",
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
            "Console-based Java applications",
            "File handling based mini project",
            "Collections-based project",
            "GUI-based desktop application",
          ],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is Data Science & AI?",
      answer:
        "Data Science focuses on extracting insights from data, while AI enables machines to learn and make intelligent decisions.",
    },
    {
      question: "Do I need programming experience for this course?",
      answer:
        "Basic programming knowledge is helpful, but beginners can start with guided training.",
    },
    {
      question: "Is Data Science & AI a good career choice?",
      answer:
        "Yes, it is one of the fastest-growing and highest-paying career paths in the tech industry.",
    },
    {
      question: "How long does it take to complete a Data Science & AI course?",
      answer:
        "You can complete the course in 6 months, depending on your pace. It’s flexible and designed for both full-time learners and working professionals.",
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
              Core Java Course – Build a Strong Foundation in Java Programming
            </h1>

            <p>
              Learn Java from scratch with hands-on training, real-world
              projects, and placement support.
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
                Book Free Demo Class
              </a>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="java-hero-right">
            
              <img
                src={publicUrlFor("images/courses/CoreJavaH.jpg")}
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
              <h2 className="angular-title">
                About the Core Java Course
              </h2>

              <p>
                The Core Java Programming Course at Orange ITech is your gateway
                to becoming a confident and job-ready Java developer. Designed
                for beginners and professionals alike, this industry-relevant
                course takes you from Java fundamentals to advanced
                object-oriented programming (OOP) concepts through practical,
                hands-on learning.
              </p>

              <p>
                With 200+ hours of in-depth training, real-world projects, and
                expert mentorship, you’ll learn how to build robust Java
                applications while understanding how Java works behind the
                scenes. This course focuses on writing clean, efficient code and
                preparing you for real-time development environments and
                technical interviews.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            
          </Row>
        </Container>
      </section>

      <section className="who-can-join-section">
        <Container>
          {/* HEADING */}
          <h2 className="who-title">Who Can Join Core Java Course ?</h2>

          <p className="who-subtitle">
            Our Job Oriented Core Java Course is designed for a wide range of
            learners, including:
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
          <h4 className="mean-title">Core Java Course Curriculum Overview</h4>

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
                Why Choose Orange ITech forCore Java Course ?
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
          <h2 className="fee-title">Core Java Course Fees & Duration</h2>

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
              <h2 className="about-title">Core Java Course FAQs</h2>
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
                "Core Java Programming",
                "OOP Concepts (Classes & Inheritance)",
                "Exception Handling",
                "Collections Framework",
                "Multithreading",
                "File Handling (I/O)",
                "JDBC & Database Connectivity",
                "Java 8 Features (Lambda, Stream API)",
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
            Career Opportunities After core java Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

          {/* ROLE CARDS */}
       <Row className="gy-4 mt-4">
  {/* Java Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaJava className="career-icon" />
      <span>Java Developer</span>
    </div>
  </Col>

  {/* Software Engineer */}
  <Col md={4}>
    <div className="career-card">
      <FaCode className="career-icon" />
      <span>Software Engineer</span>
    </div>
  </Col>

  {/* Backend Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaServer className="career-icon" />
      <span>Backend Developer</span>
    </div>
  </Col>

  {/* Application Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaLaptopCode className="career-icon" />
      <span>Application Developer</span>
    </div>
  </Col>

  {/* Junior Full-Stack Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaLaptopCode className="career-icon" />
      <span>Junior Full-Stack Developer</span>
    </div>
  </Col>

  {/* Core Java Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaGlobe className="career-icon" />
      <span>Core Java Developer</span>
    </div>
  </Col>
</Row>
          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
           Core Java Course are in high demand across IT services, startups,
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
                  src={publicUrlFor("images/courses/certificateImg.jpg")}
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
                  <strong> Core Java Course
 </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification in Core Java Course  This industry-recognized certificate validates your skills and makes you stand out in the job market.

                </p>
                <p>Join the Core Java Course and gain the skills, confidence, and industry exposure needed to succeed as a Java developer.
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
