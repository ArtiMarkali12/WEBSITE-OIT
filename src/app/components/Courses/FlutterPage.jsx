
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { SiFlutter } from "react-icons/si";
import {
  FaMobileAlt, FaLaptopCode, FaPaintBrush, FaCode, 
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

export default function FlutterPage() {
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
      title: "Flutter Development",
      children: [
        {
          title: "1. Introduction to Flutter",
          topics: [
            "Features of Flutter",
            "Advantages and Disadvantages of Flutter",
            "Flutter Installation on Windows",
            "Flutter Installation on macOS",
            "Creating Simple App in Android Studio",
            "Flutter Application Architecture",
          ],
        },
        {
          title: "2. Flutter Basics & Dart",
          topics: [
            "Widgets",
            "Gestures",
            "Introduction to Dart Programming",
            "Variables and Data Types",
            "Decision Making and Loops",
            "Functions",
            "Object Oriented Programming",
            "Widget Build Visualization",
          ],
        },
        {
          title: "3. Dart & Data Programming",
          topics: [
            "Basic Programming",
            "OOP Concepts",
            "Exception Handling",
            "Debugging Techniques",
          ],
        },
        {
          title: "4. Asynchronous Programming & State Management",
          topics: [
            "Futures, Async and Await",
            "Streams",
            "Introduction to Layouts",
            "Single Child Widgets",
            "Multiple Child Widgets",
            "Advanced Layouts",
            "Gestures in Flutter",
            "Statement Management",
            "Ephemeral State Management",
            "Application State",
            "Scoped Model",
            "Navigation and Routing",
          ],
        },
        {
          title: "5. UI Development in Flutter",
          topics: [
            "Styles, Assets and Fonts",
            "Media Query and Model API",
            "Lists and Grids Implementation",
            "Animations in Flutter",
            "Custom UI Design",
            "Drawing and Painting with Flutter Packages",
          ],
        },
        {
          title: "6. API Integration in Flutter",
          topics: [
            "Introduction to API and Packages",
            "Types of Dart Packages",
            "Develop Flutter Plugin Package",
            "Accessing REST API",
            "Basic API Concepts",
            "Accessing Product Service API",
          ],
        },
        {
          title: "7. Flutter and Firebase",
          topics: [
            "Introduction to Firebase",
            "Firebase Features",
            "Integrating Firebase with Flutter",
            "User Authentication with Firebase",
            "Firestore Real-time Database",
          ],
        },
        {
          title: "8. Testing and Debugging",
          topics: [
            "Writing Unit Tests",
            "Debugging with Flutter DevTools",
            "Integration Testing",
            "Error and Exception Handling",
          ],
        },
        {
          title: "9. Testing and Debugging",
          topics: [
            "SQLite- Cloud Fire store",
            "Internalization on Flutter Using intl Package",
            "Testing on Flutter",
            "Types of Testing",
            "Widget Testing",
            "Steps Involved",
            "Working Example-Deployment",
            "Android Application",
            "IOS Application",
            "Development Tools",
            "Widget Sets",
            " Flutter Development with Visual Studio Code- Dart DevTools- FlutterSDK",
          ],
        },
        {
          title: "10.Core Java",
          topics: [
            "Basic of Java",
            "Features of Java, JVM",
            "Control Statements",
            "Java Conversion",
            "Methods",
            "Arrays",
            "Strings",
            "Exception Handling",
            "Class & Object",
            "Inheritance",
            "Interface & Abstraction",
            "Polymorphism",
            "File I/O",
            "Collections",
            "Swing, AWT, Event Handling",
            "Lambda Functions",
            "Java 8 Features",
            "Stream API",
          ],
        },
        {
          title: "11. Django Framework",
          topics: [
            "Introduction to Django",
            "Django Models",
            "Django Views",
            "Django Templates",
            "Forms in Django",
            "Django Admin Panel",
            "Django Authentication and Authorization",
            "Django URL Routing",
            "Django Middleware",
            "Django Static Files",
            "Django Sessions and Cookies",
            "Django REST Framework (DRF)",
          ],
        },
        {
          title: "12. SQL",
          topics: [
            "MYSQL Server installation",
            "Introduction to Basic Database Concepts",
            "Introduction to SQL Server",
            "DDL and DML Statements",
            "Working with Constraints",
            "Working with Queries (DQL)",
            "Joins and Set Operations",
            "Implementing Views",
            "Working with Stored Procedures and Functions",
            "Cover 400+ queries",
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
      question: "What is Flutter development?",
      answer:
        "Flutter development involves building cross-platform mobile and web applications using Flutter and the Dart programming language.",
    },
    {
      question: "Is Flutter in demand?",
      answer:
        "Yes, Flutter is in high demand due to its ability to create apps for multiple platforms using a single codebase.",
    },
    {
      question: "Do I need prior app development experience?",
      answer:
        "No, prior experience is not required. The course starts from the basics and progresses to advanced topics.",
    },
    {
      question: "Will I build real-world projects in this course?",
      answer:
        "Yes, you will work on real-world Flutter projects to gain practical experience.",
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer:
        "Yes, you will receive an industry-recognized Flutter Development certification from Orange ITech.",
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
            <h1> Flutter Development Course</h1>

            <p>
              Master Flutter & Dart to build high-performance apps for Android,
              iOS, and Web using a single codebase.
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
                width="550"
                height="310"
                src="https://www.youtube.com/embed/ytw7ZwERRUk"
                title="Become a Flutter Developer | Complete Roadmap &amp; Technologies"
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
            <h2 className="angular-title">
                Become a Cross-Platform App Developer with Flutter
              </h2>
            {/* LEFT CONTENT */}
            <Col lg={6} md={6} className="about-content-col">
              
              <p>
                Launch your career in cross-platform mobile app development with
                the Flutter Development Course at Orange ITech. This course is
                designed to help you build fast, visually appealing, and
                scalable applications for Android, iOS, and Web using Flutter
                and Dart.
              </p>
              <p>
                From the fundamentals of Dart programming to advanced UI/UX
                design, state management, API integration, and deployment, this
                course offers hands-on training through real-world projects to
                make you job-ready.
              </p>
              <h4>What Is the Flutter Course at Orange ITech?</h4>
              The Flutter Development Course is a career-oriented training
              program that focuses on building cross-platform applications using
              Google’s Flutter framework.
              <br />
              You will learn how to:
              <br />
              <ul>
                <li>Write clean and efficient Dart code</li>
                <li>Build responsive and attractive user interfaces</li>
                <li>Develop apps for Android, iOS, and Web</li>
                <li>Integrate APIs and backend services</li>
                <li>Deploy applications across platforms</li>
              </ul>
              <p></p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/Flutter.jpg")}
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
            Who Can Join Flutter Development Course ?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Flutter Development Course Training Course is
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
            Flutter Development Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Flutter Development Course syllabus is structured to cover
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
                Why Choose Orange ITech for Flutter Development Course ?
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
            Flutter Development Course Fees & Duration
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
              <h2 className="about-title">Flutter Development Course FAQs</h2>
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
                "Build cross-platform user interfaces using Flutter widgets and Dart",
                "Develop application logic using Dart programming language",
                "Work with local storage using SQLite and shared preferences",
                "Create scalable applications using Flutter state management patterns",
                "Implement authentication, permissions, and security best practices",
                "Build, test, and deploy Flutter apps for Android, iOS, and Web",
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
            Career Opportunities After Flutter Development Course
          </h2>

          <p className="career-subtitle text-center">
            After completing theFlutter Development Course , you can apply for
            roles such as:
          </p>

          {/* ROLE CARDS */}
           <Row className="gy-4 mt-4">
      {/* Flutter Developer */}
      <Col md={4}>
        <div className="career-card">
          <SiFlutter className="career-icon" />
          <span>Flutter Developer</span>
        </div>
      </Col>

      {/* Mobile Application Developer */}
      <Col md={4}>
        <div className="career-card">
          <FaMobileAlt className="career-icon" />
          <span>Mobile Application Developer</span>
        </div>
      </Col>

      {/* Cross-Platform App Developer */}
      <Col md={4}>
        <div className="career-card">
          <FaLaptopCode className="career-icon" />
          <span>Cross-Platform App Developer</span>
        </div>
      </Col>

      {/* Software Engineer */}
      <Col md={4}>
        <div className="career-card">
          <FaCode className="career-icon" />
          <span>Software Engineer</span>
        </div>
      </Col>

      {/* UI/UX Flutter Engineer */}
      <Col md={4}>
        <div className="career-card">
          <FaPaintBrush className="career-icon" />
          <span>UI/UX Flutter Engineer</span>
        </div>
      </Col>

      {/* Mobile App Consultant */}
      <Col md={4}>
        <div className="career-card">
          <FaGlobe className="career-icon" />
          <span>Mobile App Consultant</span>
        </div>
      </Col>
    </Row>


          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Flutter Development Course are in demand across IT companies,
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
                  <strong>Flutter Development Course</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Flutter Development Course . This industry-recognized
                  certificate validates your skills and makes you stand out in
                  the job market.
                  <br />
                  Turn your ideas into powerful flutter applications with Orange
                  ITech’s Flutter Development Course.
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
