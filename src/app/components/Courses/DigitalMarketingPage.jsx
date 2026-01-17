import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Button } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";
// import JavaImg from "../../assets/images/courses/JavaImg.jpg";
// import CertificateImg from "../../assets/images/courses/CertificateImg.jpg";
// import { bannerData } from "../../../globals/banner";
import { publicUrlFor } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

import {
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaShareAlt,
  FaPenNib,
  FaFileAlt,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaHeart,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaSyncAlt,
  FaStar,
  FaUserFriends,
  FaCalendarAlt,
  FaLaptopHouse,
  FaClock,
  FaRupeeSign,
  FaWallet,
  FaJava,
  FaServer,
  FaCogs,
  FaGlobe,
  FaVideo,
  FaQuestionCircle,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaCertificate,
} from "react-icons/fa";

import "../Courses/courses.css";
import { useState } from "react";
import SocialButtons from "./SocialButtons";
// import SocialButtons from "./SocialButtons";

export default function DigitalMarketingPage() {
  const modules = [
    {
      title: "Digital Marketing",
      children: [
        {
          title: "1. Digital Marketing Fundamentals",
          topics: [
            "Digital marketing refers to promoting products or services using online platforms like search engines, social media, email, and websites. With more people spending time online, the demand for digital marketing skills is booming—offering career opportunities in SEO, paid ads, content creation, and data analytics across every industry.",
            "Digital marketing works across three key channels: Owned Media (like your website or blog), Earned Media (organic mentions, shares, or reviews), Paid Media (advertising like Google or Facebook ads). Balancing these channels helps brands build visibility, trust, and conversions effectively.",
            "Inbound marketing focuses on attracting customers through valuable content, SEO, and engagement—like a magnet. Outbound marketing pushes messages to a broader audience through ads, emails, or cold calls—like a megaphone. Today’s smart marketing blends both for better reach and ROI.",
            "The customer journey maps how people move from discovering your brand to making a purchase. Frameworks like AIDA (Attention, Interest, Desire, Action) and TOFU-MOFU-BOFU (Top, Middle, Bottom of Funnel) help you tailor messages for each stage—leading to higher conversions and customer loyalty.",
          ],
        },
        {
          title: "2. Market Research & Competitor Analysis",
          topics: [
            "Choosing the right niche is the foundation of digital success. A profitable niche solves a specific problem for a defined audience and has strong demand with manageable competition. Look for trending topics, underserved markets, and areas where you can offer unique value.",
            "Understanding your ideal customer is key to effective marketing. Buyer personas and customer avatars help you define their goals, pain points, behaviors, and preferences—so you can create messages that truly connect and convert.",
            "These powerful tools help you uncover what your audience is searching for. Google Trends shows what’s gaining popularity, AnswerThePublic visualizes common questions, and Exploding Topics reveals rising trends before they go mainstream—perfect for planning content and products.",
          ],
        },
        {
          title: "3. Website Building & Optimization",
          topics: [
            "Building a website is easier than ever—no coding needed. Platforms like WordPress and Shopify let you launch fully functional websites or stores using drag-and-drop tools, themes, and plugins to customize everything effortlessly.",
            "Your website’s foundation starts with a domain name, reliable hosting, and a secure SSL certificate. These are essential for site performance, trust, and search rankings—ensuring your visitors stay safe and your brand stays credible.",
            "Landing pages are designed to convert visitors into leads or buyers. Tools like Elementor (for WordPress) and Unbounce (standalone) help you build beautiful, high-converting pages fast—with drag-and-drop editing, A/B testing, and form integrations.",
            "On-page SEO focuses on optimizing your site’s content, structure, and technical elements. Combine it with fast loading speed, mobile-friendly design, and proper keyword usage to improve your search visibility and user experience.",
          ],
        },
        {
          title: "4. SEO Fundamentals (White Hat vs Black Hat)",
          topics: [
            "SEO, or Search Engine Optimization, helps your website rank higher on Google. White Hat SEO uses ethical, long-term strategies like quality content and technical optimization. Black Hat SEO uses shortcuts like keyword stuffing or spammy links, which can lead to penalties. Stick to White Hat for sustainable growth.",
            "Effective SEO starts with smart keyword research. Tools like SEMrush and Ubersuggest help you find high-potential keywords with low competition. Group similar keywords into clusters to target multiple search intents and boost your content’s ranking power.",
            "On-page SEO ensures every page on your site is optimized for search engines and users. Use meta titles and descriptions with relevant keywords, internal linking for better navigation, and schema markup to help search engines understand your content better.",
            "Off-page SEO builds your site’s authority through backlinks. Earn them by writing valuable guest blogs, publishing on Web 2.0 platforms like Medium or Tumblr, and creating shareable content. The more quality links you earn, the higher you rank.",
          ],
        },
        {
          title: "5. Social Media Marketing (SMM)",
          topics: [
            "Each platform serves a different audience. Instagram is visual and engagement-driven, Facebook works well for communities and ads, LinkedIn is ideal for B2B and personal branding, while Twitter (X) is best for real-time updates and thought leadership. Craft your strategy based on platform strengths and user intent.",
            "Consistency is key. A smart content calendar helps you plan posts, campaigns, and trending topics in advance. Use relevant hashtags, engaging reels, and time-sensitive stories to boost visibility, reach, and real-time interaction with your audience.",
            "Going viral isn’t luck—it’s timing and creativity. Leverage current events, trending audio, and viral formats to hijack trends in a way that aligns with your brand. The right campaign at the right moment can skyrocket your reach overnight.",
            "Your personal brand is your digital reputation. Share authentic content, behind-the-scenes moments, and expertise to build trust. Partnering with influencers expands your reach and credibility—especially when their audience matches your target market.",
            "Grow your account without paid ads using organic hacks like engaging in niche communities, using carousel posts, and storytelling. To avoid shadow banning, stay away from banned hashtags, spammy behavior, and overly promotional content. Keep it real, and keep it consistent.",
          ],
        },
        {
          title: "6. Paid Advertising (PPC) Masterclass",
          topics: [
            "Meta Ads on Facebook and Instagram allow laser-sharp targeting. Build custom audiences from website visitors or email lists, retarget them with warm offers, and scale using lookalike audiences to reach new potential buyers who behave like your best customers.",
            "Google Ads offers multiple campaign types: Search Ads for high-intent keywords, Display Ads for visual brand awareness, Shopping Ads for product-based sales, Performance Max for AI-powered, all-in-one smart campaigns. Together, they help you reach customers at every stage of the buying journey.",
            "YouTube Ads grab attention with video. Hook viewers in the first 5 seconds, solve their pain point, and guide them with a clear CTA. Learn to write compelling ad scripts that drive high click-through rates (CTR) and engagement.",
            "Smart ads aren’t just about visuals—they’re about strategy. Learn how to set daily or lifetime budgets, choose between manual or automated bidding, and craft attention-grabbing copy that speaks directly to your ideal customer’s needs and desires.",
            "Once your ads convert, it’s time to scale. Use A/B testing to compare creatives or audiences, and master strategies like CBO (Campaign Budget Optimization) and ABO (Ad Set Budget Optimization) to find what works best without wasting money.",
            "Most buyers don’t convert on the first click. Use remarketing to bring them back with targeted messages based on their behavior. Integrate your ads with your sales funnel—from awareness to conversion—for higher ROI and customer retention.",
          ],
        },
        {
          title: "7. Email Marketing & Automation",
          topics: [
            "A lead magnet is a free, valuable resource (like a checklist, eBook, or template) offered in exchange for your visitor’s email. Pair it with a simple funnel—landing page, thank you page, and email automation—to convert cold traffic into warm leads on autopilot.",
            "Email tools like Mailchimp, ConvertKit, and Klaviyo help you collect, manage, and nurture your email list. These platforms offer easy templates, segmentation features, and automation options that make sending professional emails a breeze—even for beginners.",
            "Don’t blast the same email to everyone. Segment your list by interests, behavior, or purchase history to deliver more personalized messages. Use drip campaigns—a series of timed emails—to nurture leads, onboard customers, or re-engage inactive users.",
            "Great emails start with attention-grabbing subject lines and end with irresistible calls-to-action (CTAs). Learn how to write copy that feels personal, builds trust, and drives action—whether you’re selling, educating, or simply staying top-of-mind.",
            "Avoid the spam folder by following email deliverability best practices like authentication (SPF/DKIM), clean lists, and plain-text versions. Use Zapier to build powerful automation workflows—connecting your email platform with forms, CRMs, and checkout tools for seamless lead nurturing.",
          ],
        },
        {
          title: "8. Analytics, Tracking & Conversion",
          topics: [
            "GA4 is the next generation of Google Analytics, offering powerful insights into user behavior across websites and apps. Learn how to navigate GA4’s dashboard, understand engagement metrics, and track real-time performance to make smarter marketing decisions.",
            "Google Tag Manager (GTM) simplifies tracking by letting you add and manage tags—without touching code. Use GTM to set up conversion tracking for forms, purchases, clicks, and more—all within a single, organized workspace.",
            "Tools like Hotjar and Microsoft Clarity show how users interact with your website using heatmaps, session recordings, and scroll tracking. These visual insights reveal what’s working (and what’s not) so you can optimize for better UX and conversions.",
            "Track what truly matters by setting up custom events and goals—like form submissions, button clicks, video views, or scroll depth. These insights help you understand your funnel performance and refine user journeys in GA4 or GTM.",
          ],
        },
        {
          title: "9. Advanced Growth Hacking & Funnels",
          topics: [
            "Your personal brand is what makes you stand out. Build an authentic presence by sharing your journey, results, and value online. Pair it with a clean, result-driven portfolio (even with mock projects at first) to showcase your skills and build trust fast.",
            "A winning proposal addresses the client’s goals, shows you understand their pain points, and clearly outlines your process. Combine it with smart pricing strategies—like value-based pricing or tiered packages—to boost conversions and position yourself as a pro.",
            "Turn your freelance hustle into a real business. Learn how to build a team, define your service offerings, streamline client onboarding, and create repeatable SOPs. An agency allows you to scale beyond yourself and take on bigger, more profitable projects.",
            "Boost conversions with psychological triggers like limited-time offers, low stock alerts, and exclusive access. When used authentically, scarcity, urgency, and FOMO (Fear of Missing Out) drive faster buying decisions and higher sales.",
          ],
        },
        {
          title: "10. Freelancing, Agency & Monetization",
          topics: [
            "Getting clients is a mix of visibility, trust, and outreach. Use LinkedIn to showcase your expertise and network with decision-makers, Upwork to tap into active buyers, and cold emailing to pitch tailored solutions directly to potential clients with confidence and clarity.",
            "Your personal brand is what makes you stand out. Build an authentic presence by sharing your journey, results, and value online. Pair it with a clean, result-driven portfolio (even with mock projects at first) to showcase your skills and build trust fast.",
          ],
        },
      ],
    },

    {
      title: "Aptitude",
      children: [
        {
          title: "1. Quantitative Aptitude",
          topics: [
            "Average",
            "Percentage",
            "Profit and Loss",
            "Simple Interest and Compound Interest",
            "Ratio and Proportion",
            "Time and Work",
            "Time, Speed, and Distance",
            "Number System",
            "Permutation and Combination",
            "Probability",
            "Data Interpretation (Tables, Bar Graphs, Pie Charts, Line Graphs)",
          ],
        },
        {
          title: "2. Logical Reasoning",
          topics: [
            "Blood Relations",
            "Direction Sense",
            "Coding and Decoding",
            "Clocks and Calendar Problems",
            "Cubes and Dice Reasoning",
            "Seating Arrangements (Linear, Circular, Complex)",
            "Syllogism",
            "Data Sufficiency",
            "Puzzles (Floor-based, Box-based, Scheduling)",
            "Miscellaneous Reasoning (Series, Analogy, Classification)",
          ],
        },
      ],
    },

    {
      title: "Softskills",
      children: [
        {
          title: "1. Professional Foundation",
          topics: [
            "Setting the Right Tone for Professional Growth",
            "Introduction to 'Be Employable' Mindset",
            "Understanding the Competency Matrix (Technical + Behavioral Skills)",
          ],
        },
        {
          title: "2. Communication & Presentation",
          topics: [
            "Effective Verbal and Non-Verbal Communication",
            "Presentation Skills: Structuring, Delivery, and Visual Aids",
            "Business Communication: Emails, Reports, and Meetings",
          ],
        },
        {
          title: "3. Personal Development",
          topics: [
            "Attitude, Motivation, and Growth Mindset",
            "Emotional Intelligence (Self-awareness, Empathy, Relationship Management)",
            "Leadership Qualities and Team Collaboration",
          ],
        },
        {
          title: "4. Career Readiness",
          topics: [
            "Creating an ATS-Friendly CV/Resume",
            "Group Discussion (GD) Strategies and Common Topics",
            "Mock Group Discussion Sessions with Feedback",
            "Personal Interview (PI) Practice: Technical & HR Rounds",
            "Virtual Interview Best Practices (Lighting, Background, Etiquette)",
          ],
        },
        {
          title: "5. Future Planning",
          topics: [
            "Industry Know-how: Trends in IT & Software Development",
            "Career Roadmap, Certifications (e.g., AWS, Oracle, Scrum), and Action Plan",
          ],
        },
      ],
    },

    {
      title: "Projects",
      children: [
        {
          title: "1. Task Scheduling System (DSA + Java)",
          topics: ["Apply heaps & priority queues for task scheduling."],
        },
      ],
    },
  ];

  const faqData = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results depend on the strategy. SEO may take 3–6 months, while paid campaigns can deliver results within weeks.",
    },
    {
      question: "Do you offer customized digital marketing packages?",
      answer:
        "Yes. All our digital marketing solutions are customized based on your business goals and budget.",
    },
    {
      question: "Will I receive regular performance reports?",
      answer:
        "Yes. We provide transparent monthly reports with key metrics and insights.",
    },
    {
      question: "Do you work with local businesses?",
      answer:
        "Absolutely. We specialize in local SEO and lead generation for businesses targeting specific locations.",
    },
    {
      question: "Can you manage both organic and paid marketing?",
      answer:
        "Yes. We handle SEO, content marketing, paid ads, and social media under one roof.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [activeChild, setActiveChild] = useState({});

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
    setActiveChild({}); // ✅ reset children correctly
  };

  const toggleChild = (moduleIndex, childIndex) => {
    setActiveChild((prev) => ({
      ...prev,
      [moduleIndex]: prev[moduleIndex] === childIndex ? null : childIndex,
    }));
  };

  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="java-page">
      {/* ===== HERO SECTION ===== */}
      <section className="java-hero">
        <div className="java-hero-container">
          {/* LEFT CONTENT */}
          <div className="java-hero-left">
            <h1>
              Digital Marketing Course – Learn SEO, Ads & Social Media Marketing
            </h1>

            <p>
              Master SEO, Google Ads, Social Media & Analytics with hands-on
              training and real-world projects.
            </p>

            <div className="hero-buttons">
               <NavLink
                              to="/contact-us"
                              className="btn-primary"
                              style={{ textDecoration: "none" }}
                            >
                              Download Syllabus
                            </NavLink>
              
                    
                            <NavLink
                              to="/contact-us"
                              className="btn-outline"
                              style={{ textDecoration: "none" }}
                            >
                              Enroll Now
                            </NavLink>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="java-hero-right">
            <div className="video-wrapper">
              <iframe
                width="550"
                height="310"
                src="https://www.youtube.com/embed/Ya4of5Lszq4"
                title="Become a Digital Marketing Expert | Complete Roadmap &amp; Technologies"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSE HIGHLIGHTS ===== */}
      <section className="highlights-section container">
        <div className="row text-center">
          <div className="col-md-3 px-2">
            <div className="highlight-box">
              <h4>Duration</h4>
              <p>6 Months</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Mode</h4>
              <p>Online / Offline</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Projects</h4>
              <p>5+ Live Projects</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="highlight-box px-2">
              <h4>Certification</h4>
              <p>Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */} 
            <h2 className="angular-title">
                Performance-Focused Digital Marketing Services That Deliver
                Results
              </h2>
            <Col lg={6} md={6} className="about-content-col">
             

              <p>
                The Digital Marketing Course at Orange ITech is a comprehensive,
                hands-on training program designed to equip you with real-world
                digital marketing skills needed in today’s digital-first
                economy.
              </p>

              <p>
                This course takes you step-by-step through SEO, Google Ads,
                social media marketing, email automation, content strategy, and
                analytics, helping you understand how to plan, execute, and
                optimize high-performing digital campaigns.
              </p>

              <p>
                Whether you’re a beginner exploring marketing fundamentals or a
                professional looking to upskill, this course focuses on
                practical implementation, live projects, and industry tools to
                help you become a confident, job-ready digital marketer in a
                short time. ensuring you become a complete, job-ready developer.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={6} className="about-image-col">
              <div className="about-image-bg ">
                {/* <img src={JavaImg} alt="About Course" className="about-image" /> */}
                <img
                  src={publicUrlFor("images/courses/digitalMarketing.jpg")}
                  alt="Java Course Image"
                  className="gallery-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="who-can-join-section">
        <Container>
          {/* HEADING */}
          <h2 className="who-title">Who Can Join Digital Marketing Course?</h2>

          <p className="who-subtitle">
            Our Job Oriented Digital Marketing Training Course is designed for a
            wide range of learners, including:
          </p>

          {/* SCROLL WRAPPER */}
          <div className="who-scroll-wrapper">
            <div className="who-scroll-track">
              {/* CARD 1 */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>
                  Students and fresh graduates looking to start their career in
                  IT field
                </span>
              </div>

              {/* CARD 2 */}
              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>
                  Working professionals planning a career switch to software
                  development
                </span>
              </div>

              {/* CARD 3 */}
              <div className="who-card">
                <FaCode className="who-icon" />
                <span>
                  Backend or frontend developers aiming to become full-stack
                  developers
                </span>
              </div>

              {/* CARD 4 */}
              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>
                  Entrepreneurs and freelancers wanting to build full-stack web
                  applications
                </span>
              </div>

              {/* CARD 5 */}
              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>
                  Anyone with a passion for coding (basic programming knowledge
                  is helpful but not mandatory)
                </span>
              </div>

              {/* DUPLICATE FOR SMOOTH LOOP */}
              <div className="who-card">
                <FaUserGraduate className="who-icon" />
                <span>
                  Students and fresh graduates looking to start their career in
                  IT field
                </span>
              </div>

              <div className="who-card">
                <FaBriefcase className="who-icon" />
                <span>
                  Working professionals planning a career switch to software
                  development
                </span>
              </div>

              <div className="who-card">
                <FaCode className="who-icon" />
                <span>
                  Backend or frontend developers aiming to become full-stack
                  developers
                </span>
              </div>

              <div className="who-card">
                <FaLaptopCode className="who-icon" />
                <span>
                  Entrepreneurs and freelancers wanting to build full-stack web
                  applications
                </span>
              </div>

              <div className="who-card">
                <FaHeart className="who-icon" />
                <span>
                  Anyone with a passion for coding (basic programming knowledge
                  is helpful but not mandatory)
                </span>
              </div>

              {/* DUPLICATE FOR SMOOTH LOOP */}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CURRICULUM ===== */}
      <section className="syllabus-wrapper">
        <div className="syllabus-container">
          <h4 className="about-title">Digital Marketing Curriculum Overview</h4>

          <p className="faq-subtitle">
            Our Digital Marketing course syllabus is structured to cover
            end-to-end full-stack technologies with a strong emphasis on
            practical implementation and real-world projects.
          </p>

          {/* STACKED MODULES */}
          <div className="faq-list">
            {modules.map((module, mIndex) => (
              <div key={mIndex} className="faq-module-wrapper">
                {/* MAIN MODULE */}
                <div
                  className="faq-module"
                  onClick={() => toggleModule(mIndex)}
                >
                  <span className="module-title">{module.title}</span>
                  <span className="module-plus">
                    {activeModule === mIndex ? "−" : "+"}
                  </span>
                </div>

                {/* MODULE CONTENT */}
                {activeModule === mIndex && (
                  <div className="module-desc">
                    {module.children.map((child, cIndex) => (
                      <div key={cIndex} className="inner-wrapper">
                        {/* CHILD TITLE */}
                        <div
                          className="inner-title"
                          onClick={() => toggleChild(mIndex, cIndex)}
                        >
                          <span>{child.title}</span>
                          <span>
                            {activeChild[mIndex] === cIndex ? "−" : "+"}
                          </span>
                        </div>

                        {/* CHILD CONTENT */}
                        {activeChild[mIndex] === cIndex && (
                          <ul className="syllabus-list">
                            {child.topics.map((topic, tIndex) => (
                              <li key={tIndex}>• {topic}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <Container>
          <Row className="align-items-start">
            {/* LEFT SIDE – CONTENT INTRO */}
            <Col lg={5} md={12} className="why-left">
              <h2 className="about-title">
                Why Choose Orange ITech for Digital Marketing?
              </h2>

              <p className="why-subtitle">
                Orange ITech stands out as a trusted training institute by
                focusing on skills, employability, and real-world exposure.
              </p>

              {/* <Button className=" "></Button> */}
               <NavLink
                to="/contact-us"
                className="hero-buttons btn-primary mt-4"
                style={{ textDecoration: "none", width: "180px" }}
              >
                Request Callback
              </NavLink>
            </Col>

            {/* RIGHT SIDE – FEATURE GRID */}
            <Col lg={7} md={12}>
              <div className="why-grid">
                <div className="why-card">
                  <FaChalkboardTeacher className="why-icon" />
                  <span>
                    Industry-expert trainers with real project experience
                  </span>
                </div>

                <div className="why-card">
                  <FaProjectDiagram className="why-icon" />
                  <span>Real-time full-stack project exposure</span>
                </div>

                <div className="why-card">
                  <FaSyncAlt className="why-icon" />
                  <span>
                    Updated syllabus aligned with current industry needs
                  </span>
                </div>

                <div className="why-card">
                  <FaStar className="why-icon" />
                  <span>High student satisfaction & positive reviews</span>
                </div>

                <div className="why-card">
                  <FaUserFriends className="why-icon" />
                  <span>1:1 mentorship and career guidance</span>
                </div>

                <div className="why-card">
                  <FaBriefcase className="why-icon" />
                  <span>Interview preparation & placement assistance</span>
                </div>

                <div className="why-card">
                  <FaVideo className="why-icon" />
                  <span>Recorded sessions (where applicable)</span>
                </div>

                <div className="why-card">
                  <FaQuestionCircle className="why-icon" />
                  <span>Doubt-clearing sessions</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fees-duration-section">
        <Container>
          {/* HEADING */}
          <h2 className="fee-title">
            Digital Marketing Course Fees & Duration
          </h2>

          {/* CARD GRID */}
          <Row className="gy-4 mt-4">
            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaCalendarAlt className="fees-icon blue" />
                <h5>Course Duration</h5>
                <p>6 Months</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaLaptopHouse className="fees-icon red" />
                <h5>Training Mode</h5>
                <p>Online & Offline</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaClock className="fees-icon green" />
                <h5>Batch Timings</h5>
                <p>Weekday & Weekend Batches Available</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaRupeeSign className="fees-icon orange" />
                <h5>Fee Structure</h5>
                <p>Contact our team for detailed fees</p>
              </div>
            </Col>

            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaWallet className="fees-icon purple" />
                <h5>Installment Options</h5>
                <p>Available</p>
              </div>
            </Col>

            {/* NEW CARD */}
            <Col md={6} lg={4}>
              <div className="fees-card">
                <FaCertificate className="fees-icon teal" />
                <h5>Certification</h5>
                <p>Industry Recognized Certificate</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-tech-wrapper">
        <div className="faq-tech-container">
          {/* LEFT : FAQ */}
          <div className="faq-col">
            <div className="faq-header">
              <h2 className="about-title">Digital Marketing Training FAQs</h2>
            </div>

            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-card">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="module-plus">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <div className="faq-answer">
                      {item.answer.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT : TECHNOLOGIES */}
          <div className="tech-col">
            <h2 className="about-title">Technologies You Will Learn</h2>

            <div className="tech-grid">
              {[
                "Search Engine Optimization (SEO)",
                "Search Engine Marketing (SEM)",
                "Social Media Marketing (SMM)",
                "Google Ads",
                "Facebook & Instagram Ads",
                "Content Marketing",
                "Email Marketing",
                "Google Analytics",
              ].map((tech, index) => (
                <div key={index} className="tech-card">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-opportunity-section">
        <Container>
          {/* HEADING */}
          <h2 className="career-title">
            Career Opportunities After Digital Marketing Training Program
          </h2>

          <p className="career-subtitle text-center">
            After completing this course, you can apply for roles such as:
          </p>

    <Row className="gy-4 mt-4">
  {/* Digital Marketing Executive */}
  <Col md={4}>
    <div className="career-card">
      <FaBullhorn className="career-icon" />
      <span>Digital Marketing Executive</span>
    </div>
  </Col>

  {/* SEO Specialist */}
  <Col md={4}>
    <div className="career-card">
      <FaSearch className="career-icon" />
      <span>SEO Specialist</span>
    </div>
  </Col>

  {/* PPC & Google Ads Expert */}
  <Col md={4}>
    <div className="career-card">
      <FaGoogle className="career-icon" />
      <span>PPC & Google Ads Expert</span>
    </div>
  </Col>

  {/* Social Media Manager */}
  <Col md={4}>
    <div className="career-card">
      <FaShareAlt className="career-icon" />
      <span>Social Media Manager</span>
    </div>
  </Col>

  {/* Content Marketing Specialist */}
  <Col md={4}>
    <div className="career-card">
      <FaPenNib className="career-icon" />
      <span>Content Marketing Specialist</span>
    </div>
  </Col>

  {/* Content Marketing */}
  <Col md={4}>
    <div className="career-card">
      <FaFileAlt className="career-icon" />
      <span>Content Marketing</span>
    </div>
  </Col>
</Row>

          {/* DESCRIPTION */}
          <p className="career-note text-center mt-5">
            Digital Marketing are in high demand across IT services, startups,
            product companies, fintech, and enterprise organizations.
          </p>
        </Container>
      </section>

      <section className="certification-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT: CERTIFICATE IMAGE */}
            <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
              <div className="certificate-image-wrapper">
                <img
                  src={publicUrlFor("images/courses/CertificateImg.jpg")}
                  alt="Java Course Image"
                  className="gallery-image"
                />
              </div>
            </Col>

            {/* RIGHT: CONTENT */}
            <Col lg={6} md={12}>
              <div className="certification-content">
                <h2 className="about-title">Certification</h2>

                <h3 className="certification-subtitle">
                  Earn a Master Certification in <br />{" "}
                  <strong>Digital Marketing</strong>
                </h3>

                <p className="certification-text">
                  Get recognized for your expertise with a Master Certification
                  in Digital Marketing. This industry-recognized certification
                  validates your skills and helps you stand out in the
                  competitive job market.
                </p>

                {/* <Button className="certification-btn">Get Certified</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SocialButtons />

      {/* ===== CTA ===== */}
      <section className="cta-section text-center">
        <h2>Start Your IT Career Today</h2>
          <NavLink to="/contact-us" className="btn btn-primary cta-btn">
          Book Free Demo
        </NavLink>
      </section>
    </div>
  );
}
