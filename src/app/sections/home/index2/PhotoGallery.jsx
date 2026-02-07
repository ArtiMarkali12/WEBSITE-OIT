import React from "react";
import "./PhotoGallery.css";

function PhotoGallery() {
    const galleryImages = [
  "/assets/images/background/gallery1.png",
  "/assets/images/background/gallery2.png",
  "/assets/images/background/gallery3.png",
  "/assets/images/background/gallery4.png",
  
];


    return (
        <div className="contact-social-section sx-bg-white">
            <div className="container">

                {/* 📸 PHOTO GALLERY SECTION */}
                <div className="photo-gallery-section">
                    <h2 className="gallery-title text-center mt-5">
                        Our Training Moments
                    </h2>

                    <div className="photo-gallery-grid">
                        {galleryImages.map((img, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={img} alt="Gallery" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PhotoGallery;
