import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-our-info-outer ">
                <div className="container">
                    <div className="section-content">
                        <div className="row sx-our-info-content-wrap">
                            {/*One block*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Working Experience</span>
                                                <h3 className="sx-bx-title">8+ Years Experience. (Accenture)</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Experience</span>
                                                <h3 className="sx-bx-title">UX/UI Designer &amp; Frontend developer</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Service</span>
                                                <h3 className="sx-bx-title">Web Template &amp; Apps Design.</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">Strategy</span>
                                                <h3 className="sx-bx-title">Brand Designer.</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-media-wrap">
                                    <div className="sx-our-info-media">
                                        <ItodoImage src="images/our-info.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Contact</span>
                                                <h3 className="sx-bx-title">inf.kali@gmail.com
                                                    +99 555 66 22 00</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Location</span>
                                                <h3 className="sx-bx-title">House 03, Paris, United Kingdom.</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Education</span>
                                                <h3 className="sx-bx-title">BSE in computer science.</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">Social Icon</span>
                                                <h3 className="sx-bx-title">Facebook, Linkdin, Instagram.</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionOurInfo2;