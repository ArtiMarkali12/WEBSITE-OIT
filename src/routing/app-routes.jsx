import { Routes, Route } from "react-router-dom";

/* ===== TEMPLATE PAGES ===== */
import AboutUsPage from "../app/components/company/about-us";
import FAQPage from "../app/components/company/faq";
import GalleryPage from "../app/components/company/gallery";
import IconsPage from "../app/components/company/icons";
import PricingPage from "../app/components/company/pricing";
import TeamPage from "../app/components/company/team";
import TestimonialsPage from "../app/components/company/testimonials";
import WhyChooseUsPage from "../app/components/company/why-choose-us";

import MissionVisionPage from "../app/components/IT solutions/mission-vision";
import ServicesPage from "../app/components/IT solutions/services/services";
import ServicesDetailPage from "../app/components/IT solutions/services/detail";

import BlogGridPage from "../app/components/IT blogs/blog-grid";

import ContactUsPage from "../app/components/contactus/contact-us";
import Home1Page from "../app/components/home/index";
import Home2Page from "../app/components/home/index2";

/* ===== COURSES ===== */
import FullStackDevelopmentPage from "../app/components/Courses/FullStackDevelopmentPage";
import FrontendDevelopmentPage from "../app/components/Courses/FrontendDevelopmentPage";
import MoblieApplicationPage from "../app/components/Courses/MoblieApplicationPage";
import BasicCoursesPage from "../app/components/Courses/BasicCoursesPage";
import DSAPage from "../app/components/Courses/DSAPage";
import RDBMSPage from "../app/components/Courses/RDBMSPage";
import CoreJavaPage from "../app/components/Courses/CoreJavaPage";
import JavaFullStackPage from "../app/components/Courses/JavaFullStackPage";
import PHPFullStackPage from "../app/components/Courses/PHPFullStackPage";
import PythonFullStackPage from "../app/components/Courses/PythonFullStackPage";
import DotNetFullStackPage from "../app/components/Courses/DotNetFullStackPage";
import MEANStackPage from "../app/components/Courses/MEANStackPage";
import DataScienceAIPage from "../app/components/Courses/DataScienceAIPage";
import DevopsPage from "../app/components/Courses/DevopsPage";
import CyberSecurityPage from "../app/components/Courses/CyberSecurityPage";
import SoftwareTestingPage from "../app/components/Courses/SoftwareTestingPage";
import DigitalMarketingPage from "../app/components/Courses/DigitalMarketingPage";
import UIUXDeveloperPage from "../app/components/Courses/UIUXDeveloperPage";
import AndroidPage from "../app/components/Courses/AndroidPage";
import AngularPage from "../app/components/Courses/AngularPage";
import MERNStackPage from "../app/components/Courses/MERNStackPage";
import ReactJSPage from "../app/components/Courses/ReactJSPage";
import FlutterPage from "../app/components/Courses/FlutterPage";
import CProgrammingPage from "../app/components/Courses/CProgrammingPage";
import AdvanceJavaPage from "../app/components/Courses/AdvanceJavaPage";
import SalesForceDevelopmentPage from "../app/components/Courses/SalesForceDevelopmentPage";

import Events from "../app/components/Events/Events";
import Careers from "../app/components/Careers/Careers";
import Placement from "../app/components/Placement/Placement";
import SectionOurInfo1 from "../app/sections/company/why-choose-us/section-our-info1";
import SectionWhyChooseUs1 from "../app/sections/home/index/section-why-choose-us1";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home2Page />} />
      <Route path="/index2" element={<Home2Page />} />
      <Route path="/index" element={<Home1Page />} />

      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/icons" element={<IconsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/teams" element={<TeamPage />} />

      <Route path="/mission" element={<MissionVisionPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/detail" element={<ServicesDetailPage />} />

      <Route path="/blogs" element={<BlogGridPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/sectionOurInfo1" element={<SectionOurInfo1 />} />
      <Route path="/SectionWhyChooseUs1" element={<SectionWhyChooseUs1 />} />

      {/* COURSES */}
      <Route
        path="/courses/fullstack-development"
        element={<FullStackDevelopmentPage />}
      />
      <Route
        path="/courses/frontend-development"
        element={<FrontendDevelopmentPage />}
      />
      <Route
        path="/courses/mobile-application"
        element={<MoblieApplicationPage />}
      />
      <Route path="/courses/basic-courses" element={<BasicCoursesPage />} />
      <Route path="/courses/data-structure-algorithms" element={<DSAPage />} />
      <Route path="/courses/rdbms-course" element={<RDBMSPage />} />
      <Route path="/courses/core-java-course" element={<CoreJavaPage />} />
      <Route
        path="/courses/java-fullstack-development"
        element={<JavaFullStackPage />}
      />
      <Route
        path="/courses/php-fullstack-development"
        element={<PHPFullStackPage />}
      />
      <Route
        path="/courses/python-fullstack-development"
        element={<PythonFullStackPage />}
      />
      <Route
        path="/courses/dotnet-fullstack-development"
        element={<DotNetFullStackPage />}
      />
      <Route
        path="/courses/mean-fullstack-development"
        element={<MEANStackPage />}
      />
      <Route
        path="/courses/mern-fullstack-development"
        element={<MERNStackPage />}
      />
      <Route path="/courses/data-science-ai" element={<DataScienceAIPage />} />
      <Route path="/courses/devops" element={<DevopsPage />} />
      <Route path="/courses/cybersecurity" element={<CyberSecurityPage />} />
      <Route
        path="/courses/software-testing"
        element={<SoftwareTestingPage />}
      />
      <Route
        path="/courses/digital-marketing-course"
        element={<DigitalMarketingPage />}
      />
      <Route path="/courses/ui-ux-developer" element={<UIUXDeveloperPage />} />
      <Route path="/courses/android-development" element={<AndroidPage />} />
      <Route path="/courses/angular-development" element={<AngularPage />} />
      <Route path="/courses/reactjs-development" element={<ReactJSPage />} />
      <Route path="/courses/flutter-development" element={<FlutterPage />} />
      <Route
        path="/courses/c-programming-course"
        element={<CProgrammingPage />}
      />
      <Route
        path="/courses/advance-java-course"
        element={<AdvanceJavaPage />}
      />
      <Route
        path="/courses/salesforce-testing"
        element={<SalesForceDevelopmentPage />}
      />
    </Routes>
    
  );
}

export default AppRoutes;
