import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
  FaCode, FaMicrochip,  FaLaptopCode, FaGamepad, FaLaptop,
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
// import SocialButtons from "./SocialButtons";

export default function CProgrammingPage() {
  const modules = [
    {
      title: "C Programming",
      children: [
        {
          title: "1. Introduction to C Language",
          topics: [
            "What is C Programming and its modern relevance",
            "Evolution and history of the C language",
            "Basic structure and syntax of a C program",
            "Compilation and execution process",
            "Preprocessor, Compiler, Linker, and Loader",
          ],
        },
        {
          title: "2. C Basics",
          topics: [
            "C syntax and coding conventions",
            "Keywords and identifiers",
            "Declaring variables and constants",
            "Fundamental data types (int, float, char, etc.)",
            "Input and output using scanf() and printf()",
          ],
        },
        {
          title: "3. Operators and Expressions",
          topics: [
            "Arithmetic operators (+, -, *, /, %)",
            "Relational operators (==, !=, >, <, etc.)",
            "Logical operators (&&, ||, !)",
            "Bitwise operators (&, |, ^, <<, >>)",
            "Assignment and compound assignment operators",
            "Increment and decrement operators",
            "Conditional (ternary) operator",
            "Operator precedence and associativity",
            "Implicit and explicit type conversions",
          ],
        },
        {
          title: "4. Control Structures",
          topics: [
            "Decision making statements (if, if-else, switch)",
            "Looping statements (for, while, do-while)",
            "Nested control structures",
            "Break and continue statements",
            "Goto statement",
          ],
        },
        {
          title: "5. Functions in C",
          topics: [
            "Introduction to functions",
            "Function declaration, definition, and calling",
            "Types of functions",
            "Function arguments and return values",
            "Call by value and call by reference",
            "Recursive functions",
            "Storage classes",
          ],
        },
        {
          title: "6. Arrays and Strings",
          topics: [
            "Introduction to arrays",
            "One-dimensional and multi-dimensional arrays",
            "Array initialization and traversal",
            "Strings in C",
            "String handling functions",
            "Arrays of strings",
          ],
        },
        {
          title: "7. Pointers",
          topics: [
            "Introduction to pointers",
            "Pointer declaration and initialization",
            "Pointer arithmetic",
            "Pointers and arrays",
            "Pointers and functions",
            "Pointers to pointers",
            "Dynamic memory allocation",
          ],
        },
        {
          title: "8. Structures and Unions",
          topics: [
            "Declaring and using structures",
            "Arrays of structures",
            "Nested structures",
            "Passing structures to functions",
            "Introduction to unions",
            "Difference between structures and unions",
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
            "Data Interpretation (Tables, Bar Graphs, Pie Charts, Line Graphs)",
          ],
        },
        {
          title: "2. Logical Reasoning",
          topics: [
            "Blood Relations",
            "Direction Sense",
            "Coding and Decoding",
            "Clocks and Calendar Problems",
            "Cubes and Dice Reasoning",
            "Seating Arrangements (Linear, Circular, Complex)",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles (Floor-based, Box-based, Scheduling)",
            "Miscellaneous Reasoning (Series, Analogy, Classification)",
          ],
        },
      ],
    },

    {
      title: "Softskills",
      children: [
        {
          title: "1. Professional Foundation",
          topics: [
            "Setting the Right Tone for Professional Growth",
            "Introduction to 'Be Employable' Mindset",
            "Understanding the Competency Matrix (Technical + Behavioral Skills)",
          ],
        },
        {
          title: "2. Communication & Presentation",
          topics: [
            "Effective Verbal and Non-Verbal Communication",
            "Presentation Skills: Structuring, Delivery, and Visual Aids",
            "Business Communication: Emails, Reports, and Meetings",
          ],
        },
        {
          title: "3. Personal Development",
          topics: [
            "Attitude, Motivation, and Growth Mindset",
            "Emotional Intelligence (Self-awareness, Empathy, Relationship Management)",
            "Leadership Qualities and Team Collaboration",
          ],
        },
        {
          title: "4. Career Readiness",
          topics: [
            "Creating an ATS-Friendly CV/Resume",
            "Group Discussion (GD) Strategies and Common Topics",
            "Mock Group Discussion Sessions with Feedback",
            "Personal Interview (PI) Practice: Technical & HR Rounds",
            "Virtual Interview Best Practices (Lighting, Background, Etiquette)",
          ],
        },
        {
          title: "5. Future Planning",
          topics: [
            "Industry Know-how: Trends in IT & Software Development",
            "Career Roadmap, Certifications (e.g., AWS, Oracle, Scrum), and Action Plan",
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
      question: "Is C programming good for beginners?",
      answer:
        "Yes, C is an excellent language for beginners as it helps build strong programming fundamentals and logical thinking.",
    },
    {
      question: "How long does it take to learn C programming?",
      answer:
        "With consistent practice, you can learn the basics within a few weeks and gain confidence through hands-on projects.",
    },
    {
      question: "Do I need prior coding experience to learn C programming?",
      answer:
        "No, this course starts from the basics and is designed for absolute beginners.",
    },
    {
      question: "What can I learn after C programming?",
      answer:
        "After C, you can easily move to advanced languages like C++, Java, Python, and Data Structures.",
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
              C Programming Course – Master the Fundamentals of Programming
            </h1>

            <p>
              Build strong programming fundamentals with C – the foundation of
              modern software development.
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
            
              <img
                src={publicUrlFor("images/courses/Heroc.jpg")}
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
              <h2 className="angular-title">About the C Programming Course</h2>
              <p>
                The C Programming Course at Orange ITech is designed to help
                beginners master the core concepts of programming using one of
                the most powerful and widely used languages in the world. C is
                the backbone of operating systems, embedded systems, and modern
                programming languages, making it the perfect starting point for
                anyone entering the IT field.
              </p>
              <p>
                With 200+ hours of immersive, hands-on learning and a real-world
                project, this course equips you with practical skills that form
                a strong base for advanced programming and software development
                careers.
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
            Who Can Join the C progamming Course? Program?
          </h2>

          <p className="who-subtitle">This program is ideal for:</p>

          {/* SCROLL WRAPPER */}
          <div className="who-scroll-wrapper">
            <div className="who-scroll-track">
              {/* CARD 1 */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>Students and fresh graduates entering the IT field</span>
              </div>

              {/* CARD 2 */}
              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>Working professionals planning a career switch</span>
              </div>

              {/* CARD 3 */}
              <div className="who-card">
                <FaCode className="who-icon" />
                <span>Non-IT professionals looking to learn programming</span>
              </div>

              {/* CARD 4 */}
              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>Engineers, analysts, and testers wanting to upskill</span>
              </div>

              {/* CARD 5 */}
              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>Anyone interested in building a career using Python</span>
              </div>

              {/* DUPLICATE FOR SMOOTH LOOP */}
              {/* CARD 1 */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>Students and fresh graduates entering the IT field</span>
              </div>

              {/* CARD 2 */}
              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>Working professionals planning a career switch</span>
              </div>

              {/* CARD 3 */}
              <div className="who-card">
                <FaCode className="who-icon" />
                <span>Non-IT professionals looking to learn programming</span>
              </div>

              {/* CARD 4 */}
              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>Engineers, analysts, and testers wanting to upskill</span>
              </div>

              {/* CARD 5 */}
              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>Anyone interested in building a career using Python</span>
              </div>
              {/* DUPLICATE FOR SMOOTH LOOP */}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CURRICULUM ===== */}
      <section className="syllabus-wrapper">
        <div className="syllabus-container">
          <h4 className="python-title">
            What You Will Learn in C Programming Course
          </h4>

          <p className="faq-subtitle">
            Our C Programming Course syllabus is structured to cover end-to-end
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
                Why Choose Orange ITech for C Programming Course ?
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
          <h2 className="fee-title">C Programming Course Fees & Duration</h2>

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
              <h2 className="about-title">C Programming Course FAQs</h2>
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
                "C Programming Fundamentals",
                "Data Types & Variables",
                "Control Statements",
                "Functions & Recursion",
                "Pointers & Memory Management",
                "Arrays, Strings & Structures",
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
            Career Opportunities After C Programming Course
          </h2>

          <p className="career-subtitle text-center">
            After completing the C Programming Course, you can apply for roles
            such as:
          </p>

          {/* ROLE CARDS */}
        <Row className="gy-4 mt-4">
      {/* Software Developer */}
      <Col md={4}>
        <div className="career-card">
          <FaCode className="career-icon" />
          <span>Software Developer</span>
        </div>
      </Col>

      {/* Embedded Systems Engineer */}
      <Col md={4}>
        <div className="career-card">
          <FaMicrochip className="career-icon" />
          <span>Embedded Systems Engineer</span>
        </div>
      </Col>

      {/* System Programmer */}
      <Col md={4}>
        <div className="career-card">
          <FaServer className="career-icon" />
          <span>System Programmer</span>
        </div>
      </Col>

      {/* Foundation for C++, Java, Python, and Data Structures */}
      <Col md={4}>
        <div className="career-card">
          <FaLaptop className="career-icon" />
          <span>Full-stack Developer</span>
        </div>
      </Col>

      {/* Firmware Engineer */}
      <Col md={4}>
        <div className="career-card">
          <FaLaptopCode className="career-icon" />
          <span>Firmware Engineer</span>
        </div>
      </Col>

      {/* Game Engine Developer */}
      <Col md={4}>
        <div className="career-card">
          <FaGamepad className="career-icon" />
          <span>Game Engine Developer</span>
        </div>
      </Col>
    </Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            C Programming professionals are in high demand across startups, IT
            companies, product-based firms, and enterprise organizations.
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
                  <strong> C Programming Development </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in C Programming. This industry-recognized certificate
                  validates your skills and makes you stand out in the job
                  market.
                  <br />
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
