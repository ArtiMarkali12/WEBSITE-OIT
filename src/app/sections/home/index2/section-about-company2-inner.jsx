import React from 'react';
import './copmay.css';

function SectionAboutCompany2Inner() {
    return (
        <div className="sx-about-bx3-content-wrap">
            <div className="custom-about-container">
                
                {/* 1. Heading Section - Underline ani Gap kadhla aahe */}
                <div style={{ marginBottom: '25px' }}>
                    <h2 className="sx-title" style={{ 
                        fontSize: '36px', 
                        fontWeight: 'bold', 
                        color: '#222',
                        textAlign: 'left',
                        margin: '0' 
                    }}>
                        Why Choose <span style={{ color: '#FF6600' }}>Orange ITech?</span>
                    </h2>
                </div>

                {/* 2. Side by Side Layout */}
                <div className="custom-row-flex">
                    
                    {/* VIDEO SECTION (LEFT) */}
                    <div className="custom-video-col">
                        <div className="sx-video-wrapper" style={{
                            boxShadow: '0px 10px 25px rgba(0,0,0,0.1)',
                            borderRadius: '15px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                    src="https://www.youtube.com/embed/-F_8VHpTWjg" 
                                    title="Orange ITech" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* TEXT CONTENT SECTION (RIGHT) */}
                    <div className="custom-content-col">
                        <div className="sx-about-bx3-content"> 
                            <h4 style={{ color: '#222', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                                Orange ITech is one of the Best Training Institutes in Pune with Placement Support.
                            </h4>
                            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', marginBottom: '15px' }}>
                                It has trained and placed thousands of students who aspired to build rewarding careers in IT. 
                                Our approach goes beyond theory; we focus on <strong>practical learning, market-relevant skills</strong>, and career readiness.
                            </p>
                            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444' }}>
                                Our IT certification courses are designed to help you gain in-demand skills that employers are actively looking for,increasing your chances of securing a high-paying IT job.

                            </p>
                            
                            {/* Contact Section removed from here */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SectionAboutCompany2Inner;