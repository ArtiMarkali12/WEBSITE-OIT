import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials2 from "./section-testimonials2";

export function SectionWhyChooseUs2Inner() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-media">
                        <div className="sx-ab4-img-outer">
                            <div className="sx-ab4-media">
                                <ItodoImage src="images/about/p3.jpg" alt="media" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-content">
                        <h3 className="sx-title " >Why Choose Us to Join  Our Institute?</h3>
                        <p style={{fontSize:"18px"}}>Orange ITech is a professional IT training institute dedicated to shaping skilled and industry-ready professionals. We focus on delivering practical, hands-on learning that helps students and working professionals build strong technical foundations and real-world expertise.</p>
                        <p style={{fontSize:"18px"}}> At Orange ITech, we believe that quality education combined with industry exposure is the key to a successful career in information technology. Our courses are designed by experienced IT professionals and are regularly updated to match current industry trends and job market requirements.</p>
                        <ul className="sx-arrow-circle-checked">
                           
                        </ul>
                        <NavLink to="/SectionWhyChooseUs1" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa  fa-long-arrow-right" />
                            View All
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

function SectionWhyChooseUs2() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx4-content-wrap p-b70">
                            <SectionWhyChooseUs2Inner />
                        </div>
                        {/*testimonial section */}
                        <SectionTestimonials2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWhyChooseUs2;