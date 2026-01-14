import React from "react";
import { publicUrlFor } from "../../../../globals/constants"; 
import './Courses.css'; 

function SectionServices2() {
    const popularCourses = [
        "images/PopularCourses/image.png",
        "images/PopularCourses/image copy.png",
        "images/PopularCourses/image copy 2.png",
        "images/PopularCourses/image copy 3.png",
        "images/PopularCourses/image copy 4.png"
    ];

    return (
        /* इथे style देऊन आपण पूर्ण सेक्शनला वर सरकवत आहोत */
        <div className="section-full p-t0 p-b40 sx-bg-light" style={{ marginTop: '-80px', position: 'relative', zIndex: '10' }}>
            <div className="container">
                <div className="section-content">
                    <div className="sx-courses-container">
                        <h2 className="sx-course-main-title">Skill Up with Our Most Popular Courses</h2>
                        
                        <div className="sx-courses-scroller">
                            <div className="sx-courses-track">
                                {popularCourses.map((path, index) => (
                                    <div className="sx-course-item" key={index}>
                                        <div className="sx-course-card">
                                            <img src={publicUrlFor(path)} alt="Course" />
                                        </div>
                                    </div>
                                ))}
                                {/* लूपसाठी डुप्लिकेट आयटम्स */}
                                {popularCourses.map((path, index) => (
                                    <div className="sx-course-item" key={'rep-' + index}>
                                        <div className="sx-course-card">
                                            <img src={publicUrlFor(path)} alt="Course" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionServices2;