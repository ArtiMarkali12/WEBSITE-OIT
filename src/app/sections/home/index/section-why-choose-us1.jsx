import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import SectionVideo1 from "./section-video1";

function SectionWhyChooseUs1() {
  return (
    <>
      {/* INLINE CSS INSIDE JSX */}
      <style>{`
        /* ================= WHY CHOOSE US SECTION ================= */
        .hover-box {
          transition: all 0.4s ease;
          border-radius: 16px;
        }

        .hover-box:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 3px solid #b25906ff;
        }

        .sx-icon-bx-icon i {
          font-size: 42px;
          transition: transform 0.4s ease;
        }

        .hover-box:hover .sx-icon-bx-icon i {
          transform: rotateY(360deg);
        }

        @media (max-width: 768px) {
          .sx-icon-bx-1 {
            margin-bottom: 25px;
          }
        }
   
 .about-wrapper {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 50px;
}

/* Content box */
.about-content {
  max-width: 1100px;
  text-align: center;
}

/* Title */
.sx-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.7;
  color: #222;
  margin-bottom: 15px;
}

/* Description */
.sx-desc {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

/* Animation */
.animate-fade-up {
  animation: fadeUp 1.2s ease-in-out both;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
  .sx-title {
    font-size: 16px;
  }

  .sx-desc {
    font-size: 14px;
  }

  .about-content {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .about-wrapper {
    padding: 15px 10px;
  }

  .sx-title {
    font-size: 15px;
  }

  .sx-desc {
    font-size: 13.5px;
  }
}



        /* ================= ALUMNI SECTION ================= */

.alumni-section {
  padding: 80px 0;
  background: radial-gradient(circle at top, #7f5404ff, #000000ff);
  overflow: hidden;
}

.alumni-title {
  text-align: center;
  margin-bottom: 40px;
}

.alumni-title h3 {
  display: inline-block;
  background: #eef6ff;
  padding: 14px 30px;
  border-radius: 14px;
  font-size: 26px;
  font-weight: 700;
  color: #0b224a;
}

.alumni-title h3 span {
  color: #ff7a00;
}

/* Slider */
.alumni-slider {
  width: 100%;
  overflow: hidden;
}

.alumni-track {
  display: flex;
  gap: 28px;
  animation: scrollX 15s linear infinite;
}

/* Card */
.alumni-card {
  min-width: 220px;
  height: 120px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(255, 123, 0, 0.6);
  transition: all 0.4s ease;
}

.alumni-card img {
  max-width: 150px;
  max-height: 70px;
  object-fit: contain;
}

/* Hover */
.alumni-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 40px rgba(255, 123, 0, 0.9);
}

/* Animation */
@keyframes scrollX {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
  .alumni-card {
    min-width: 180px;
    height: 100px;
  }

  .alumni-title h3 {
    font-size: 20px;
    padding: 10px 22px;
  }
}

@media (max-width: 480px) {
  .alumni-card {
    min-width: 150px;
    height: 90px;
  }

  .alumni-card img {
    max-width: 120px;
  }
}


      `}</style>

      <div className="section-full p-t110 p-b80 sx-why-chooseus-outer  bg-cover">
        <div className="container">
          {/* TITLE */}
          <div className="section-head center">
            <div className="sx-head-s-title">Why Choose Us</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Why Orange Itech Institute</h2>
            </div>
          </div>
          
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row">
                {/* 1 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-programmer" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">IT & Software Training</h4>
                        <p>
                          Industry-focused courses in Web, Software & Full Stack
                          Development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-positive-review" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Expert Trainers</h4>
                        <p>
                          Learn from experienced professionals with real
                          industry exposure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-data" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">100% Practical Learning</h4>
                        <p>
                          Hands-on practice with real-time examples and live
                          coding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
                {/* 4 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-chart" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Live Projects</h4>
                        <p>Work on real projects to build strong portfolios.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-profit" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Placement Assistance</h4>
                        <p>
                          Interview preparation & placement support for
                          students.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="sx-icon-bx-1 hover-box">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-icon-bx-icon">
                        <span className="sx-text-primary">
                          <i className="flaticon-parking" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Career Guidance</h4>
                        <p>Complete mentorship and career roadmap support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="about-wrapper">
          <div className="about-content animate-fade-up">
            <h4 className="sx-title">
              Orange Itech Institute is a leading IT and professional training
              institute committed to delivering industry-oriented education
              aligned with global standards. We specialize in providing
              high-quality training for students, working professionals, and
              corporate clients, helping them build successful careers in
              today’s fast-evolving technology landscape.
            </h4>

            <p className="sx-desc">
              At Orange Itech Institute, our training programs are designed to
              meet current industry requirements as well as future technological
              trends. We focus on practical learning, real-world projects, and
              hands-on experience to ensure our learners are job-ready from day
              one.
            </p>
          </div>
        </div>
      </section>
      <br />
      <SectionVideo1 />
      <br />
      <section>
        <div className="alumni-section">
          <div className="container">
            <div className="alumni-title">
              <h3>
                Our Alumni <span>Works At</span>
              </h3>
            </div>

            <div className="alumni-slider">
              <div className="alumni-track">
                {[
                  "accenture.png",
                  "info.png",
                  "tcs.png",
                  "wipro.png",
                  "cognizant.png",
                  "amazon.png",
                  "dell.png",
                  "acer.png",
                  "knorex.png",
                  "maven.png",
                  "foxtech.png",
                ].map((logo, index) => (
                  <div className="alumni-card" key={index}>
                    <img
                      src={`/assets/images/about/alumni/${logo}`}
                      alt="Alumni Company"
                    />
                  </div>
                ))}

                {/* duplicate for smooth infinite scroll */}
                {[
                  "accenture.png",
                  "tcs.png",
                  "wipro.png",
                  "cognizant.png",
                  "amazon.png",
                  "dell.png",
                  "acer.png",
                ].map((logo, index) => (
                  <div className="alumni-card" key={`dup-${index}`}>
                    <img
                      src={`/assets/images/about/alumni/${logo}`}
                      alt="Alumni Company"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionWhyChooseUs1;
