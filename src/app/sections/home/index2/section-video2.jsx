import { publicUrlFor } from "../../../../globals/constants";

function SectionVideo2() {
  return (
    <>
      <div className="section-full sx-video-2-outer sx-atc-fixed position-relative" style={{ backgroundImage: `url(${publicUrlFor("images/vid-1-bg.jpg")})` }}>
        <iframe
          src="https://www.youtube.com/embed/QUu95YNqY0c?autoplay=1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
            // frameBorder="0"
            // allow="autoplay"
        ></iframe>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="sx-vodeo-section text-center">
            <div className="sx-video-btn-wrap">
              <a
                href="https://www.youtube.com/watch?v=QUu95YNqY0c"
                className="mfp-video circle"
              >
                <i className="flaticon-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionVideo2;