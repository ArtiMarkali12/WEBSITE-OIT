import Banner from "../../../sections/common/banner";
import SectionWhyChooseUs1 from "../../../sections/home/index/section-why-choose-us1";
import SectionAboutCompany1 from "../../../sections/home/index/section-about-company1";
import SectionVideo2 from "../../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4";
import SectionClients2 from "../../../sections/home/index2/section-clients2";
import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";

function ServicesPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.services} />
            <SectionWhyChooseUs1 />
            <SectionAboutCompany1 />
            <SectionVideo2 />
            <SectionWhyChooseUs4 />
            <SectionClients2 />
        </>
    )
}

export default ServicesPage;