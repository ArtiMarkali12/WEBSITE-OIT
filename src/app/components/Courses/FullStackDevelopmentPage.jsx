// src/pages/FullStackDevelopmentPage.jsx
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const FullStackDevelopmentPage = () => {
  const subCourses = [
    { title: "Java FullStack Development", link: "/courses/java-fullstack-development", desc: "Spring Boot, Hibernate, React" },
    { title: "PHP FullStack Development", link: "/courses/php-fullstack-development", desc: "Laravel, MySQL, Vue.js" },
    { title: "Python FullStack Development", link: "/courses/python-fullstack-development", desc: "Django, React, PostgreSQL" },
    { title: "DotNet FullStack Development", link: "/courses/dotnet-fullstack-development", desc: "C#, .NET Core, Angular" },
    { title: "MEAN Stack Development", link: "/courses/mean-stack-development", desc: "MongoDB, Express, Angular, Node.js" },
    { title: "MERN Stack Development", link: "/courses/mern-stack-development", desc: "MongoDB, Express, React, Node.js" }
  ];

  return (
    <Container style={{ padding: "50px 20px" }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px' }}>
        FullStack Development
      </h1>
      <Row className="g-4">
        {subCourses.map((course, index) => (
          <Col key={index} md={6} lg={4}>
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <Link to={course.link} style={{
                display: 'inline-block',
                backgroundColor: '#0775e3',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                textDecoration: 'none',
                marginTop: '10px'
              }}>
                View Details
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FullStackDevelopmentPage;