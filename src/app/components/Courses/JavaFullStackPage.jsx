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
        {
          title: "7. jQuery",
          topics: [
            "jQuery Intro",
            "jQuery Syntax",
            "jQuery Selectors",
            "jQuery Effects: Hide/Show, Fade, Slide, Animate, stop(), Callback, Chaining",
            "jQuery Get & Set",
            "jQuery Add & Remove",
            "jQuery CSS Classes & css(), Dimensions",
            "jQuery Traversing: Ancestors, Descendants, Siblings, Filtering",
            "jQuery AJAX",
            "1 Template Website",
          ],
        },
        {
          title: "8. Angular 16",
          topics: [
            "Introduction to Angular 16",
            "Development Setup of Angular",
            "Components in Angular",
            "Data and Event Binding",
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
          title: "1. Core Java",
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
          title: "2. Advanced Java",
          topics: [
            "Java Database Connectivity (JDBC)",
            "Networking in Java",
            "Multithreading",
            "Servlets",
            "JSP (JavaServer Pages)",
            "Project on Window-based Application",
            "Project on Web-based Application",
          ],
        },
        {
          title: "3. Hibernate",
          topics: [
            "Introduction to Hibernate",
            "Hibernate Configuration",
            "Hibernate O-R Mapping",
            "Hibernate using XML & Annotations",
            "Hibernate Core Concepts",
            "Manipulating and Querying Data",
            "Collection Mapping",
            "HCQL (Hibernate Criteria Query Language)",
            "HQL (Hibernate Query Language)",
            "NamedQuery",
            "Integration with Spring",
            "Transaction and Concurrency Management",
          ],
        },
        {
          title: "4. Spring",
          topics: [
            "Introduction to Spring Framework",
            "Build System (Maven/Gradle)",
            "Project Code Structure",
            "Spring Beans",
            "Dependency Injection (DI)",
            "Inversion of Control (IoC)",
            "Spring Annotations",
            "Injectors and Configuration",
            "Maven Project Setup",
            "Cross-Platform Configuration and Management",
            "GIT Integration and Version Handling",
            "JAR Creation and Deployment",
            "SPRING-MVC Architecture",
            "Handler Mapping",
            "View Resolver",
            "Controller Classes",
            "Spring MVC Request Flow",
            "Annotation-Driven Controllers",
            "Form Processing in Spring MVC",
            "Autowiring",
            "Spring MVC CRUD Operations",
          ],
        },
        {
          title: "5. Spring Boot",
          topics: [
            "Spring Boot Introduction",
            "Spring Boot Annotations",
            "Configuration using Spring Boot (application.properties / YAML)",
            "Building REST APIs with Spring Boot",
            "CRUD Operations using REST API",
            "Testing APIs with Postman Tool",
            "Microservices Architecture using REST API",
            "Project: Spring Boot with Hibernate Integration",
            "Transaction Management",
            "Difference: Spring vs Spring Boot vs Spring MVC",
            "Spring Boot with CLI (Command Line Interface)",
            "Spring Boot Dependency Management",
            "Spring Boot Application Properties & Profiles",
            "Spring Boot AOP (Aspect-Oriented Programming)",
            "Spring Boot Caching (with Redis/Ehcache)",
          ],
        },
        {
          title: "6. SQL",
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
          title: "1. Task Scheduling System (DSA + Java)",
          topics: [
            "Built a priority-based task scheduler using Heaps and Priority Queues",
            "Implemented dynamic task insertion, deletion, and execution based on priority",
            "Used Min-Heap/Max-Heap to optimize scheduling efficiency (O(log n))",
            "Applied real-world scenario: Job scheduling in OS or task management app",
            "Tech Stack: Core Java, DSA, Console-based UI",
          ],
        },
        {
          title: "2. Full-Stack E-Commerce Web Application",
          topics: [
            "Developed a complete e-commerce platform with user authentication, product catalog, cart, and checkout",
            "Frontend: React, Bootstrap, HTML/CSS – Responsive & Interactive UI",
            "Backend: Spring Boot, Hibernate – REST APIs, JWT Authentication",
            "Database: MySQL – Normalized schema with relationships",
            "Deployment: Hosted frontend on Netlify, backend on Render",
          ],
        },
        {
          title: "3. Student Placement Management Portal",
          topics: [
            "Built a portal for colleges to manage student profiles, company drives, and placement records",
            "Features: Resume upload, eligibility filters, interview scheduling, result tracking",
            "Frontend: Angular 16 – Modular components, reactive forms",
            "Backend: Spring Boot + JPA, RESTful services",
            "Tools: Postman (API testing), Git/GitHub (version control), Figma (UI design)",
          ],
        },
      ],
    },
  ];
  const faqData = [
    {
      question: "Is Java full stack still in demand?",
      answer:
        "Yes, Java full-stack developers are in high demand due to their ability to build complete, scalable applications.",
    },
    {
      question: "Can I get a job by only learning Java?",
      answer:
        "Learning Java along with frontend technologies and frameworks significantly improves your job prospects.",
    },
    {
      question: "What is a Java full stack salary?",
      answer:
        "Salaries vary based on experience, but entry-level Java full-stack developers can expect competitive packages.",
    },
    {
      question: "Will I get hands-on experience with real-world projects?",
      answer:
        "Yes, the course includes multiple real-world full-stack projects with end-to-end implementation.",
    },
    {
      question: "How can I enroll in the course?",
      answer:
        "You can enroll by visiting the Orange ITech website or contacting the admissions team directly. Limited seats are available, so early registration is recommended.",
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
              Java Development <br />
              Career Training Program
            </h1>

            <p>
              Become a Java Full-Stack Developer with Orange ITech’s
              industry-oriented training, 100% placement assistance and
              real-world project experience.
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
                width="1017"
                height="572"
                src="https://www.youtube.com/embed/n5yTWebLSKM"
                title="Become a Java Full Stack Developer in 2025 – Master Frontend, Backend &amp; Deployment!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
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
                About the Full Stack Development Training Course
              </h2>

            <Col lg={6} md={6} className="about-content-col">
             

              <p>
                At Orange ITech, we offer a comprehensive and industry-relevant
                Java Full Stack Development Course designed to help learners
                build strong programming fundamentals and hands-on development
                expertise.
              </p>

              <p>
                Java is one of the most powerful and widely used object-oriented
                programming languages, dominating enterprise applications,
                banking systems, backend services, Android applications, and
                cloud-based platforms.
              </p>

              <p>
                Our Java Full Stack Development Training program covers both
                frontend and backend technologies, ensuring you become a
                complete, job-ready developer.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
    src={publicUrlFor("images/courses/javaImg.jpg")}
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
            Who Can Join Java Full Stack Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented Full Stack Java Development Training Course is
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
            Java Full Stack Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Java Full Stack development course syllabus is structured to
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
                Why Choose Orange ITech for Java Full Stack Development?
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
            Java Full Stack Development Course Fees & Duration
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
                Full Stack Java Development Training FAQs
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
            Career Opportunities After Java Full Stack Development Training
            Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

          {/* ROLE CARDS */}
          <Row className="gy-4 mt-4">
            <Col md={4}>
              <div className="career-card">
                <FaJava className="career-icon" />
                <span>Java Full Stack Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaCogs className="career-icon" />
                <span>Java Developer</span>
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
                <FaCode className="career-icon" />
                <span>Frontend Developer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaLaptopCode className="career-icon" />
                <span>Software Engineer</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="career-card">
                <FaGlobe className="career-icon" />
                <span>Web Application Developer</span>
              </div>
            </Col>
          </Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Java full-stack developers are in high demand across IT services,
            startups, product companies, fintech, and enterprise organizations.
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
                  <strong>Java Full-Stack Development</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Java Full-Stack Web Development. This industry-recognized
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
