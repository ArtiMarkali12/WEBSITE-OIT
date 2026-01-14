// // src/pages/CoursePage.jsx
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom'; // 👈 Add this
// import "bootstrap/dist/css/bootstrap.min.css";

// const createSlug = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// };

// const courseTitles = [
//   "FullStack Development",
//   "Frontend Development",
//   "Mobile Application",
//   "Basic Courses",
//   "Data Science & AI",
//   "Devops",
//   "JavaScript Beginners Course",
//   "CyberSecurity",
//   "SalesForce Development",
//   "Software Testing",
//   "Digital Marketing Course",
//   "UI/UX Developer"
// ];

// const CoursePage = () => {
//   const navigate = useNavigate(); // 👈 Add this

//   const courses = courseTitles.map((title, index) => ({
//     id: index + 1,
//     title,
//     slug: `/courses/${createSlug(title)}`,
//     image: "public/images/php.jpg"
//   },
// {
//   id: index + 2,
//     title,
//     slug: `/courses/${createSlug(title)}`,
//     image: "public/images/fullstack.jpg" 
// }));

//   // 👇 Handle navigation without reload
//   const handleCourseClick = (slug) => {
//     navigate(slug);
//   };

//   return (
//     <Container fluid style={{ padding: "40px 15px", backgroundColor: "#f9f9f9" }}>
//       <h1 style={{ fontSize: "2.2rem", fontWeight: "700", color: "#2c3e50", textAlign: "center", marginBottom: "15px" }}>
//         Our Popular Courses
//       </h1>
//       <p style={{ fontSize: "1.1rem", color: "#7f8c8d", textAlign: "center", marginBottom: "30px", fontStyle: "italic" }}>
//         Start your journey with the right course today!
//       </p>

//       <Row className="g-4 justify-content-center">
//         {courses.map((course) => (
//           <Col key={course.id} md={4} sm={6} xs={12}>
//             <div
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "10px",
//                 boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
//                 overflow: "hidden",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 cursor: "pointer" // 👈 Add cursor pointer
//               }}
//               onClick={() => handleCourseClick(course.slug)} // 👈 Updated
//             >
//               <div style={{ height: "160px", overflow: "hidden" }}>
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.4s ease",
//                   }}
//                   onMouseEnter={(e) => e.target.style.transform = "scale(1.08)"}
//                   onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//                 />
//               </div>

//               <div style={{ padding: "15px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
//                 <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#2c3e50", marginBottom: "10px" }}>
//                   {course.title}
//                 </h3>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // 👈 Prevent parent click
//                     handleCourseClick(course.slug);
//                   }}
//                   style={{
//                     backgroundColor: "#0775e3",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "25px",
//                     padding: "8px 16px",
//                     fontSize: "13px",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     transition: "background-color 0.3s ease",
//                     marginTop: "auto",
//                     alignSelf: "flex-start",
//                   }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = "#191232"}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = "#0775e3"}
//                 >
//                   Explore More
//                 </button>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CoursePage;

// // src/pages/CoursePage.jsx
// import React, { useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";

// const CoursePage = () => {
//   const navigate = useNavigate();

//   // Animation on page load
//   useEffect(() => {
//     const cards = document.querySelectorAll('.course-card');
//     cards.forEach((card, index) => {
//       card.style.opacity = "0";
//       card.style.transform = "translateY(20px)";
//       setTimeout(() => {
//         card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//         card.style.opacity = "1";
//         card.style.transform = "translateY(0)";
//       }, 200 + index * 100);
//     });
//   }, []);

//   const courses = [
//     { id: 1, title: "FullStack Development", slug: "/courses/fullstack-development", image: "public/images/fullstack.jpg"  },
//     { id: 2, title: "Frontend Development", slug: "/courses/frontend-development", image: "/images/frontend.jpg" },
//     { id: 3, title: "Mobile Application", slug: "/courses/mobile-application", image: "/images/mobile.jpg" },
//     { id: 4, title: "Basic Courses", slug: "/courses/basic-courses", image: "/images/basic.jpg" },
//     { id: 5, title: "Data Science & AI", slug: "/courses/data-science-ai", image: "/images/datascience.jpg" },
//     { id: 6, title: "Devops", slug: "/courses/devops", image: "/images/devops.jpg" },
//     { id: 7, title: "JavaScript Beginners Course", slug: "/courses/javascript-beginners-course", image: "/images/javascript.jpg" },
//     { id: 8, title: "CyberSecurity", slug: "/courses/cybersecurity", image: "/images/cybersecurity.jpg" },
//     { id: 9, title: "SalesForce Development", slug: "/courses/salesforce-development", image: "/images/salesforce.jpg" },
//     { id: 10, title: "Software Testing", slug: "/courses/software-testing", image: "/images/testing.jpg" },
//     { id: 11, title: "Digital Marketing Course", slug: "/courses/digital-marketing-course", image: "/images/digital-marketing.jpg" },
//     { id: 12, title: "UI/UX Developer", slug: "/courses/ui-ux-developer", image: "/images/ui-ux.jpg" }
//   ];

//   const handleCourseClick = (slug) => {
//     navigate(slug);
//   };

//   return (
//     <Container fluid style={{ padding: "50px 15px", backgroundColor: "#f8f9fa" }}>
//       <h1
//         className="animate__animated animate__fadeInDown"
//         style={{
//           fontSize: "2.4rem",
//           fontWeight: "800",
//           color: "#2c3e50",
//           textAlign: "center",
//           marginBottom: "20px",
//         }}
//       >
//         Our Popular Courses
//       </h1>
//       <p
//         style={{
//           fontSize: "1.15rem",
//           color: "#7f8c8d",
//           textAlign: "center",
//           marginBottom: "40px",
//           fontStyle: "italic",
//         }}
//       >
//         Start your journey with the right course today!
//       </p>

