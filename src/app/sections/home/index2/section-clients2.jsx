import React, { useState, useRef } from "react";
import './Client.css';

function SectionClients2() {
    const scrollRef = useRef(null);
    const [expandedReview, setExpandedReview] = useState(null);

    // व्हिडिओ नेहमी क्लिअर दिसण्यासाठी HD पॅरामीटर वापरला आहे
    const videoEmbeds = [
        "https://www.youtube.com/embed/fPq5U4aaw0g?modestbranding=1&rel=0&vq=hd720",
        "https://www.youtube.com/embed/a9TYowlwMVg?modestbranding=1&rel=0&vq=hd720",
        "https://www.youtube.com/embed/rx2ErLGu820?modestbranding=1&rel=0&vq=hd720",
        "https://www.youtube.com/embed/b2TRd-0N6qE?modestbranding=1&rel=0&vq=hd720",
        "https://www.youtube.com/embed/YCkXMCrr9-0?modestbranding=1&rel=0&vq=hd720"
    ];

    const googleReviews = [
        { id: 1, name: "Samiksha Janjale", initial: "S", date: "2024-04-17", color: "#7b1fa2", text: "Positive: Communication, Professionalism. The overall experience is good, tutors are good and very knowledgeable they are sharing all relevant materials. Also they are very polite. All the doubts are cleared on the spot. Plus point here is my recruiter Deepa, she is very nice and humble and always supports me whenever i reach out to her for any query. I would surely recommend to join the" },
        { id: 2, name: "Somnath Jagtap", initial: "S", date: "2024-04-12", color: "#689f38", text: "Good experience for placement and internship. Mentors provide excellent support throughout the course." },
        { id: 3, name: "Yogesh Jagtap", initial: "Y", date: "2024-04-12", color: "#f57c00", text: "I never thought coding will be so easy, Thank you 'The Orange ITech' for making it possible for me. " },
        { id: 4, name: "Anand Shinde", initial: "A", date: "2024-04-12", color: "#1b5e20", text: "dedication....Thank you 'The Orange Itech'. Good Environment." },
        { id: 5, name: "Shravani Argade", initial: "S", date: "2024-04-12", color: "#4a148c", text: "Good institute. Our student reviews reflect our commitment to quality training." },
        { id: 6, name: "Tanmay Jagtap", initial: "T", date: "2024-04-12", color: "#e65100", text: "This Pune institute is excellent. Their trainers are IT professionals  so they provide industry-focused training, which helps prepare for interviews and crack them. They cover basics, advanced topics, soft skills, and." },
        { id: 7, name: "Neelam Jagtap", initial: "N", date: "2024-04-12", color: "#3f51b5", text: "I joined python developer course in orange itech. Course content is good.They cover basic to advance level framework which are required for company.also cover aptitude and softskill session,mock interview. After 4 months institute stated call for placement. And also start" }
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (

        <div className="section-full sx-reviews-section">
            <div className="container">
                <div className="sx-reviews-header" style={{textAlign: 'center', marginBottom: '40px'}}>
                    <h2 style={{color: '#1a1a5e', fontWeight: '800'}}>What Our Students Say</h2>
                    <p>Our student reviews reflect our commitment to quality training, mentorship, and career support. Many of our learners credit Orange ITech for helping them start and grow their IT careers.</p></div>
       
                <div className="video-grid-row">
                    {videoEmbeds.map((url, index) => (
                        <div className="video-card-item" key={index}>
                            <iframe 
                                src={url} 
                                title={`Video ${index}`} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>
                    {/*review  */}
                <div className="reviews-slider-main">
                    <button className="arrow-btn left" onClick={() => scroll('left')}>&#10094;</button>
                    <div className="google-reviews-grid" ref={scrollRef}>
                        {googleReviews.map((rev) => (
                            <div className="google-review-card-pro" key={rev.id}>
                                <div className="rev-profile-wrapper">
                                    <div className="rev-avatar" style={{backgroundColor: rev.color}}>{rev.initial}</div>
                                </div>
                                <div className="rev-content">
                                    <h6 className="rev-name">{rev.name}</h6>
                                    <span className="rev-date">{rev.date}</span>
                                    <div className="rev-stars">
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        <span className="blue-tick">✔</span>
                                    </div>
                                    <p className={`rev-text ${expandedReview === rev.id ? 'expanded' : ''}`}>
                                        {rev.text}
                                    </p>
                                    <button className="read-more-btn" onClick={() => setExpandedReview(expandedReview === rev.id ? null : rev.id)}>
                                        {expandedReview === rev.id ? "Hide" : "Read more"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="arrow-btn right" onClick={() => scroll('right')}>&#10095;</button>
                </div>
            </div>
        </div>
    );
}

export default SectionClients2;