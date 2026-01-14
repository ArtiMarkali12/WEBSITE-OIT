import React from "react";
import SectionAboutCompany2Inner from "./section-about-company2-inner";
import { publicUrlFor } from "../../../../globals/constants"; 
import './place.css'; 

function SectionAboutCompany2() {
    const companyLogos = [
        "images/logos/image.png",
        "images/logos/image copy.png",
        "images/logos/image copy 2.png",
        "images/logos/image copy 3.png",
        "images/logos/image copy 4.png"
    ];

    const socialLinks = {
        // facebook: "https://www.facebook.com/yourprofile",
        youtube: "https://youtube.com/@orangeitech?si=QxZy6KHC9PdkHHo-/yourchannel",
        linkedin: "https://www.linkedin.com/company/orange-itech-intstitue/yourprofile",
        instagram: "https://www.instagram.com/orangeitech?igsh=emxtczZiaHQ0Y2cy/yourprofile"
    };

    return (
        <div className="section-full p-t110 p-b80 bg-white sx-about-bx3-outer">
            <div className="container">
                <div className="section-content">
                    
                    {/* Why Choose Us section remains exactly the same */}
                    <SectionAboutCompany2Inner />

                    <div className="sx-placement-wrap" style={{ marginTop: '-45px', clear: 'both' }}>
                        
                        {/* Heading Section */}
                        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                            <h2 className="sx-title" style={{ fontSize: '38px', fontWeight: 'bold' }}>
                                Our Students Placed In <span style={{ color: '#FF6600' }}>Top Companies</span>
                            </h2>
                            <p style={{ maxWidth: '850px', margin: '5px auto 10px', color: '#666' }}>
                                Our students are successfully placed across leading IT companies, startups, and enterprise organizations. We maintain strong industry connections to help students access real job opportunities.
</p>
                        </div>

                        {/* Company Logos Scroller Section */}
                        <div className="sx-center-scroller-box">
                            <div className="sx-logo-scroller">
                                <div className="sx-logo-track">
                                    {companyLogos.map((path, index) => (
                                        <div className="sx-logo-item" key={index}>
                                            <img src={publicUrlFor(path)} alt="logo" />
                                        </div>
                                    ))}
                                    {companyLogos.map((path, index) => (
                                        <div className="sx-logo-item" key={'rep-'+index}>
                                            <img src={publicUrlFor(path)} alt="logo" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons Section */}
                        <div className="sx-social-box-container">
                            <div className="sx-social-icons-row">
                                {/* Only this line was changed for clarity: using fa-facebook-f */}
                                {/* <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="sx-s-icon fb">
                                    <i className="fa fa-facebook-f"></i>
                                </a> */}
                                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="sx-s-icon yt">
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="sx-s-icon ln">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="sx-s-icon ig">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionAboutCompany2;