//       <Row className="g-4 justify-content-center">
//         {courses.map((course) => (
//           <Col key={course.id} md={4} sm={6} xs={12}>
//             <div
//               className="course-card"
//               style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
//                 overflow: "hidden",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//               onClick={() => handleCourseClick(course.slug)}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.02)";
//                 e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
//               }}
//             >
//               {/* Image */}
//               <div style={{ height: "170px", overflow: "hidden" }}>
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.5s ease",
//                   }}
//                   onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
//                   onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//                 />
//               </div>

//               {/* Content */}
//               <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
//                 <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#2c3e50", marginBottom: "12px" }}>
//                   {course.title}
//                 </h3>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleCourseClick(course.slug);
//                   }}
//                   style={{
//                     backgroundColor: "#432a57ff",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "30px",
//                     padding: "10px 24px",
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     marginTop: "auto",
//                     alignSelf: "flex-start",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.backgroundColor = "#49e7ffff";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.backgroundColor = "#432a57ff";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   Explore More
//                 </button>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CoursePage;

// src/pages/CoursePage.jsx
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const CoursePage = () => {
  const navigate = useNavigate();

  // Animation on page load
  useEffect(() => {
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(15px)";
      setTimeout(() => {
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 150 + index * 80);
    });
  }, []);

  const courses = [
    {
      id: 1,
      title: "FullStack Development",
      slug: "/courses/fullstack-development",
      image: "/public/images/fullstack.jpg",
      description: "Build complete web apps with frontend & backend technologies."
    },
    {
      id: 2,
      title: "Frontend Development",
      slug: "/courses/frontend-development",
      image: "/images/frontend.jpg",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React."
    },
    {
      id: 3,
      title: "Mobile Application",
      slug: "/courses/mobile-application",
      image: "/images/mobile.jpg",
      description: "Develop cross-platform apps using React Native or Flutter."
    },
    {
      id: 4,
      title: "Basic Courses",
      slug: "/courses/basic-courses",
      image: "/images/basic.jpg",
      description: "Start your coding journey with fundamentals of programming."
    },
    {
      id: 5,
      title: "Data Science & AI",
      slug: "/courses/data-science-ai",
      image: "/images/datascience.jpg",
      description: "Learn Python, machine learning, and data analysis."
    },
    {
      id: 6,
      title: "Devops",
      slug: "/courses/devops",
      image: "/images/devops.jpg",
      description: "Automate deployment with Docker, Kubernetes, and CI/CD pipelines."
    },
    {
      id: 7,
      title: "JavaScript Beginners Course",
      slug: "/courses/javascript-beginners-course",
      image: "/images/javascript.jpg",
      description: "Learn core JavaScript concepts from scratch."
    },
    {
      id: 8,
      title: "CyberSecurity",
      slug: "/courses/cybersecurity",
      image: "/images/cybersecurity.jpg",
      description: "Protect systems with ethical hacking and security protocols."
    },
    {
      id: 9,
      title: "SalesForce Development",
      slug: "/courses/salesforce-development",
      image: "/images/salesforce.jpg",
      description: "Customize CRM solutions with Apex and Lightning components."
    },
    {
      id: 10,
      title: "Software Testing",
      slug: "/courses/software-testing",
      image: "/images/testing.jpg",
      description: "Ensure quality with manual and automated testing techniques."
    },
    {
      id: 11,
      title: "Digital Marketing Course",
      slug: "/courses/digital-marketing-course",
      image: "/images/digital-marketing.jpg",
      description: "Master SEO, social media, and online advertising strategies."
    },
    {
      id: 12,
      title: "UI/UX Developer",
      slug: "/courses/ui-ux-developer",
      image: "/images/ui-ux.jpg",
      description: "Design intuitive user experiences with Figma and prototyping."
    }
  ];

  const handleCourseClick = (slug) => {
    navigate(slug);
  };

  return (
    <Container fluid style={{ padding: "40px 15px", backgroundColor: "#f8f9fa" }}>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "800",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Our Popular Courses
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#7f8c8d",
          textAlign: "center",
          marginBottom: "35px",
          fontStyle: "italic",
        }}
      >
        Start your journey with the right course today!
      </p>

      <Row className="g-5 justify-content-center">
        {courses.map((course) => (
          <Col key={course.id} md={4} sm={6} xs={12} style={{ padding: "0 3px" }}>
            <div
              className="course-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                maxWidth: "400px", // 👈 कार्ड लहान केले
                margin: "0 auto", // सेंटर केले
              }}
              onClick={() => handleCourseClick(course.slug)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.015)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div style={{ height: "170px", overflow: "hidden" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onError={(e) => e.target.style.display = 'none'} // इमेज नसेल तर लपवा
                />
              </div>

              {/* Content */}
              <div style={{ padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#2c3e50", marginBottom: "8px" }}>
                  {course.title}
                </h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "12px",
                  flexGrow: 1
                }}>
                  {course.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(course.slug);
                  }}
                  style={{
                    backgroundColor: "#432a57",
                    color: "white",
                    border: "none",
                    borderRadius: "25px",
                    padding: "8px 20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    marginTop: "auto",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#49e7ff";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.color = "#2c3e50";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#432a57";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.color = "white";
                  }}
                >
                  Explore More
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursePage;