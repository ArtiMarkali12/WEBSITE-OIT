import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
  FaChartLine,
  FaRobot,
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaPython,
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
      title: "Frontend Development",
      children: [
        {
          title: "1. HTML Syllabus",
          topics: [
            "Introduction to HTML",
            "HTML Tags and Elements",
            "HTML – Attributes",
            "HTML – Formatting",
            "HTML – Phrase Tags",
            "HTML – Metatags",
            "HTML – Comments",
            "HTML – Image tags",
            "HTML Tables",
            "HTML – Lists",
            "HTML – Iframes",
            "HTML – Blocks",
            "HTML – Backgrounds",
            "HTML – Colors, Fonts",
          ],
        },
        {
          title: "2. HTML5 Syllabus",
          topics: [
            "Understanding Web Concepts & Terminologies",
            "HTML – Forms",
            "New Features in HTML5",
            "HTML Content / Media Tags",
            "HTML5 Semantic Tags",
            "Media Queries",
            "Project-1: Static Website",
          ],
        },
        {
          title: "3. CSS Syllabus",
          topics: [
            "Introduction with CSS",
            "The STYLE Element",
            "Measurement Units",
            "Colors, Backgrounds",
            "Fonts, texts, images",
            "Tables",
            "Borders",
            "Margins",
            "Paddings",
          ],
        },
        {
          title: "4. CSS3 Syllabus",
          topics: [
            "Introduction with CSS3",
            "Rounded Corners",
            "Border Image",
            "Shadow",
            "2D Transforms",
            "3D Transforms",
            "Animation",
            "User Interface",
          ],
        },
        {
          title: "5. BOOTSTRAP 4 Syllabus",
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
        {
          title: "6. JavaScript Syllabus",
          topics: [
            "Variables, Operators",
            "Control Structures",
            "Functions",
            "Events",
            "Dynamic Programming",
            "Strings Object And Arrays Object",
            "Date Object And RegExp Object",
            "Math Object",
            "JavaScript – Document Object Model (DOM)",
          ],
        },
      ],
    },
    {
      title: "Data Science",
      children: [
        {
          title: "1. Data Science Essentials",
          topics: [
            "Introduction to Data Science",
            "Python for Data Science",
            "Data Manipulation & Visualization with Python",
            "Exploratory Data Analysis (EDA)",
            "Statistics for Data Science",
            "Advanced Machine Learning Techniques",
            "Supervised Learning Models",
            "Unsupervised Learning Models",
            "Deep Learning & Neural Networks",
            "Time Series Analysis and Ensemble Learning",
            "SQL and Data Storage",
            "Data Visualization and Reporting Tools",
            "4 Projects",
          ],
        },
        {
          title: "2. Version Control System",
          topics: [
            "Introduction to Version Control",
            "Getting Started with Git",
            "Git Workflow",
            "Branching in Git",
            "Merging and Resolving Conflicts",
            "Working with GitHub",
            "Collaboration Workflows",
            "Advanced Git Commands and Techniques",
            "Best Practices for Git and GitHub",
          ],
        },
        {
          title: "3. SQL",
          topics: [
            "MySQL Server Installation & Setup",
            "Introduction to Basic Database Concepts",
            "Introduction to SQL Server (vs MySQL)",
            "DDL (Data Definition Language) Statements",
            "DML (Data Manipulation Language) Statements",
            "Working with Constraints (Primary Key, Foreign Key, Unique, etc.)",
            "Working with Queries (DQL – SELECT, WHERE, GROUP BY, HAVING)",
            "Joins (INNER, LEFT, RIGHT, FULL) and Set Operations (UNION, INTERSECT)",
            "Implementing Views (Simple & Complex)",
            "Working with Stored Procedures and Functions",
            "Practice with 400+ Real-World SQL Queries",
          ],
        },
      ],
    },
    {
      title: "DSA",
      children: [
        {
          title: "1. Introduction to DSA",
          topics: [
            "Overview of Data Structures and Algorithms",
            "Time Complexity and Space Complexity",
            "Big-O, Omega (Ω), and Theta (Θ) Notations",
            "Asymptotic Analysis",
            "Types of Algorithms: Brute Force, Divide and Conquer, Greedy, Dynamic Programming",
          ],
        },
        {
          title: "2. Arrays",
          topics: [
            "Introduction to Arrays",
            "Types of Arrays: Static and Dynamic",
            "Operations on Arrays: Insertion, Deletion, Traversal, Searching",
            "Array Representation in Memory",
            "Multi-dimensional Arrays",
            "Array Algorithms: Linear Search, Binary Search",
            "Sorting Algorithms: Bubble Sort, Insertion Sort, Selection Sort",
          ],
        },
        {
          title: "3. Linked Lists",
          topics: [
            "Introduction to Linked Lists",
            "Types: Singly, Doubly, and Circular Linked Lists",
            "Operations: Insertion, Deletion, Traversal",
            "Reverse a Linked List",
            "Detecting Cycles (Floyd’s Cycle Detection)",
            "Sorting Linked Lists (e.g., Merge Sort)",
          ],
        },
        {
          title: "4. Stacks",
          topics: [
            "Introduction to Stacks (LIFO Principle)",
            "Stack Operations: Push, Pop, Peek",
            "Applications: Expression Evaluation (Infix, Postfix, Prefix Conversion)",
            "Implementing Stack using Arrays and Linked Lists",
            "Problem Solving: Balanced Parentheses Check",
          ],
        },
        {
          title: "5. Queues",
          topics: [
            "Introduction to Queues (FIFO Principle)",
            "Types: Simple Queue, Circular Queue, Priority Queue, Deque (Double-ended Queue)",
            "Queue Operations: Enqueue, Dequeue, Peek",
            "Applications: CPU Job Scheduling, BFS in Graphs",
            "Implementing Queue using Arrays and Linked Lists",
          ],
        },
        {
          title: "6. Recursion",
          topics: [
            "Recursion: Definition, Base Case, and Recursive Call",
            "Call Stack and Recursion Flow",
            "Solving Problems Using Recursion: Factorial, Fibonacci, Tower of Hanoi",
            "Recursion vs Iteration",
            "Common Pitfalls: Stack Overflow, Redundant Calculations",
          ],
        },
        {
          title: "7. Sorting Algorithms",
          topics: [
            "Basic Sorting: Bubble Sort, Selection Sort, Insertion Sort",
            "Efficient Sorting: Merge Sort, Quick Sort, Heap Sort",
            "Comparison of Sorting Algorithms (Time & Space Complexity, Stability, Use Cases)",
            "Non-Comparison Sorting: Radix Sort, Counting Sort",
            "When to Use Which Sorting Algorithm?",
          ],
        },
      ],
    },
    {
      title: "Industry Tools",
      children: [
        {
          title: "1. Postman API Testing Tool",
          topics: [
            "Introduction to API Testing and RESTful Services",
            "Sending API Requests: GET, POST, PUT, DELETE",
            "Inspecting Responses: Status Codes, Headers, Body (JSON/XML)",
            "Setting Up Authorization: Bearer Token, API Keys, Basic Auth",
            "Environment & Global Variables for Dynamic Testing",
            "Automating API Tests with Collections and Scripts",
            "Generating Documentation from APIs",
          ],
        },
        {
          title: "2. Git Version Control System",
          topics: [
            "Introduction to Version Control and Collaboration Workflow",
            "Basic Git Commands: git init, add, commit, status, log",
            "Remote Repositories: git clone, push, pull, fetch",
            "Branching Strategy: Creating, Switching, and Merging Branches",
            "Resolving Merge Conflicts",
            "Git Best Practices for Team Development",
          ],
        },
        {
          title: "3. GitHub Cloud-based Repository",
          topics: [
            "Hosting and Managing Git Repositories Remotely on GitHub",
            "Creating Public & Private Repositories",
            "Collaboration with Pull Requests (PRs) and Code Reviews",
            "Issue Tracking, Labels, and Project Boards",
            "GitHub Wikis, Releases, and Security Alerts",
            "Working with GitHub Desktop and CLI",
          ],
        },
        {
          title: "4. Deployment Tools & Project Deployment",
          topics: [
            "Introduction to Deployment Workflow and DevOps Basics",
            "Frontend Deployment: Vercel, Netlify (Static Sites, SPA)",
            "Backend Deployment: Railway, Render, Heroku (Node.js, Java, Spring Boot)",
            "Environment Variables & Secrets Management",
            "CI/CD Basics: Automating Build & Deployment Pipelines",
            "Domain Mapping and SSL Certificate Setup (Intro)",
          ],
        },
        {
          title: "5. Figma UI/UX Design",
          topics: [
            "Introduction to Figma as a Collaborative Design Tool",
            "UI/UX Fundamentals: User Research, Wireframing, and Prototyping",
            "Creating Interactive Prototypes and Design Systems",
            "Component-Based Design with Auto-Layout and Constraints",
            "Collaboration Features: Comments, Sharing, and Developer Handoff",
            "Enhancing Project Planning and Visual Communication Skills",
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
          title: "1. Projects",
          topics: ["Apply heaps & priority queues for task scheduling."],
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
              Data Science & AI Course in Pune – Build a Career in Artificial
              Intelligence
            </h1>

            <p>
              Master Python, Machine Learning, Deep Learning & AI tools with
              real-world projects and placement support.
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
            <div className="video-wrapper">
              <iframe
                width="550"
                height="310"
                src="https://www.youtube.com/embed/L5KDrMkMlzw"
                title="Become a Data Science Expert | Complete Roadmap &amp; Technologies"
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
                About the Data Science & AI Course
              </h2>
            <Col lg={6} md={6} className="about-content-col">
              

              <p>
                The Data Science & AI course at Orange ITech is a comprehensive,
                industry-oriented program designed to help you master data
                analysis, machine learning, deep learning, and artificial
                intelligence using modern tools and techniques.
              </p>

              <p>
                From data preprocessing and visualization to building
                intelligent models and deploying AI solutions, this course
                covers the complete lifecycle of data-driven applications.
                You’ll work with real datasets, hands-on projects, and practical
                use cases to gain job-ready skills demanded by top companies.
              </p>

              <p>
                Whether you’re a beginner or a professional looking to
                transition into data science or AI, this course equips you with
                the knowledge and confidence to succeed in this fast-growing
                field.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/DataImg.jpg")}
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
            Who Can Join Data Science And AI Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Data Science And AI Training Course is designed for
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
          <h4 className="about-title">
            Data Science And AI Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Data Science And AI course syllabus is structured to cover
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
                Why Choose Orange ITech for Data Science And AI?
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
          <h2 className="fee-title">
            Data Science And AI Course Fees & Duration
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
              <h2 className="about-title">Data Science And AI Training FAQs</h2>
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
                "Python Programming",

                "NumPy, Pandas",
                "Machine Learning",

                "Artificial Intelligence",
                "SQL & Databases",

                "Model Deployment",
                "Git & GitHub",
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
            Career Opportunities After Java Full Stack Development Training
            Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

          {/* ROLE CARDS */}
        <Row className="gy-4 mt-4">
  {/* Data Scientist */}
  <Col md={4}>
    <div className="career-card">
      <FaChartLine className="career-icon" />
      <span>Data Scientist</span>
    </div>
  </Col>

  {/* Machine Learning Engineer */}
  <Col md={4}>
    <div className="career-card">
      <FaRobot className="career-icon" />
      <span>Machine Learning Engineer</span>
    </div>
  </Col>

  {/* AI Engineer */}
  <Col md={4}>
    <div className="career-card">
      <FaBrain className="career-icon" />
      <span>AI Engineer</span>
    </div>
  </Col>

  {/* Data Analyst */}
  <Col md={4}>
    <div className="career-card">
      <FaChartBar className="career-icon" />
      <span>Data Analyst</span>
    </div>
  </Col>

  {/* Business Intelligence Analyst */}
  <Col md={4}>
    <div className="career-card">
      <FaDatabase className="career-icon" />
      <span>Business Intelligence Analyst</span>
    </div>
  </Col>

  {/* Python Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaPython className="career-icon" />
      <span>Python Developer</span>
    </div>
  </Col>
</Row>
          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Data Science And AI are in high demand across IT services, startups,
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
                  <strong>Data Science And AI </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in data Science And AI . This industry-recognized
                  certification validates your skills and helps you stand out in
                  the competitive job market.
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
