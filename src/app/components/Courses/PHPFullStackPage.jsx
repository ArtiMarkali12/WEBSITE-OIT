import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import {
  FaPhp ,
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

export default function PHPFullStackPage() {
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
          title: "7. Advance JavaScript Syllabus",
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
      ],
    },

    {
      title: "Backend Development",
      children: [
        {
          title: "1. PHP",
          topics: [
            "Basic of PHP",
            "Feature of PHP",
            "Control Statement",
            "Functions",
            "Arrays",
            "Strings",
            "Exception Handling",
            "Class & Object",
            "Inheritance",
            "Interface & Abstraction",
            "Polymorphism",
            "File",
            "Working With Forms",
            "Regular Expression",
            "PHP Filter",
            "PHP JSON",
            "Session",
            "Cookie",
            "XML",
            "AJAX",
            "Database connectivity",
            "2 Web based application",
          ],
        },
        {
          title: "2. Laravel Framework",
          topics: [
            "Introduction to Laravel PHP Framework",
            "Html Template to Laravel Blade Template",
            "Migrations",
            "Using Forms & Gathering Input",
            "Creating a Registration & User login Form",
            "Admin Panel Setup",
            "Using Controllers & Routes For URLs & APIs",
            "Eloquent ORM (storing & using data)",
            "Using Ajax & jQuery",
            "Security & Session",
            "Project on Web based Application using Laravel",
          ],
        },
        {
          title: "3. CodeIgniter",
          topics: [
            "CodeIgniter OOP",
            "Model-View-Controller",
            "Modifying Controller/View",
            "CodeIgniter at a glance",
            "Initial Configuration",
            "CodeIgniter Configuration",
            "CodeIgniter Libraries",
            "CodeIgniter Helpers",
            "Creating Models, View & Controllers",
            "Creating a Rudimentary Admin Framework",
            "Importing And Exporting",
            "Creating Page Manager",
            "Security",
            "Project on Web based Application",
          ],
        },
        {
          title: "4. SQL",
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
            "Sorting Linked Lists (Merge Sort)",
          ],
        },
        {
          title: "4. Stacks",
          topics: [
            "Introduction to Stacks (LIFO Principle)",
            "Stack Operations: Push, Pop, Peek",
            "Expression Evaluation",
            "Balanced Parentheses Check",
          ],
        },
        {
          title: "5. Queues",
          topics: [
            "Introduction to Queues (FIFO Principle)",
            "Simple, Circular & Priority Queue",
            "Enqueue, Dequeue & Peek",
            "CPU Job Scheduling",
          ],
        },
        {
          title: "6. Recursion",
          topics: [
            "Factorial",
            "Fibonacci",
            "Tower of Hanoi",
            "Recursion vs Iteration",
          ],
        },
        {
          title: "7. Sorting Algorithms",
          topics: [
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
            "Radix Sort",
            "Counting Sort",
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
          topics: ["Apply heaps & priority queues for task scheduling"],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "Is PHP full stack still in demand?",
      answer:
        "Yes, PHP full-stack developers are in demand due to PHP’s widespread use in web applications, CMS platforms, and enterprise solutions.",
    },
    {
      question: "Can I get a job by only learning PHP?",
      answer:
        "Learning PHP along with frontend technologies significantly improves your job opportunities in web development.",
    },
    {
      question: "What is a PHP full stack salary?",
      answer:
        "Salaries vary based on skills and experience, but entry-level PHP full-stack developers can expect competitive packages.",
    },
    {
      question: "Will I get hands-on experience with real-world projects?",
      answer:
        "Yes, the course includes multiple real-world PHP full-stack projects with end-to-end implementation.",
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
            <h1>PHP Full Stack Development Course</h1>

            <p>
              Become a PHP Full-Stack Developer with Orange ITech’s
              industry-oriented training, placement assistance, and real-world
              project experience.
            </p>

            <div className="hero-buttons">
              <NavLink
                             to="/contact-us"
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
                width="1569"
                height="883"
                src="https://www.youtube.com/embed/jgodvximHvU"
                title="🚀 Become a PHP Full Stack Developer &amp; Build Dynamic Web Applications! 💻✨"
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
                About the PHP Full Stack Development Training Course
              </h2>

            <Col lg={6} md={6} className="about-content-col">
              
              <p>
                Are you ready to build powerful, dynamic websites and modern web
                applications? The PHP Full Stack Development Course at Orange
                ITech is designed to transform beginners into job-ready
                full-stack developers through structured, hands-on learning.
              </p>

              <p>
                The course begins with strong frontend fundamentals, including
                HTML, CSS, and JavaScript, helping you create responsive and
                user-friendly interfaces. You then progress to backend
                development using PHP and the Laravel framework, where you learn
                to build secure, scalable, and high-performance web
                applications.
              </p>

              <p>
                Throughout the training, you will gain practical experience with
                MySQL databases, API integration, version control using Git, and
                real-world deployment strategies. By the end of the course, you
                will have built and deployed multiple real-world projects,
                giving you the confidence and skills needed to succeed as a
                professional PHP full-stack developer.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/Php.jpg")}
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
            Who Can Join PHP Full Stack Development Course?
          </h2>

          <p className="who-subtitle">
            Our Job Oriented PHP Full Stack Development Training Course is
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
            PHP Full Stack Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our PHP full stack development course syllabus is structured to
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
                Why Choose Orange ITech for PHP Full Stack Development?
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
            PHP Full Stack Development Course Fees & Duration
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
                PHP Full Stack Development Training FAQs
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
                "PHP (Core PHP)",
                "Advanced PHP",
                "HTML, CSS, JavaScript",
                "MySQL",
                "Laravel Framework",
                "CodeIgniter",
                "REST APIs",
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
            Career Opportunities After PHP Full Stack Development Training
            Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

         {/* ROLE CARDS */}
<Row className="gy-4 mt-4">
  <Col md={4}>
    <div className="career-card">
      <FaPhp className="career-icon" />
      <span>PHP Full Stack Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaPhp className="career-icon" />
      <span>PHP Developer</span>
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
      <span>Web Developer</span>
    </div>
  </Col>

  <Col md={4}>
    <div className="career-card">
      <FaGlobe className="career-icon" />
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
                  <strong>PHP Full-Stack Development</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in PHP Full-Stack Web Development. This industry-recognized
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
          <NavLink to="/contact-us" className="btn btn-primary cta-btn">
          Book Free Demo
        </NavLink>
      </section>
    </div>
  );
}
