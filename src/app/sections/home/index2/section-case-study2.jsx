import React from "react";
import "./contact.css";
import PhotoGallery from "./PhotoGallery";

function SectionCaseStudy2() {
    return (
        <div className="contact-social-section sx-bg-white">
            <div className="container">
                
                <h2 className="follow-us-title text-center">Follow Us !</h2>

                <div className="social-icons-wrap text-center">
                    <div className="social-icon-grid">
                        
                        {/* Facebook - fa-facebook-f vapra transparent sathi */}
                        {/* <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-card fb">
                            <i className="fa fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>

                        <a href="https://www.instagram.com/orangeitech?igsh=emxtczZiaHQ0Y2cy" target="_blank" rel="noopener noreferrer" className="social-card insta">
                            <i className="fa fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                
                        <a href="https://www.linkedin.com/company/orange-itech-intstitue/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
                            <i className="fa fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://youtube.com/@orangeitech?si=QxZy6KHC9PdkHHo-" target="_blank" rel="noopener noreferrer" className="social-card youtube">
                            <i className="fa fa-youtube-play"></i>
                            <span>YouTube</span>
                        </a>
                         */}
                        {/* <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
                            <i className="fa fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a> */}
                    </div>
                </div>

                <div className="contact-content-block text-center">
                    <h2 className="bold-black-title m-b20">
                        Start Your IT Career with Orange ITech Today
                    </h2>
                    <p className="m-b30">
                        If you’re looking for a trusted IT training institute in Pune with placement, Orange ITech is your ideal learning partner.

                    </p>
                    <div className="sx-bnr-readmore">
                        <a href="/contact-us" className="site-button sx-btn-primary icon sx-btn-lg mb-5">
                            <i className="fa fa-long-arrow-right" />
                            Contact Us Today
                        </a>
                    </div>
                    
                </div>
                        
            </div>
            <PhotoGallery/>
        </div>
    );
}

export default SectionCaseStudy2;