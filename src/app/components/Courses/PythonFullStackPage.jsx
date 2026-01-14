import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
  FaPython,
  FaChartBar,
  FaRobot,
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

export default function PythonFullStackPage() {
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
        {
          title: "7. Advance Java Script Syllabus",
          topics: [
            "Errors & Exceptions Handling",
            "Form Validation",
            "Animation",
            "Multimedia",
            "Debugging",
            "Image Map",
            "Browsers Compatibility",
          ],
        },
      ],
    },

    {
      title: "Backend Development",
      children: [
        {
          title: "1. Python Syllabus",
          topics: [
            "Introduction to Python",
            "Python Basics",
            "Operators in Python",
            "Control Structures",
            "Collections in Python",
            "Strings in Python",
            "Functions and Recursion",
            "Object-Oriented Programming (OOP)",
            "Modules and Packages",
            "File Handling",
            "Exception Handling",
            "Python Standard Libraries",
            "Comprehensions & Iterators",
            "Multithreading in Python",
          ],
        },
        {
          title: "2. Django Framework",
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
          title: "3. SQL",
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
            "Backend Deployment: Railway, Render, Heroku",
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
            "Cubes and Dice Reasoning",
            "Seating Arrangements",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles",
            "Miscellaneous Reasoning",
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
            "Understanding the Competency Matrix",
          ],
        },
        {
          title: "2. Communication & Presentation",
          topics: [
            "Effective Verbal and Non-Verbal Communication",
            "Presentation Skills",
            "Business Communication",
          ],
        },
        {
          title: "3. Personal Development",
          topics: [
            "Attitude, Motivation, and Growth Mindset",
            "Emotional Intelligence",
            "Leadership Qualities and Team Collaboration",
          ],
        },
        {
          title: "4. Career Readiness",
          topics: [
            "Creating an ATS-Friendly CV/Resume",
            "Group Discussion Strategies",
            "Mock GD Sessions",
            "Personal Interview Practice",
            "Virtual Interview Best Practices",
          ],
        },
        {
          title: "5. Future Planning",
          topics: ["Industry Know-how", "Career Roadmap and Certifications"],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "3 Projects",
          topics: ["Apply heaps & priority queues for task scheduling."],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "Is Python a good career option in 2025 and beyond?",
      answer:
        "Yes, Python continues to be one of the most in-demand programming languages globally. It is widely used in Data Science, AI, Machine Learning, Web Development, Automation, and DevOps, making it a strong long-term career choice.",
    },
    {
      question:
        "Do I need prior programming knowledge to join this Python course?",
      answer:
        "No prior programming experience is required. This Python Development Career Training Program starts from the basics and gradually moves to advanced concepts.",
    },
    {
      question:
        "What is the duration of the Python Development Career Training Program?",
      answer:
        "The course duration is 6 months, covering both fundamental and advanced Python concepts along with real-time projects.",
    },
    {
      question: "Will I get hands-on experience with real-time projects?",
      answer:
        "Yes, the program includes 2 real-time industry projects that help you gain practical exposure and build a strong project portfolio.",
    },
    {
      question: "What learning modes are available for this Python course?",
      answer:
        "Orange ITech offers Online Live, Self-Paced, and Offline Classroom (Pune) training modes.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes, you will receive an industry-recognized Python Development Certification upon successful completion of the program.",
    },
    {
      question: "Does Orange ITech provide placement assistance?",
      answer:
        "Yes, Orange ITech provides 100% placement assistance, including resume building, mock interviews, aptitude training, and interview scheduling support.",
    },
    {
      question:
        "How can I enroll in the Python Development Career Training Program?",
      answer:
        "You can enroll by visiting the Orange ITech website or contacting the admissions team directly. Seats are limited, so early registration is recommended.",
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
            <h1>Python Full Stack Development Course</h1>

            <p>
              Build a successful career in Python with Orange ITech’s
              industry-oriented training, real-time projects, and complete
              placement support.
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
                src="https://www.youtube.com/embed/E0r_QetaVAE"
                title="Become a Python Full Stack Developer | Complete Roadmap &amp; Technologies"
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
                About the Python Development Career Training Program
              </h2>
            <Col lg={6} md={6} className="about-content-col">
              
              <p>
                At Orange ITech, we offer one of the most comprehensive and
                industry-oriented Python Development Career Training Programs,
                designed to help learners build strong programming fundamentals
                and become job-ready Python professionals.
              </p>

              <p>
                Python is one of the most popular and versatile programming
                languages, widely used across Artificial Intelligence, Machine
                Learning, Data Science, Web Development, Automation, DevOps, and
                Cloud Technologies. This training program takes you from the
                basics of Python programming to advanced concepts through
                structured learning and hands-on practice.
              </p>

              <p>
                Whether you are a beginner starting your coding journey or a
                professional looking to upskill, our Python career training
                program equips you with practical knowledge, real-world project
                experience, and career support to confidently enter the IT
                industry.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/Python.jpg")}
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
            Who Can Join the Python Development Career Training Program?
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
            Python Full Stack Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Python full stack development course syllabus is structured to
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
                Why Choose Orange ITech for Python Full Stack Development?
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
            Python Full Stack Development Course Fees & Duration
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
                Python Development Career Training Program FAQs
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
                "Core Java",
                "Advanced Java",
                "HTML, CSS, JavaScript",
                "Git & GitHub",
                "Angular JS",
                "MySQL",
                "Spring Boot",
                "Hibernate",
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
            Career Opportunities After Python Development Training
          </h2>

          <p className="career-subtitle text-center">
            After completing this Python career training program, you can apply
            for roles such as:
          </p>

          {/* ROLE CARDS */}
      <Row className="gy-4 mt-4">
  <Col md={4}>
    <div className="career-card">
      <FaPython className="career-icon" />
      <span>Python Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaCogs className="career-icon" />
      <span>Junior Data Scientist</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaServer className="career-icon" />
      <span>Software Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaChartBar className="career-icon" />
      <span>Data Analyst</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaRobot className="career-icon" />
      <span>Automation Engineer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaLaptopCode className="career-icon" />
      <span>Web Developer</span>
    </div>
  </Col>
</Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Python professionals are in high demand across startups, IT
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
                  <strong>Python Development</strong>
                </h3>

                <p className="certification-text">
                  Upon successful completion of the program, you will receive a
                  Python Development Career Training Certificate from Orange
                  ITech. This industry-recognized certification validates your
                  skills and strengthens your employability in today’s
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
        <a href="/enquiry" className="btn btn-primary cta-btn">
          Book Free Demo
        </a>
      </section>
    </div>
  );
}
