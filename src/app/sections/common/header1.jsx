import { NavLink } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState, useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import "../../sections/common/header2.css";
import { useLocation } from "react-router-dom";

function Header1() {
  const [isActive, setIsActive] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  const toggleNavClass = () => setIsActive(!isActive);

  useEffect(() => {
    loadScript("js/mobilenav.js");
  }, []);

  useEffect(() => {
    setIsCoursesOpen(false); // close courses dropdown
    setIsActive(false); // close mobile navbar
  }, [location.pathname]);

  return (
    <header
      className={`header-nav navbar-collapse d-flex justify-content-center ${
        isActive ? "active" : ""
      }`}
    >
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix">
            {/* LOGO */}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <NavLink to="/index2">
                  <ItodoImage src="images/courses/logo.png" alt="Logo" />
                </NavLink>
              </div>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              id="mobile-side-drawer"
              className="navbar-toggler collapsed"
              onClick={toggleNavClass}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>

            {/* MAIN NAV */}
            <div className="header-nav navbar-collapse collapse d-flex justify-content-center">
              <ul className="nav navbar-nav">
                {/* HOME */}
                <li>
                  <NavLink to="/index2">Home</NavLink>
                  {/* <ul className="sub-menu"> */}
                  {/* <li>
                      <Nav
                      Link to="/index">Home-1</Nav>
                    </li> */}
                  {/* <li>
                      <NavLink to="/index2">Home-1</NavLink>
                    </li> */}
                  {/* <li>
                      <NavLink to="/index3">Home-3</NavLink>
                    </li> */}
                  {/* </ul> */}
                </li>
                {/* COURSES */}
                <li
                  className="nav-item"
                  onMouseLeave={() => setIsCoursesOpen(false)} // Optional: close on mouse leave
                >
                  <NavLink
                    to="/courses"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCoursesOpen((prev) => !prev);
                    }}
                  >
                    Courses
                  </NavLink>
                  {isCoursesOpen && (
                    <ul className="sub-menu courses-dropdown">
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
                {/* COMPANY */}
                <li>
                  <NavLink to="/about-us">About Us </NavLink>
                </li>
                {/* BLOG */}
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                {/* CONTACT */}
                {/* Career */}
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

export default Header1;
