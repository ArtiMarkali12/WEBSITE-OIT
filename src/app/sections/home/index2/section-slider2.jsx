import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import { useState, useEffect } from "react";
import { DiPython, DiJava, DiPhp, DiDotnet, DiAndroid } from "react-icons/di";
import {
  SiFlutter,
  SiSelenium,
  SiMongodb,
  SiDeviantart,
  SiFigma,
  SiExpress,
  SiGoogleads,
  SiSalesforce,
  SiKalilinux,
  SiDatabricks
} from "react-icons/si";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import "./SectionSlider2.css";

register();

const publicUrlFor = (path) => process.env.PUBLIC_URL + "/" + path;
const homepage = publicUrlFor("assets/images/homep/homepage.jpg");
const API = process.env.REACT_APP_API_BASE_URL;
const DEFAULT_DOMAIN = process.env.REACT_APP_DOMAIN;

function SectionSlider2() {
  const [mode, setMode] = useState("online");
  const [batches, setBatches] = useState([]);
  const [loadingBatches, setLoadingBatches] = useState(true);
  const [batchError, setBatchError] = useState("");

  /* ===== BATCH CARD ANIMATION ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show-card");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".course-card-hidden")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ===== FETCH BATCHES ===== */
  useEffect(() => {
    const fetchBatches = async () => {
      setLoadingBatches(true);
      try {
        const res = await fetch(`${API}/api/batches`, {
          headers: { "x-domain": DEFAULT_DOMAIN },
        });
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setBatches(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setBatchError("Failed to load batches");
      } finally {
        setLoadingBatches(false);
      }
    };

    fetchBatches();
  }, []);

  /* ===== COURSES DATA ===== */
  const courses = [
    {
      name: "Python FullStack",
      icon: <DiPython size={50} color="#3776AB" />,
      desc: "Our Python Fullstack Course contains Fundamentals of Python, Frontend Technologies, and Django Framework.",
      path: "/courses/python-fullstack-development",
    },
    {
      name: "Java FullStack",
      icon: <DiJava size={50} color="#007396" />,
      desc: "This Java Fullstack Course includes Core Java, JDBC, JSP/Servlet, Spring Framework.",
      path: "/courses/java-fullstack-development",
    },
    {
      name: "PHP FullStack",
      icon: <DiPhp size={50} color="#777BB4" />,
      desc: "Learn PHP Fullstack with MySQL, Laravel Framework, and frontend technologies.",
      path: "/courses/php-fullstack-development",
    },
    {
      name: "Flutter Development",
      icon: <SiFlutter size={45} color="#02569B" />,
      desc: "Build cross-platform mobile apps using Flutter and Dart.",
      path: "/courses/flutter-development",
    },
    {
      name: "Software Testing",
      icon: <SiSelenium size={45} color="#43B02A" />,
      desc: "Learn manual and automation testing with Selenium.",
      path: "/courses/software-testing",
    },
    {
      name: "Data Science",
      icon: <SiDatabricks size={45} color="#E25A1E" />,
      desc: "Gain hands-on experience in Python, Pandas, ML Algorithms, and Visualization using tools like Tableau.",
      path: "/courses/data-science-ai",
    },
    {
      name: "Digital Marketing",
      icon: <SiGoogleads size={45} color="#4285F4" />,
      desc: "This course includes SEO, SEM, Social Media Marketing, Analytics, and Tools like Canva & Google Ads.",
      path: "/courses/digital-marketing-course",
    },
    {
      name: "Salesforce",
      icon: <SiSalesforce size={45} color="#00A1E0" />,
      desc: "Learn CRM development and automation with Salesforce Admin and Apex programming.",
      path: "/courses/salesforce-testing",
    },
    {
      name: "Cyber Security",
      icon: <SiKalilinux size={45} color="#557C94" />,
      desc: "Understand ethical hacking, network security, and penetration testing with practicals.",
      path: "/courses/cybersecurity",
    },
    {
      name: ".NET FullStack",
      icon: <DiDotnet size={50} color="#512BD4" />,
      desc: "Our .NET Fullstack Course covers C#, ASP.NET MVC, SQL Server, and Frontend Tools like HTML, CSS & JS.",
      path: "/courses/dotnet-fullstack-development",
    },
    {
      name: "MERN Stack",
      icon: (
        <div style={{ display: "flex", gap: "4px" }}>
          <SiMongodb size={22} />
          <SiExpress size={22} />
          <FaReact size={22} />
          <FaNodeJs size={22} />
        </div>
      ),
      desc: "MongoDB, Express, React, Node fullstack development.",
      path: "/courses/mern-fullstack-development",
    },
    {
      name: "MEAN Stack",
      icon: <FaAngular size={45} color="#DD0031" />,
      desc: "This course offers MEAN Stack development using MongoDB, Express.js, Angular, and Node.js for robust web apps.",
      path: "/courses/mean-fullstack-development",
    },
    {
      name: "DevOps",
      icon: <SiDeviantart size={45} color="#000" />,
      desc: "Understand DevOps lifecycle using Jenkins, Docker, Kubernetes, Git, and CI/CD tools.",
      path: "/courses/devops",
    },
    {
      name: "UI/UX",
      icon: <SiFigma size={45} color="#F24E1E" />,
      desc: "Learn the fundamentals of UI/UX with tools like Figma and Adobe XD, focusing on user-centered design and usability.",
      path: "/courses/ui-ux-developer",
    },
    {
      name: "React.js",
      icon: <FaReact size={45} color="#61DAFB" />,
      desc: "Dive into React.js to build interactive UIs with JSX, Hooks, Routing, and real-time project integration.",
      path: "/courses/reactjs-development",
    },
    {
      name: "Android (Kotlin, Java)",
      icon: <DiAndroid size={45} color="#3DDC84" />,
      desc: "Learn Android development using Kotlin, covering UI design, SQLite, and Firebase integration.",
      path: "/courses/android-development",
    },
    {
      name: "Angular",
      icon: <FaAngular size={45} color="#DD0031" />,
      desc: "Learn Angular from basics to services and modules to build structured and scalable single-page applications.",
      path: "/courses/angular-development",
    },
    {
      name: "ASP.NET",
      icon: <DiDotnet size={45} color="#512BD4" />,
      desc: "Our .NET Fullstack Course covers C#, ASP.NET MVC, SQL Server, and Frontend Tools like HTML, CSS & JS.",
      path: "/courses/dotnet-fullstack-development",
    },
    {
      name: "C Programming",
      icon: <DiDotnet size={45} color="#FF5733" />,
      desc: "Learn C Programming from basics to advanced concepts including pointers, arrays, and memory management.",
      path: "/courses/c-programming-course",
    },
    {
      name: "Advance Java",
      icon: <DiJava size={45} color="#007396" />,
      desc: "Advance Java course covers multithreading, collections, JDBC, and Spring Boot for enterprise applications.",
      path: "/courses/advance-java-course",
    },
  ];

  const thStyle = {
    padding: "14px",
    textAlign: "left",
    fontSize: "17px",
    fontWeight: "700",
  };
  const tdStyle = {
    padding: "14px",
    fontSize: "16px",
    color: "#333",
    verticalAlign: "top",
    fontWeight: "700",
  };

  return (
    <>
      {/* HERO SLIDER */}
      <div className="sx-bnr-2-wrap-outer home-2-slider">
        <swiper-container loop="false">
          <swiper-slide
            style={{
              backgroundImage: `url(${homepage})`,
              height: "450px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                zIndex: 1,
              }}
            />
            <div
              className="container h-100"
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="main-content-container">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "18px",
                    paddingTop: "10px",
                    marginBottom: "100px",
                    textAlign: "center",
                  }}
                >
                  BEST IT TRAINING & PLACEMENT INSTITUTE IN PUNE
                </h3>
                <h1
                  style={{
                    color: "#FFB400",
                    fontSize: "42px",
                    fontWeight: "bold",
                    paddingBottom: "110px",
                    marginBottom: "20px",
                    textAlign: "center",
                    position: "relative",
                    top: "-90px",
                  }}
                >
                  ORANGE ITECH
                </h1>
                <h2
                  className="text-white"
                  style={{
                    position: "relative",
                    top: "-150px",
                    textAlign: "center",
                    fontSize: "2rem",
                    lineHeight: "1.4",
                    marginBottom: "1px",
                  }}
                >
                  Build Job-Ready IT Skills with Expert Training & Guaranteed
                  Career Support
                </h2>
                <NavLink
                  to="/contact-us"
                  className="orange-btn"
                  style={{ marginBottom: "30px" }}
                >
                  Book a Free Career Counseling Session
                </NavLink>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      {/* ===== BATCHES TABLE ===== */}
      <div
        className="batches-section"
        style={{ padding: "60px 20px", backgroundColor: "#f7f7f7" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "700",
          }}
        >
          OUR UPCOMING BATCHES STARTED FROM
        </h2>

        {/* LOADER */}
        {loadingBatches && (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Loading batches...</p>
          </div>
        )}

        {batchError && (
          <p style={{ textAlign: "center", color: "red" }}>{batchError}</p>
        )}
        {!loadingBatches && batches.length === 0 && (
          <p style={{ textAlign: "center" }}>No batches found</p>
        )}

        {/* BATCHES TABLE */}
        {!loadingBatches && batches.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                maxWidth: "1100px",
                margin: "0 auto",
                borderCollapse: "collapse",
                background: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              <thead style={{ background: "#FFB400", color: "#000" }}>
                <tr>
                  <th style={thStyle}>Course</th>
                  <th style={thStyle}>Batch Title</th>
                  <th style={thStyle}>Description</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Time</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((batch, index) => (
                  <tr
                    key={batch._id}
                    style={{
                      background: index % 2 === 0 ? "#fafafa" : "#fff",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f0f0f0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        index % 2 === 0 ? "#fafafa" : "#fff")
                    }
                  >
                    {/* <td style={tdStyle}>{batch.course}</td>
                    <td style={tdStyle}>{batch.subHeading}</td>
                    <td style={tdStyle}>{batch.description}</td>
                    <td style={tdStyle}>{batch.date || "-"}</td>
                    <td style={tdStyle}>{batch.time || "-"}</td>
                    <td style={tdStyle}> */}

                    <td data-label="Course" style={tdStyle}>
                      {batch.course}
                    </td>
                    <td data-label="Batch" style={tdStyle}>
                      {batch.subHeading}
                    </td>
                    <td data-label="Description" style={tdStyle}>
                      {batch.description}
                    </td>
                    <td data-label="Date" style={tdStyle}>
                      {batch.date || "-"}
                    </td>
                    <td data-label="Time" style={tdStyle}>
                      {batch.time || "-"}
                    </td>
                    <td data-label="Action" style={tdStyle}>
                      <NavLink
                        to="/contact-us"
                        className="orange-btn"
                        style={{
                          padding: "1px 3px",
                          fontSize: "12px",
                          borderRadius: "16px",
                          backgroundColor: "#FFB400",
                          color: "#000",
                          fontWeight: "700",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#e6a200";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#FFB400";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        Enquiry
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ===== COURSES GRID ===== */}
      <div className="course-section -m-10">
        <h2 className="course-title text-center -mt-10">
          INDUSTRY-FOCUSED IT COURSES IN PUNE
        </h2>
        <h4 className="text-center whitespace-nowrap text-xl flex items-center justify-center">
          We provide a wide range of job-oriented IT courses to match different
          career goals.
        </h4>
        <h2 className="text-center mt-8">EXPLORE OUR COURSES</h2>

        <div className="mode-toggle-container mt-6">
          <div className="toggle-box">
            <button
              className={`toggle-btn ${mode === "online" ? "active" : ""}`}
              onClick={() => setMode("online")}
            >
              Online
            </button>
            <button
              className={`toggle-btn ${mode === "offline" ? "active" : ""}`}
              onClick={() => setMode("offline")}
            >
              Offline
            </button>
          </div>
        </div>

        <div className="courses-grid">
          {courses.map((course, i) => (
            <div key={i} className="course-card course-card-hidden">
              <div className="icon-box">{course.icon}</div>
              <h4>{course.name}</h4>
              <p>{course.desc}</p>
              <div className="card-buttons">
                <NavLink to="/contact-us" className="btn-enroll">
                  Enroll Now
                </NavLink>
                <NavLink to={course.path} className="btn-explore">
                  Explore Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionSlider2;
