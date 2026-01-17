import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import {
  FaLayerGroup,
  FaPuzzlePiece,
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

export default function DSAPage() {
  const modules = [
    {
      title: "Data Structures & Algorithms",
      children: [
        {
          title: "1. Introduction to Data Structures",
          topics: [
            "What is a Data Structure and why it matters",
            "Understanding data types and their role in memory",
            "Mathematical model behind data structures",
            "Need for efficient data organization",
            "Real-world examples and use cases",
          ],
        },
      ],
    },

    {
      title: "algorithm",
      children: [
        {
          title: "Algorithms",
          topics: [
            "What is an algorithm?",
            "Writing structured and optimized algorithms",
            "Steps to design algorithms",
            "Measuring time and space complexity",
            "Big O notation and performance comparison",
          ],
        },
      ],
    },

    {
      title: "Lists and Arrays",
      children: [
        {
          title: "Lists and Arrays",
          topics: [
            "What is a list and why it is used",
            "Sequential lists (arrays)",
            "Static vs dynamic arrays",
            "Operations on arrays",
            "Time complexity of list operations",
          ],
        },
      ],
    },

    {
      title: "Linked Lists",
      children: [
        {
          title: "4. Linked Lists",
          topics: [
            "Concept and structure of linked lists",
            "Singly linked list: traversal, insertion, deletion",
            "Doubly linked list and bidirectional traversal",
            "Circular linked list",
            "Comparison of linked lists with arrays",
          ],
        },
      ],
    },

    {
      title: "Stacks",
      children: [
        {
          title: "Stacks",
          topics: [
            "Introduction to stacks",
            "Applications of stacks",
            "Sequential stack implementation",
            "Linked stack implementation",
            "Double stack",
            "Expression evaluation and recursion",
          ],
        },
      ],
    },

    {
      title: "Trees and Binary Search Trees (BST)",
      children: [
        {
          title: "Trees and Binary Search Trees (BST)",
          topics: [
            "Introduction to trees and types",
            "Binary Tree concepts",
            "Binary Search Tree (BST)",
            "Tree traversals: Inorder, Preorder, Postorder",
            "Breadth First Search (BFS)",
            "Depth First Search (DFS)",
            "Insertion, deletion, and time complexity",
            "BST implementation using arrays",
          ],
        },
      ],
    },

    {
      title: "Threaded BST & AVL Trees",
      children: [
        {
          title: "Threaded BST & AVL Trees",
          topics: [
            "Threaded Binary Search Trees",
            "Advantages of threaded BST",
            "AVL Trees and balancing concept",
            "Rotations in AVL Trees",
            "Performance comparison with BST",
          ],
        },
      ],
    },

    {
      title: "Advanced Trees",
      children: [
        {
          title: "Advanced Trees",
          topics: [
            "Red Black Trees",
            "B Tree",
            "B+ Tree",
            "Applications in databases and file systems",
            "Time and space trade-offs",
          ],
        },
      ],
    },

    {
      title: "Queues",
      children: [
        {
          title: "Queues",
          topics: [
            "Introduction to queues",
            "Types of queues",
            "Circular queue",
            "Priority queue",
            "Applications of queues",
          ],
        },
      ],
    },

    {
      title: "Graphs and Graph Algorithms",
      children: [
        {
          title: "Graphs and Graph Algorithms",
          topics: [
            "Introduction to graphs",
            "Graph representations",
            "Breadth First Search (BFS)",
            "Depth First Search (DFS)",
            "Applications of graphs",
          ],
        },
      ],
    },

    {
      title: "Hash Tables",
      children: [
        {
          title: "Hash Tables",
          topics: [
            "Introduction to hashing",
            "Hash functions",
            "Collision handling techniques",
            "Hash tables implementation",
            "Applications of hash tables",
          ],
        },
      ],
    },

    {
      title: "Expression Conversion and Evaluation",
      children: [
        {
          title: "Expression Conversion and Evaluation",
          topics: [
            "Infix, Prefix, and Postfix expressions",
            "Conversion techniques",
            "Expression evaluation using stacks",
            "Applications in compilers",
          ],
        },
      ],
    },

    {
      title: "Searching Algorithms",
      children: [
        {
          title: "Searching Algorithms",
          topics: [
            "Linear search",
            "Binary search",
            "Performance comparison",
            "Use cases of searching algorithms",
          ],
        },
      ],
    },

    {
      title: "Sorting Algorithms",
      children: [
        {
          title: "Sorting Algorithms",
          topics: [
            "Bubble sort",
            "Selection sort",
            "Insertion sort",
            "Merge sort",
            "Quick sort",
            "Comparison of sorting algorithms",
          ],
        },
      ],
    },

    {
      title: "Time and Space Complexity",
      children: [
        {
          title: "Time and Space Complexity",
          topics: [
            "Time complexity analysis",
            "Space complexity analysis",
            "Big O notation",
            "Omega and Theta notation",
            "Real-world performance insights",
          ],
        },
      ],
    },

    {
      title: "Aptitude",
      children: [
        {
          title: "Quantitative Aptitude",
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
          title: "Logical Reasoning",
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
          title: "Professional Foundation",
          topics: [
            "Setting the Right Tone for Professional Growth",
            "Be Employable Mindset",
            "Competency Matrix (Technical + Behavioral Skills)",
          ],
        },
        {
          title: "Communication & Presentation",
          topics: [
            "Effective Verbal and Non-Verbal Communication",
            "Presentation Skills",
            "Business Communication",
          ],
        },
        {
          title: "Personal Development",
          topics: [
            "Attitude, Motivation, and Growth Mindset",
            "Emotional Intelligence",
            "Leadership and Team Collaboration",
          ],
        },
        {
          title: "Career Readiness",
          topics: [
            "ATS-Friendly Resume",
            "Group Discussion Strategies",
            "Mock Interviews",
            "Virtual Interview Best Practices",
          ],
        },
        {
          title: "Future Planning",
          topics: ["Industry Know-how", "Career Roadmap & Certifications"],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "Projects",
          topics: ["Apply heaps & priority queues for task scheduling"],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is Data Structures and Algorithms (DSA)?",
      answer:
        "Data Structures and Algorithms (DSA) is the study of organizing data efficiently and designing algorithms to solve problems in an optimized way.",
    },
    {
      question: "Is a DSA course necessary for placements?",
      answer:
        "Yes, DSA is a key requirement for technical interviews and coding tests in most IT companies.",
    },
    {
      question: "Do I need prior programming knowledge for this course?",
      answer:
        "Basic programming knowledge is helpful, but beginners can also learn DSA with guided training.",
    },
    {
      question: "Which language is used to teach a DSA course?",
      answer:
        "DSA concepts can be taught using programming languages like C, C++, Java, or Python, depending on the curriculum.",
    },
    {
      question: "Will this course help in cracking coding interviews?",
      answer:
        "Yes, the course is interview-focused and includes problem-solving practice, mock tests, and real-world examples.",
    },
    {
      question: "What is the duration of the DSA course at Orange ITech?",
      answer:
        "The Data Structures and Algorithms course at Orange ITech spans 2 months, with over 200 hours of hands-on training, live projects, and practical implementation. Classes are available in both online and offline modes.",
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
            <h1>Data Structures and Algorithms (DSA) Course</h1>

            <p>
              Build strong programming logic, master problem-solving, and crack
              coding interviews with confidence.
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
            <img
                            src={publicUrlFor("images/courses/DSAH.jpg")}
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
                About the Data Structures and Algorithms Course
              </h2>

              <p>
                The Data Structures and Algorithms (DSA) course at Orange ITech
                is designed to help you develop a rock-solid foundation in
                programming logic, problem-solving, and efficient coding—the
                core skills every successful software developer must have.
              </p>

              <p>
                This course takes you deep into algorithmic thinking and data
                organization, helping you understand how programs store, manage,
                and process data behind the scenes. Whether you are preparing
                for placements, competitive coding, or higher-level development
                roles, DSA is a must-have skill.
              </p>

              <p>
                With hands-on training, real-world problem solving, and live
                examples, you’ll learn how to write optimized code using the
                right data structures and algorithms for maximum performance.
              </p>
            </div>

            {/* RIGHT IMAGE */}
          </Row>
        </Container>
      </section>

      <section className="who-can-join-section">
        <Container>
          {/* HEADING */}
          <h2 className="who-title">Who Can DevOps Course?</h2>

          <p className="who-subtitle">
            Our Job Oriented Data Structures and Algorithms Training Course is
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
          <h4 className="mean-title">
            Data Structures and Algorithms Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Data Structures and Algorithms course syllabus is structured to
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
                Why Choose Orange ITech for Data Structures and Algorithms?
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
          <h2 className="fee-title">
            Data Structures and Algorithms Fees & Duration
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
                Data Structures and Algorithms Training FAQs
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
                "Programming with Java / C++ / Python",
                "Time & Space Complexity (Big-O Notation)",
                "Arrays and Strings",
                "Recursion and Backtracking",
                "Linked Lists",
                "Stacks and Queues",
                "Hashing (HashMap, HashSet)",
                "Trees (Binary Tree, BST)",
                "Heaps and Priority Queues",
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
            Career Opportunities After Data Structures and Algorithms Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

       <Row className="gy-4 mt-4">
  {/* Software Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaCode className="career-icon" />
      <span>Software Developer</span>
    </div>
  </Col>

  {/* Backend Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaServer className="career-icon" />
      <span>Backend Developer</span>
    </div>
  </Col>

  {/* Full-Stack Developer */}
  <Col md={4}>
    <div className="career-card">
      <FaLayerGroup className="career-icon" />
      <span>Full-Stack Developer</span>
    </div>
  </Col>

  {/* Product Engineer */}
  <Col md={4}>
    <div className="career-card">
      <FaCogs className="career-icon" />
      <span>Product Engineer</span>
    </div>
  </Col>

  {/* Competitive Programmer */}
  <Col md={4}>
    <div className="career-card">
      <FaLaptopCode className="career-icon" />
      <span>Competitive Programmer</span>
    </div>
  </Col>

  {/* Problem Solving Techniques */}
  <Col md={4}>
    <div className="career-card">
      <FaPuzzlePiece className="career-icon" />
      <span>Problem Solving Techniques</span>
    </div>
  </Col>
</Row>
          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Data Structures and Algorithms are in high demand across IT
            services, startups, product companies, fintech, and enterprise
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
                  <strong>Data Structures and Algorithms </strong>
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
           <NavLink to="/contact-us" className="btn btn-primary cta-btn">
          Book Free Demo
        </NavLink>
      </section>
    </div>
  );
}
