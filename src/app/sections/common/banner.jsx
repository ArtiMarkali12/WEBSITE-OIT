import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";

function Banner({ _data }) {
  return (
    <>
      <div
        className="full-landing-image sx-bnr-inr overlay-wraper bg-top-center"
        style={{
          backgroundImage: `url(${publicUrlFor(_data.background)})`,
        }}
      >
        {/* Overlay – opacity CSS मधून येईल */}
        <div className="overlay-main banner-overlay" />

        <div className="container">
          <div className="sx-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <span className="sx-bnr-sm-title">we are Dedicated</span>
                <h2 className="sx-title">{_data.title}</h2>
              </div>
        
              {/* BREADCRUMB */}
              <ul className="sx-breadcrumb breadcrumb-style-2">
                <li>
                  <NavLink to="/index">Home</NavLink>
                </li>
                <li>{_data.crumb}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sx-bnr-outline-text">
          <h1>{_data.watermark}</h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
