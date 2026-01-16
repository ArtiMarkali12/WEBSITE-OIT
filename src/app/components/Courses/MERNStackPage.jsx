import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

import {
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
// import SocialButtons from "./SocialButtons";

export default function MERNStackPage() {
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
        {
          title: "8. jQuery",
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
          title: "9. React.js",
          topics: [
            "Introduction to React.js",
            "Core Concepts of React",
            "How does React work?",
            "Introduction to JSX",
            "React Hooks",
            "React Forms and Validations",
            "React Router (Navigation in React)",
            "State Management in React",
            "Working with APIs in React",
            "Performance Optimization in React",
            "React UI Libraries and Styling",
            "Component Life-Cycle",
            "Render() method – Behind the Scenes",
            "Component Lifecycle – Creation",
            "Component Lifecycle – Updation",
            "shouldComponentUpdate() Lifecycle Method",
          ],
        },
        {
          title: "10. Version Control System",
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
      ],
    },

    {
      title: "Backend Development",
      children: [
        {
          title: "1. Node.js",
          topics: [
            "Introduction to Node.js and Setup",
            "Modules and NPM",
            "Core Modules in Node.js",
            "File System Operations",
            "Creating a server with HTTP",
            "Middleware",
            "Asynchronous Programming in Node.js",
            "Working with Databases",
          ],
        },
        {
          title: "2. Express.js",
          topics: [
            "Introduction & Setup of Express.js",
            "Express.js Fundamentals",
            "Working with Templates & Views",
            "Handling Forms and Requests",
            "Database Integration",
            "Authentication & Authorization",
            "REST API Development",
            "File Uploads and Handling",
            "Web Sockets and Real-time Communication",
          ],
        },
        {
          title: "3. MongoDB",
          topics: [
            "Introduction to MongoDB",
            "MongoDB Basics",
            "CRUD Operations in MongoDB",
            "Database Integration",
            "Querying and Filtering Data",
            "Indexing in MongoDB",
            "Aggregation Framework",
            "Relationships in MongoDB",
            "MongoDB with Node.js",
            "MongoDB Cloud",
          ],
        },
        {
          title: "4. SQL",
          topics: [
            "Microsoft SQL Server installation",
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
            "Types: Simple Queue, Circular Queue, Priority Queue, Deque",
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
            "Comparison of Sorting Algorithms",
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
            "Inspecting Responses: Status Codes, Headers, Body",
            "Setting Up Authorization",
            "Environment & Global Variables",
            "Automating API Tests",
            "Generating Documentation",
          ],
        },
        {
          title: "2. Git Version Control System",
          topics: [
            "Introduction to Version Control",
            "Basic Git Commands",
            "Remote Repositories",
            "Branching Strategy",
            "Resolving Merge Conflicts",
            "Git Best Practices",
          ],
        },
        {
          title: "3. GitHub Cloud-based Repository",
          topics: [
            "Hosting Git Repositories",
            "Creating Public & Private Repositories",
            "Pull Requests & Code Reviews",
            "Issue Tracking",
            "GitHub Wikis & Releases",
            "GitHub Desktop & CLI",
          ],
        },
        {
          title: "4. Deployment Tools & Project Deployment",
          topics: [
            "Deployment Workflow",
            "Frontend Deployment",
            "Backend Deployment",
            "Environment Variables",
            "CI/CD Basics",
            "Domain Mapping & SSL",
          ],
        },
        {
          title: "5. Figma UI/UX Design",
          topics: [
            "Introduction to Figma",
            "UI/UX Fundamentals",
            "Interactive Prototypes",
            "Auto-Layout & Constraints",
            "Collaboration Features",
            "Developer Handoff",
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
            "Setting the Right Tone",
            "Be Employable Mindset",
            "Competency Matrix",
          ],
        },
        {
          title: "2. Communication & Presentation",
          topics: [
            "Verbal & Non-Verbal Communication",
            "Presentation Skills",
            "Business Communication",
          ],
        },
        {
          title: "3. Personal Development",
          topics: [
            "Attitude & Motivation",
            "Emotional Intelligence",
            "Leadership & Team Collaboration",
          ],
        },
        {
          title: "4. Career Readiness",
          topics: [
            "ATS-Friendly Resume",
            "Group Discussion",
            "Mock GD",
            "Personal Interview",
            "Virtual Interview",
          ],
        },
        {
          title: "5. Future Planning",
          topics: ["Industry Know-how", "Career Roadmap & Certifications"],
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
      question: "What is MERN stack development?",
      answer:
        "MERN stack development is a full stack web development approach using MongoDB, Express.js, React, and Node.js to build fast, scalable, and modern web applications using JavaScript.",
    },
    {
      question: "Is MERN Stack dead?",
      answer:
        "No, MERN stack is not dead. It is widely used by startups and tech companies due to its flexibility, strong community support, and ability to build high-performance web applications.",
    },
    {
      question: "Is MERN backend or frontend?",
      answer:
        "MERN is a full stack technology. React is used for frontend development, while Node.js and Express.js handle backend logic, and MongoDB manages the database.",
    },
    {
      question: "Can I learn MERN stack in 1 month?",
      answer:
        "You can learn the basics of MERN stack in one month, but becoming job-ready requires consistent practice, hands-on projects, and structured training over a longer period.",
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
            <h1>MERN Stack Development Career Program</h1>

            <p>
              Master MongoDB, Express.js, React, and Node.js to build scalable,
              high-performance web applications and become a job-ready full
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
                width="550"
                height="310"
                src="https://www.youtube.com/embed/nYQzUhmTpWA"
                title="Become a MERN Full Stack Developer | Complete Roadmap &amp; Technologies"
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
                Become a Job-Ready MERN Stack Developer
              </h2>
            <Col lg={6} md={6} className="about-content-col">
             
              <p>
                The MERN Stack Development Course at Orange ITech is designed
                for learners who want to master modern full stack web
                development using MongoDB, Express.js, React, and Node.js. This
                powerful JavaScript-based stack is widely used by top tech
                companies to build fast, scalable, and high-performance web
                applications.
              </p>
              <p>
                From fundamentals to advanced concepts, this course helps you
                develop complete full-stack applications using a single
                programming language—JavaScript.
              </p>
              <h4>
                What Is the MERN Stack Development Course at Orange ITech?
              </h4>
              you will learn how to:
              <ul>
                <li>Build interactive user interfaces with React</li>
                <li>Develop secure backend APIs using Node.js & Express.js</li>
                <li>Manage databases using MongoDB</li>
                <li>Create end-to-end full stack applications</li>
              </ul>
              <p></p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/MERN.jpg")}
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
            Who Can Join the MERN Stack Development Career Training Program?
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
          <h4 className="mean-title">
            What You Will Learn in MERN Stack <br />Development Course
          </h4>

          <p className="faq-subtitle">
            Our MERN Stack development course syllabus is structured to cover
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
                Why Choose Orange ITech for MERN Stack Development?
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
            MERN Stack Development Course Fees & Duration
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
              <h2 className="about-title">MERN Stack development FAQs</h2>
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
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git & GitHUB",
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
            Career Opportunities After MERN Stack Course
          </h2>

          <p className="career-subtitle text-center">
            After completing the MERN Stack Development Course, you can apply
            for roles such as:
          </p>

          {/* ROLE CARDS */}
         <Row className="gy-4 mt-4">
  <Col md={4}>
    <div className="career-card">
      <FaLayerGroup className="career-icon" />
      <span>MERN Stack Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaLaptopCode className="career-icon" />
      <span>Full Stack JavaScript Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaCode className="career-icon" />
      <span>Frontend Developer (React)</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaServer className="career-icon" />
      <span>Backend Developer (Node.js)</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaCogs className="career-icon" />
      <span>Web Application Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaGlobe className="career-icon" />
      <span>Web Developer</span>
    </div>
  </Col>
</Row>


          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            MERN Stack professionals are in high demand across startups, IT
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
                  <strong>MERN Stack Development </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in MERN Stack Web Development. This industry-recognized
                  certificate validates your skills and makes you stand out in
                  the job market.
                  <br />
                  <h5>This certification:</h5>
                  <ul>
                    <li>Validates your full stack development skills</li>
                    <li>
                      Enhances your resume and credibility
                      <br />
                    </li>
                    <li>
                      Helps you stand out in job interviews
                      <br />
                    </li>
                    <li>Improves career growth opportunities</li>
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
