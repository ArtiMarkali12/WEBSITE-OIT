import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";
import SectionCounter1 from "./section-counter1";



function SectionAboutCompany1() {
  return (
    <>
    <style>
      {
        `
/* ONLY big image zoom animation */
.sx-ab-img-section-2 {
  height: 400px;
  border-radius: 22px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  animation: slowZoom 10s ease-in-out infinite;
}

.sx-about-bx1-content{
  height: 350px;
  border-radius: 22px;
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  animation: slowZoom 20s ease-in-out infinite;
}

/* Smooth zoom in-out */
@keyframes slowZoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

/* Mobile adjust */
@media (max-width: 768px) {
  .sx-ab-img-section-1 {
    height: 280px;
    animation: slowZoom 12s ease-in-out infinite;
  }
}

`
      }
    </style>

      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    {/* <div className="sx-dot-bx"><ItodoImage src="images/about/dotted-pic.png" alt="" /></div> */}
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-1-wrap">
                        <div className="sx-ab-video">
                          <a
                            href="https://www.youtube.com/watch?v=-c2FPxLAVKA"
                            className="mfp-video circle"
                          >
                            <i className="flaticon-play" />
                          </a>
                      
                        </div>
                        <div
                          className="sx-ab-img-section-1"
                          style={{
                            backgroundImage: `url(https://orangeitech.in/wp-content/uploads/2025/04/mission-bridge-the-gap-community-support-768x768.jpg.webp)`,
                          }}
                        />
                      </div>
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title " style={{ marginTop: "80px" ,color :"rgba(12, 29, 88, 1)"}}>
                      Our Mission
                    </h2>
                    {/* <span className="sx-title-2">Nullam vel ligula lorem. Phasellus neque Etiam nequeretium.</span> */}
                    <p style={{ fontSize: "18px" }}>
                      At Orange ITech, our mission is to empower individuals
                      with industry-ready IT skills that open doors to career
                      growth and digital opportunities. We aim to bridge the gap
                      between theoretical education and real-world application
                      by offering practical, hands-on training in the most
                      in-demand technologies. Whether you’re a student,
                      job-seeker, or working professional, we are committed to
                      helping you learn, grow, and succeed in the digital
                      age—with the right skills, guidance, and mindset.our
                      vision
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar sx-bg-primary"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>100% Students Placement</span>
                      </div>
                    </div>
                    {/* <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Proin lobortis mauris vel dui egestas,non laoreet duolei hendrerit.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Fusce maximus turpis in magna cursus, vehicula bibendum sem placerat.</p>
                                            </div>
                                        </div> */}
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title ">
                              IT INSTITUTE
                            </span>
                            <span className="sx-icon-bx-title-info">
                              Make A IT Students
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Consultant
                            </span>
                            {/* <span className="sx-icon-bx-title-info">04 Project</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-1-wrap">
                        <div
                          className="sx-ab-img-section-1"
                          style={{
                            backgroundImage: `url(http://localhost:3000/assets/images/about/image.png)`,
                          }}
                        />
                      </div>
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/image.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title mt-5 " style={{color:"rgba(12, 29, 88, 1)"}}>Our Vision</h2>
                    {/* <span className="sx-title-2">Nullam vel ligula lorem. Phasellus neque Etiam nequeretium.</span> */}
                    <p style={{ fontSize: "18px" }}>
                      At Orange ITech, our vision is to become a trusted leader
                      in delivering innovative and future-ready digital
                      solutions that empower businesses to grow, scale, and
                      succeed. We aim to bridge the gap between technology and
                      business needs by offering smart, scalable, and
                      sustainable IT services. Our focus is on creating
                      meaningful impact through continuous innovation,
                      client-centric strategies, and a commitment to excellence
                      in everything we do.
                    </p>
                    {/* <div className="progress">
                                            <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '100%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>100% Students Placement</span></div>
                                        </div> */}
                    {/* <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Proin lobortis mauris vel dui egestas,non laoreet duolei hendrerit.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Fusce maximus turpis in magna cursus, vehicula bibendum sem placerat.</p>
                                            </div>
                                        </div> */}
                    <div className="row sx-about-icon-bx1-column">
                      {/* <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-mouse" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title ">IT INSTITUTE</span>
                                                        <span className="sx-icon-bx-title-info">Make A IT Students</span>
                                                    </div>
                                                </div>
                                            </div> */}
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          {/* <div className="sx-media">
                                                        <i className="flaticon-download" />
                                                    </div> */}
                          <div className="sx-icon-bx-info">
                            {/* <span className="sx-icon-bx-title">IT Consultant</span> */}
                            {/* <span className="sx-icon-bx-title-info">04 Project</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-1-wrap">
                        {/* <div className="sx-ab-video">
                                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div> */}
                        <div
                          className="sx-ab-img-section-1"
                          style={{
                            backgroundImage: `url(https://orangeitech.in/wp-content/uploads/2025/04/company-values-teamwork-ambition-to-action-768x768.jpg.webp)`,
                          }}
                        />
                      </div>
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/img2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h3
                      className="sx-title  "
                      style={{ color: "rgba(12, 29, 88, 1)"  }}
                    >
                      How we are transforming Ambition
                    </h3>

                    <p style={{ fontSize: "18px" }}>
                      At Orange ITech, we’re more than just a training institute
                      — we’re a launchpad for future tech professionals. We
                      specialize in teaching in-demand IT skills like web
                      development, digital marketing, software testing, and
                      more. Our mission is to equip students and professionals
                      with the practical knowledge, tools, and confidence they
                      need to succeed in today’s digital world. Backed by
                      experienced mentors and real-world projects, we help you
                      go from learning to earning — the smart way.
                    </p>
                   
                    <div className="row sx-about-icon-bx1-column">
                     
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          
                          <div className="sx-icon-bx-info">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COUNTER START */}
            <SectionCounter1 />
            {/* COUNTER  END */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany1;