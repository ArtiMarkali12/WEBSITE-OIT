import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";

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

export default function RDBMSPage() {
  const modules = [
    {
      title: "Introduction to RDBMS",
      children: [
        {
          title: "1. Introduction to RDBMS",
          topics: [
            "What is a database and why it’s essential",
            "DBMS vs RDBMS",
            "Pros and cons of DBMS/RDBMS systems",
            "Database models: Hierarchical, Network, Relational",
            "Key terminologies: Tables, Tuples, Attributes, Keys, Relationships",
          ],
        },
      ],
    },

    {
      title: "ER Modeling",
      children: [
        {
          title: "2. Entity-Relationship (ER) Modeling",
          topics: [
            "Understanding entities and attributes",
            "Entity sets and relationship sets",
            "Attribute types: Simple, Composite, Derived, Multivalued",
            "Primary, Foreign, Candidate, and Super Keys",
            "ER Diagrams and symbols",
            "Converting ER diagrams into relational tables",
            "Generalization, Specialization, Aggregation",
          ],
        },
      ],
    },

    {
      title: "Relational Model & Algebra",
      children: [
        {
          title: "3. Relational Model & Relational Algebra",
          topics: [
            "Introduction to the relational model and schemas",
            "Relational Algebra: Select",
            "Relational Algebra: Project",
            "Relational Algebra: Join",
            "Union, Intersection, Difference",
            "Cartesian Product",
            "Tuple Relational Calculus",
            "Domain Relational Calculus",
          ],
        },
      ],
    },

    {
      title: "SQL",
      children: [
        {
          title: "4. Structured Query Language (SQL)",
          topics: [
            "Introduction to SQL and its categories",
            "DDL: CREATE, ALTER, DROP",
            "DML: INSERT, UPDATE, DELETE",
            "DQL: SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
            "DCL: GRANT, REVOKE",
            "TCL: COMMIT, ROLLBACK, SAVEPOINT",
            "Joins: INNER, LEFT, RIGHT, FULL OUTER",
            "Subqueries and nested queries",
            "Views and materialized views",
            "Indexing for performance",
          ],
        },
      ],
    },

    {
      title: "Normalization & Data Design",
      children: [
        {
          title: "5. Normalization & Data Design",
          topics: [
            "Purpose and need for normalization",
            "Insertion, Deletion, Update anomalies",
            "Functional dependencies",
            "1NF, 2NF, 3NF, BCNF",
            "Advanced normal forms (4NF, 5NF)",
            "De-normalization strategies",
          ],
        },
      ],
    },

    {
      title: "Transaction Management",
      children: [
        {
          title: "6. Transaction Management & Concurrency Control",
          topics: [
            "Concept of transactions",
            "ACID properties",
            "Transaction states",
            "Concurrency control problems",
            "Lock-based protocols",
            "Deadlocks and deadlock handling",
            "Isolation levels",
          ],
        },
      ],
    },

    {
      title: "RDBMS Platforms",
      children: [
        {
          title: "7. RDBMS Platforms",
          topics: ["MySQL", "SQL Server", "Oracle", "PostgreSQL", "SQLite"],
        },
      ],
    },

    {
      title: "Database Security",
      children: [
        {
          title: "8. Database Security & Integrity",
          topics: [
            "Database security concepts",
            "User authentication and authorization",
            "Constraints: Primary Key, Foreign Key, Unique, Check",
            "Referential integrity",
            "Backup and recovery strategies",
          ],
        },
      ],
    },

    {
      title: "Tools & Platforms",
      children: [
        {
          title: "9. Tools & Platforms",
          topics: [
            "ER diagram design tools",
            "Schema design tools",
            "Database management GUIs",
            "Converting ER diagrams to tables using tools",
            "Modeling Generalization and Specialization",
          ],
        },
      ],
    },

    /* ================= APTITUDE ================= */

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
            "Cubes and Dice",
            "Seating Arrangements",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles",
            "Series and Analogy",
          ],
        },
      ],
    },

    /* ================= SOFT SKILLS ================= */

    {
      title: "Soft Skills",
      children: [
        {
          title: "Professional Foundation",
          topics: [
            "Professional mindset and workplace ethics",
            "Employability skills overview",
            "Competency matrix (Technical + Behavioral)",
          ],
        },
        {
          title: "Communication & Presentation",
          topics: [
            "Verbal and non-verbal communication",
            "Presentation skills",
            "Business emails and meetings",
          ],
        },
        {
          title: "Personal Development",
          topics: [
            "Attitude and motivation",
            "Emotional intelligence",
            "Leadership and teamwork",
          ],
        },
        {
          title: "Career Readiness",
          topics: [
            "Resume building",
            "Group discussion strategies",
            "Interview preparation (HR + Technical)",
            "Virtual interview etiquette",
          ],
        },
      ],
    },

    /* ================= PROJECTS ================= */

    {
      title: "Projects",
      children: [
        {
          title: "RDBMS Projects",
          topics: [
            "Database design using ER diagrams",
            "SQL-based mini project",
            "Normalization case study",
            "Transaction management simulation",
            "Database security implementation",
          ],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "What is DevOps?",
      answer:
        "DevOps is a set of practices that combines software development and IT operations to deliver applications faster and more reliably.",
    },
    {
      question: "Is DevOps suitable for beginners?",
      answer:
        "Yes, this course follows a beginner-to-advanced roadmap and is suitable for learners with basic IT knowledge.",
    },
    {
      question: "Which tools are covered in the DevOps course?",
      answer:
        "The course covers Git, Jenkins, Docker, Kubernetes, Terraform and Ansible basics, along with cloud concepts.",
    },
    {
      question: "Is DevOps a good career option?",
      answer:
        "Yes, DevOps is one of the most in-demand roles with excellent growth and salary opportunities.",
    },
    {
      question: "Do you provide placement support?",
      answer:
        "Yes, Orange ITech offers full placement assistance, mock interviews, and internship support.",
    },
    {
      question: "Is this course up to date with the latest DevOps trends?",
      answer:
        "Absolutely. The roadmap is crafted based on current industry demands and future trends, ensuring you stay ahead with relevant skills.",
    },
    {
      question: "Can I access the course content anytime?",
      answer:
        "Yes. Once enrolled, you get lifetime access to all modules, videos, and updates so you can learn at your own pace, anytime, anywhere.",
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
            <h1>Relational Database Management System (RDBMS) Course</h1>

            <p>
              Master SQL, database design, and data management with hands-on
              training and real-world projects.
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
              src={publicUrlFor("images/courses/RDBMS.jpg")}
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
                About the Relational database management System Course
              </h2>

              <p>
                The Relational Database Management System (RDBMS) course at
                Orange ITech is designed to build a strong foundation in
                database concepts, structure, and query optimization—essential
                skills in today’s data-driven world.
                <br />
             
                This course provides hands-on experience with popular database
                systems such as MySQL, Oracle, SQL Server, and PostgreSQL,
                helping you understand how real-world applications store,
                retrieve, and secure data efficiently.
              <br />
                With practical training, live projects, and 200+ hours of guided
                learning, you’ll gain the confidence to design, manage, and
                optimize relational databases used in modern software
                applications.
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
            Who Can Relational Database Management System Course?
          </h2>

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
            Relational Database Management System Course Curriculum Overview
          </h4>

          <p className="faq-subtitle">
            Our Relational Database Management System course syllabus is
            structured to cover end-to-end full-stack technologies with a strong
            emphasis on practical implementation and real-world projects.
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
                Why Choose Orange ITech for Relational Database Management
                System?
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
            Relational Database Management System Fees & Duration
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
                Relational Database Management System Training FAQs
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
                "Graphs (BFS, DFS)",
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
            Career Opportunities After Relational Database Management System
            Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
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
            Relational Database Management System are in high demand across IT
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
                  <strong>Relational Database Management System </strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Relational Database Management System. This
                  industry-recognized certification validates your skills and
                  helps you stand out in the competitive job market.
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
