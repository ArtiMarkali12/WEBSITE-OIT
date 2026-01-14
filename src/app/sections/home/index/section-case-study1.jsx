import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials1 from "./section-testimonials1";

function SectionCaseStudy1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown"
        data-wow-duration="1000ms"
      >
        <div className="container">
          {/*Large Title*/}
          <div className="large-title-block">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* TITLE START */}
                <div className="section-head left">
                  <div className="sx-head-s-title">Our Case Study</div>
                  <div className="sx-head-l-title">
                    <h2 className="sx-title">
                      Our Itodo IT Solution Special Case Studies.
                    </h2>
                  </div>
                </div>
                {/* TITLE END */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className=" large-title-info">
                  <p>
                    Nunc tempor ultrices iaculis. Cras suscipit odio ut neque
                    interdum, sed faucibus lorem feugiat. tincidunt tellus quis
                    iaculis interdum. Donec a lobortis arcu. Fusce viverra a
                    dolor quis tincidunt. Pellentesque vitae diam sodales nisl
                    dapibus finibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="owl-carousel sx-case-st-carousel">
              {/*One block*/}
              <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-1.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Apps Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        IT Solution Business Mokup land
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/*One two*/}
              <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-2.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Branding Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        Visit Our planned modern farm
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/*One three*/}
              <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-1.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Apps Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        IT Solution Business Mokup land
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/*One four*/}
              <div className="item">
                <div className="sx-case-study-bx sx-overlay-effect">
                  <div className="sx-case-media sx-img-overlay">
                    <NavLink to="/portfolio/detail">
                      <ItodoImage src="images/case-study/pic-2.jpg" alt="" />
                    </NavLink>
                    <NavLink to="/portfolio/detail" className="sx-case-link">
                      <i className="flaticon-up-right-arrow" />
                    </NavLink>
                  </div>
                  <div className="sx-case-info">
                    <div className="sx-s-title">Branding Design</div>
                    <NavLink className="sx-l-title" to="/portfolio/detail">
                      <h2 className="sx-title">
                        Visit Our planned modern farm
                      </h2>
                    </NavLink>
                    <div className="sx-case-readmore">
                      <NavLink
                        to="/portfolio/detail"
                        title="READ MORE"
                        rel="bookmark"
                        className="site-button icon"
                      >
                        <i className="fa  fa-long-arrow-right" />
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*testimonial section */}
            <SectionTestimonials1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCaseStudy1;
