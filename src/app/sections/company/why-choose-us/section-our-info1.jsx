import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo1() {
  return (
    <>
      <div className="sx-mv-bx1-content-wrap">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="sx-about-bx1-content">
              <h3 className="fw-bold">
                <h1 className="fw-bold " style={{ color: "orangered" }}>
                  ORANGE ITECH -
                </h1>
                Way To Success.
              </h3>
              <p className="fs-6">
                Orange ITech has established itself as a leader in training and
                consulting since its inception in 2012, empowering individuals
                and organizations worldwide to achieve their professional goals.
                Committed to delivering excellence, we provide world-class
                classroom and online training programs tailored to meet diverse
                learning needs. Our innovative approach combines
                industry-relevant content with hands-on experience, ensuring our
                students and professionals stay ahead in competitive fields.{" "}
              </p>
              <div className="mt-2 fs-6">
                <p>
                  We are also a leading IT support company, delivering
                  end-to-end technology solutions to clients across the United
                  States. Our expert teams provide support across various
                  platforms, ensuring seamless operations and innovation.
                  Moreover, Orange ITech offers HR services for both domestic
                  and global clients, including talent acquisition, staffing
                  solutions, and strategic workforce management—positioning us
                  as a comprehensive partner in both technology and human
                  capital development.
                </p>
              </div>

             
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="sx-mv-bx1-media">
              <div className="sx-dot-bx-right">
               
              </div>
              <div className="sx-mv-img-outer">
                <div className="sx-mv-img-section-2">
                  <ItodoImage src="images/about/p1-1.jpg" alt="image" />
                </div>
                <div className="sx-mv-img-section-1-wrap">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOurInfo1;