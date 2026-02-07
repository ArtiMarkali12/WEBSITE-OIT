import { NavLink, useLocation } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState, useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import "../../sections/common/header2.css";

function Header2() {
  const [isActive, setIsActive] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const toggleNavClass = () => setIsActive(!isActive);

  useEffect(() => {
    loadScript("js/mobilenav.js");
  }, []);

  useEffect(() => {
    setIsCoursesOpen(false);
    setIsActive(false);
  }, [location.pathname]);


useEffect(() => {
  if (isActive) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  // cleanup (important)
  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [isActive]);












  return (
    /* ✅ FIX 1: removed navbar-collapse from header */
    // <header className={`header-nav ${isActive ? "active" : ""}`}>
    <header
  className={`header-nav ${isActive ? "active" : ""}`}
  onClick={(e) => {
    if (
      window.innerWidth <= 992 &&
      e.target === e.currentTarget   // 👈 IMPORTANT
    ) {
      setIsActive(false);
    }
  }}
>


      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix" style={{display:"flex"}}>
            {/* LOGO */}
            <div className="logo-header d-flex justify-content-between align-items-center">
              <NavLink to="/index2">
                <ItodoImage src="images/courses/logo.png" alt="Logo" />
              </NavLink>
              {/* MOBILE TOGGLE */}
              {/* <button className="navbar-toggler" onClick={toggleNavClass}> */}
              <button
  className="navbar-toggler"
  onClick={(e) => {
    e.stopPropagation(); // 👈 MUST
    toggleNavClass();
  }}
>

                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            {/* ✅ FIX 2: cleaned navbar-collapse */}
            {/* <div className="navbar-collapse"> */}
            <div
  className="navbar-collapse"
  onClick={(e) => e.stopPropagation()}   // 🔒 stop bubbling
>

              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                {/* ✅ FIX 3: add open class */}
                <li className={`nav-item ${isCoursesOpen ? "open" : ""}`}>
                  <NavLink
                    to="/courses"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCoursesOpen((prev) => !prev);
                    }}
                  >
                    Courses
                  </NavLink>

                  {isCoursesOpen && (


                        <ul className="sub-menu courses-dropdown" >
                      {/* Column 1 */}
                      <li>
                        <div className="dropdown-column">
                          <NavLink
                            to="/courses/fullstack-development"
                            className="category-header"
                          >
                            FullStack Development
                          </NavLink>
                          <NavLink to="/courses/java-fullstack-development">
                            Java FullStack Development
                          </NavLink>
                          <NavLink to="/courses/php-fullstack-development">
                            PHP FullStack Development
                          </NavLink>
                          <NavLink to="/courses/python-fullstack-development">
                            Python FullStack Development
                          </NavLink>
                          <NavLink to="/courses/dotnet-fullstack-development">
                            .NET FullStack Development
                          </NavLink>
                          <NavLink to="/courses/mean-fullstack-development">
                            MEAN Stack Development
                          </NavLink>
                          <NavLink to="/courses/mern-fullstack-development">
                            MERN Stack Development
                          </NavLink>
                        </div>
                      </li>

                      {/* Column 2 */}
                      <li>
                        <div className="dropdown-column">
                          <NavLink
                            to="/courses/frontend-development"
                            className="category-header"
                          >
                            Frontend Development
                          </NavLink>
                          <NavLink to="/courses/angular-development">
                            Angular Development
                          </NavLink>
                          <NavLink to="/courses/reactjs-development">
                            React.js Development
                          </NavLink>
                        </div>
                      </li>

                      {/* Column 3 */}
                      <li>
                        <div className="dropdown-column">
                          <NavLink
                            to="/courses/mobile-application"
                            className="category-header"
                          >
                            Mobile Application
                          </NavLink>
                          <NavLink to="/courses/android-development">
                            Android Development
                          </NavLink>
                          <NavLink to="/courses/flutter-development">
                            Flutter Development
                          </NavLink>
                        </div>
                      </li>

                      {/* Column 4 */}
                      <li>
                        <div className="dropdown-column">
                          <NavLink
                            to="/courses/basic-courses"
                            className="category-header"
                          >
                            Basic Courses
                          </NavLink>
                          <NavLink to="/courses/c-programming-course">
                            C Programming{" "}
                          </NavLink>
                          <NavLink to="/courses/core-java-course">
                            Core Java
                          </NavLink>
                          <NavLink to="/courses/advance-java-course">
                            Advance Java
                          </NavLink>
                          <NavLink to="/courses/data-structure-algorithms">
                            DSA
                          </NavLink>
                          <NavLink to="/courses/rdbms-course">RDBMS</NavLink>
                        </div>
                      </li>

                      {/* Column 5 */}
                      <li>
                        <div className="dropdown-column">
                          <NavLink
                            to="/courses/other-specialized-courses"
                            className="category-header"
                          >
                            Other Specialized Courses
                          </NavLink>
                          <NavLink to="/courses/data-science-ai">
                            Data Science & AI
                          </NavLink>
                          <NavLink to="/courses/devops">DevOps</NavLink>
                          <NavLink to="/courses/cybersecurity">
                            Cyber Security
                          </NavLink>
                          <NavLink to="/courses/salesforce-testing">
                            Salesforce Testing
                          </NavLink>
                          <NavLink to="/courses/digital-marketing-course">
                            Digital Marketing
                          </NavLink>
                          <NavLink to="/courses/ui-ux-developer">
                            UI / UX
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="/placement">Placement</NavLink>
                </li>

                <li className="nav-cta">
                  <NavLink to="/contact-us" className="enquire-btn">
                    Enquiry Now
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header2;
