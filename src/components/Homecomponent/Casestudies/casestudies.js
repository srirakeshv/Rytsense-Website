import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import { useNavigate } from "react-router-dom";

const CaseStudies = ({
  showViewAllButton = true,
  heading,
  alignCenter = false,
}) => {
  const casestudies = [
    {
      heading: "YouCOMM",
      appname: "YouCOMM - Real-time access to medical help",
      image: 'url("/images/youcomm-scrn3.jpg")',
      topimage: "/images/youcomm_llc_logo.jfif",
      languages: ["Android", "Swift"],
      sub: "Health Care",
      passage:
        "YouCOMM is a multi-request format platform for in-hospital patients to connect with nurses to get help for their basic needs. The fully customizable patient messaging system enables patients to notify the staff of their needs through the mode of manual selection of options, voice commands, and the use of head gestures.",
      clientrequirements:
        "Client wants an  multi-request format platform for in-hospital patients to connect with nurses to get help for their basic needs. The fully customizable patient messaging system enables patients to notify the staff of their needs through the mode of manual selection of options, voice commands, and the use of head gestures.",
      clientsrc: "/images/youcomm-scrn3 (1).webp",
      imagearray: [
        "/images/youcomm-scrn1.webp",
        "/images/youcomm-scrn2.webp",
        "/images/youcomm-scrn3.jpg",
        "/images/youcomm-scrn4.webp",
      ],
      challenges: [
        {
          heading: "Delicate Workflow Management",
          passage:
            "We built a solution where the hospital admin could keep the record of whether the patient’s request was completed and how long it took for a particular request to be completed. This led to the betterment of efficiency on nurses’ end while enhancing the efficacy of patient needs. The app workflow that we built looked like this: Every patient is assigned 3 nurses to which request goes one by one in case the first misses. In case all the 3 nurses miss, the request gets broadcasted to all the nurses assigned on the patient’s floor. Noting the emergency element, we notified the hospital admin to take care of the request in case it was missed by every nurse on the floor.",
        },
        {
          heading: "Multi-Stakeholder Management",
          passage:
            "In order to offer end-to-end efficiency in patient care, we add digitalization in all aspects of patient touch-points. We built a web panel for the admin, an Android app for nurses, and a tablet mode HMS for patients. All the application versions were linked with each other in order to keep a real-time lookout for patients’ needs.",
        },
        {
          heading: "Multi-format Requests",
          passage:
            "In order to make the app inclusive for all the patients in varying states of health, we added three request creation ways: By using hands - patients could select the options on their tablet on the basis of their needs, By voice command, By using head gestures. We also added a child mode within the application which has children-specific emergency alerts using beacons.",
        },
        {
          heading: "Customizable Requests Options",
          passage:
            "To make care quick, we added 20 preset request options in the tablet ranging from needing toilet access help to emergency calls. However, noting the varying needs, we added the functionality of customizing the requests on patients’ tablets depending on their medical condition. ",
        },
      ],
    },
    {
      heading: "TopGrad",
      appname: "TopGrad - Employment Web App",
      image: 'url("/images/topGrad-Logo.svg")',
      topimage: "/images/topGrad-Logo.svg",
      languages: ["Angular", "Node Js", "Express", "Bootstrap", "Mango DB"],
      sub: "Job",
      passage:
        "TopGrad, is a platform that provides job listings and services for both job seekers and employers. The website boasts a meticulously crafted, dynamic, and mobile-first design, offering an intuitive and user-friendly interface for seamless job searching and application processes. ",
      clientrequirements:
        "Our Rytsense Tech team pitched to develop web app to provide job seekers with an intuitive and user-friendly interface, allowing them to effortlessly search and apply for jobs. On the other hand, employers could conveniently post job listings and manage applications. Our team crafted  features that set the application apart in the job listing realm. Our intuitive interface ensures a smooth job search and application process, enhancing the overall user experience. We ensured  seamless posting and management of job listings for employers, simplifying their recruitment workflows. Implementing a mobile-first design has been key, guaranteeing an exceptional user experience across all devices. These features solidify TopGrad as the go-to platform for both job seekers and employers",
      clientsrc: "/images/banner.png",
      imagearray: [
        "/images/iphone_2.084e3e8.png",
        "/images/iphone_3.4d01a88.png",
      ],
      feature1:
        "The web app has the features of Resume Building, Candiadate Assessment, Job search and Invitation, Recruitment solution, Profile Authentication, Application Tracking, Candidate Shortlisting, Artificial intelligence driven job exploration and Dispatch a job proposal",
    },
    {
      heading: "GATEWAY STREAM",
      appname: "GATEWAY STREAM - one-stop app for locals and visitors",
      image: 'url("/images/logodsfsd.png")',
      topimage: "/images/logodsfsd.png",
      languages: ["Android", "iOs", "Angular"],
      sub: "One Stop App",
      passage:
        "Transforming the Zimbabwe travel experience, providing a one-stop app for locals and visitors. The upgrade aimed to seamlessly offer diverse services, simplifying user access even during the global pandemic. ",
      clientrequirements:
        "As a player in the hospitality industry, the client recognized evolving travel trends and the time constraints faced by modern tourists. To address this, the clieny wants a comprehensive range of services through a single app, upgrading it with features to become a go-to solution for users in various situations, including the challenges of the global pandemic. The goal was to simplify access to diverse services for both incoming visitors and local citizens in Zimbabwe, eliminating the need for multiple app downloads.",
      clientsrc: "/images/1689749521152.jfif",
      imagearray: [
        "/images/unnamed.webp",
        "/images/unnamed (6).webp",
        "/images/unnamed (5).webp",
        "/images/unnamed (4).webp",
      ],
      feature1:
        "The modified app now enables users to discover top hotels, homestays, holiday packages, make ride bookings, order food online, shop for items and groceries, find ongoing events and venues, purchase insurance, and bid for hotel package deals. The incorporation of an e-commerce portal aimed to facilitate online shopping, particularly crucial during the pandemic. ",
    },
    {
      heading: "REIC",
      appname: "REIC - Real Estate Intelligence Cloud",
      image: 'url("/images/REIC-4-Custom.png")',
      topimage: "/images/REIC-4-Custom.png",
      languages: ["Angular"],
      sub: "REAL ESTATE",
      passage:
        "REIC (Real Estate Intelligence Cloud), developed in collaboration with AlixPartners, aims to assess the fair forward-looking value of real estate developments and the fair credit value of real estate developers – and to suggest underwriting overrides when lending to these counterparts.",
      clientrequirements:
        "Over the past years, real estate developers experienced a sort of “credit crunch” given the fear that banks will face again the default rates that characterized the sector after the Lehman crisis. Lending wise, there has been a decrease in the I-type error (banks stopped lending money to high-yield borrowers), but a considerable increase in the II-type error (banks stopped lending money to investment-grade borrowers with profitable opportunities). For this the platform aims to correct the II-type error when granting mortgages to real estate developers. By analysing tenths of data points related to a geographical area and others related to the credit risk of the real estate developer, the AI-system is able to output the forward-looking price of a planned real estate development and the adjusted creditworthiness of the borrower. By performing the “matchmaking” between the borrower and the asset, the platform suggests adjusted pricing and LTV (Loan To Value) for the specific deal.",
      clientsrc: "/images/REIC-1.png",
      challenges: [
        {
          heading: "Data Lake Size",
          passage:
            "The enormous amount of data being constantly ingested generates a sizable data lake growing constantly at a considerable speed. The challenge at this point was keeping the infrastructural costs low while enabling both speed and flexibility in the queries to the databases.",
        },
        {
          heading: "Predict the Future Value of The Assets",
          passage:
            "To have meaningful insights over the current and future market value of the RE assets, we tested several approaches of the most obvious and directly linked data sources, to some indirect and even apparently distant datasets, that showed to have a strong correlation with the evolution of the price in time.",
        },
        {
          heading: "Matchmaking Developers, Assets and Products",
          passage:
            "After we identified the insights concerning the Real Estate market value, we were challenged to find an evaluation framework to compare the borrower and train the model to gather match insights.",
        },
      ],
    },
    {
      heading: "Duelo Betting Platform",
      appname: "Duelo Betting Platform - An Online Sports Betting Platform",
      image: 'url("/images/duelo-mid.webp")',
      topimage: "/images/duelo-deck-1-320.webp",
      languages: ["Swift", "ROR", "Angular", "PostgraSql", "AWS"],
      sub: "Sports",
      passage:
        "Online Sport betting platform allows users to complete with their friends in legal, peer-to-peer challenges where they could win real rewards",
      clientrequirements:
        "Ralph, an American entrepreneur with a passion for sports, came up with the idea for a sports betting website at a time when betting was strictly regulated in the U.S. These regulations drove sports enthusiasts to offshore websites, and Ralph intended to capture a portion of that market with Duelo. The platform he envisioned would allow users to compete with their friends in legal, peer-to-peer challenges where they could win real rewards without risking their own money. In order to compete with offshore betting platforms where users could gamble actual money. When exploring potential tech partners to build the platform, Ralph was particularly impressed by Rytsense Tech. Then Rytsense Tech BA and UX teams worked alongside Ralph’s team to design a sticky, gamified, user-friendly platform",
      clientsrc: "/images/duelo-macbook.webp",
      feature1: `Browse upcoming sporting events for specific types of sports,
      Challenge a friend (or multiple friends),
      Easily create challenges using ready-made templates designed according to the rules and parameters for different types of sports,
      Grow their profile and tout their wins using a gamified system,
      Engage the community to make new friends
      `,
      feature2heading: "Receiving and Updating the Sports Data",
      feature2:
        "A sports betting site relies on a constant stream of data about sporting stats and game results, which must be received and interpreted by the platform to identify the winners of each challenge. The sports data—a purely static, informational feed—came from a system called Donbest. Rytsense Tech created a parsing engine that allowed granular control over which data to import into the platform. That, in turn, enabled users to view information about upcoming events, and the engine would determine the winner of each challenge as soon as the Donbest feed provided the results of a given match.",
      feature3heading: "Gamification via User Profiles",
      feature3:
        "One key component of the gamification strategy was to provide each user with a dynamic profile that displayed their successes and incentivized future engagement. Duelo’s gamification engine prompted users to complete activities to advance their profiles to higher levels, just as they would in a video game. The engine kept track of their activities and when they met all the requirements, they would advance to the next level. Rytsense Tech tied this data to a Hubspot-based workflow engine to ensure those events and activities triggered emails from the platform celebrating each achievement and guiding users to engage further. It also triggered alerts reminding users when an action was required on the platform.",
    },
    {
      heading: "Edplace",
      appname:
        "Edplace - Mobile App for Parents to Monitor Their Children’s Performance",
      image: 'url("/images/download (1).png")',
      topimage: "/images/download (1).png",
      languages: ["C#", "Laravel", "MySQL", "jQuery", "AWS", "Lumen"],
      sub: "Education",
      passage:
        "EdPlace is an at-home learning and revision app that enhances educational resources and exam preparation. EdPlace provides online assessments, interactive activities, and English, Maths, Science, and 11 Plus practice papers that cover the whole curriculum (from Year 1 to GCSE).",
      clientrequirements:
        "It was an exciting time for EdPlace, a growing educational technology (EdTech) platform that helps kids improve their skills in English, Science, and Mathematics. They’d been in business for a decade when, in 2014, they began to see rapid growth—with over 10,000 families using their system. Of course, growth always brings challenges, and CTO Will Lord worried that their legacy coding wasn’t up to the task of scaling to support both feature expansion or the increasing volume. They had started with a core idea and progressed with it, but it was not designed or built for rapid growth or scale. Selecting the right vendor was quite a long process. Rytsense Techs was the company that stood out from the outset. And all the way through to the details, it was clear that Rytsense understood what the client looking for. We were the ones that impressed them the most.",
      clientsrc: "/images/ipad-plus-mobile.png",
      feature1:
        "Allow users to access an enormous amount of content without getting confused,Offer a sleek, usable design without compromising functionality or User Experience (UX),Enable memory-efficient downloads and uploads so users experienced no lag,Engage students, keeping them motivated to learn and continue to use the app, Make it easy for reviewers, hired by EdPlace, to evaluate student performance and upload feedback in a variety of formats",
    },
    {
      heading: "OkLegal Connect",
      appname: "OkLegal Connect - a non-profit law firm",
      image: 'url("/images/OKLegalConnect.jpg")',
      topimage: "/images/OKLegalConnect.jpg",
      languages: ["Angular", "Apache", "PHP", "Javascript", "Python", "MySQL"],
      sub: "Services",
      passage:
        "Legal aid is the provision of assistance to people who are unable to afford legal representation and access to the court system. Legal aid is regarded as central in providing access to justice by ensuring equality before the law, the right to counsel and the right to a fair trial.",
      clientrequirements:
        "LASO is a state-wide non-profit law firm focusing on providing legal assistance with civil (non-criminal) cases to low-income individuals of the state. They wanted a platform to widen their reach and streamline their operations. With the growing need for civil legal aid, LASO was finding it difficult to serve more number of clients with their legacy methods of interviewing and sharing information. A technology solution seemed obvious, but it had to meet budget requirements. Rytsense Tech bespoke CRM application, tailored the clients needs, streamlines processes for bith thier builders and suppliers. We suggested ideas to maximize efficiency",
      clientsrc: "/images/image (1).png",
    },
    {
      heading: "Net Lease Trading platform",
      appname: "Net Lease Trading platform - modern Investment Brokerage firm",
      image: 'url("/images/BE.png")',
      topimage: "/images/download.jfif",
      languages: ["Angular", "Wordpress", ".Net frameworks", "MsSQL"],
      sub: "Trading",
      passage:
        "It will provide real-time visibility into the performance of property listings, view offers, track 1031 exchanges, and visualize data insights for principals and brokers to make better decisions.",
      clientrequirements:
        "The client wants an integrated solution that will provide real-time visibility into the performance of property listings, view offers, track 1031 exchanges, and visualize data insights for principals and brokers to make better decisions. The client approach Rytsense then we provided a net lease trading platform with personalized property and seller dashboards, 1031 exchange tracking, dashboards that offer comparable analytics, portfolio sales, and BOVs, revenue projection charts, and financial summaries. Rytsense tech delivers functionalities based on clients requirements.",
      clientsrc: "/images/BE.png",
    },
    {
      heading: "VIP Cars",
      appname: "VIP Cars - International rental car broker",
      image: 'url("/images/vipcars_fb_banner_en.jpg")',
      topimage: "/images/twitter_vipcars.png",
      languages: ["iOS"],
      sub: "Travel",
      passage:
        "VIPCars was a pioneer in online car rentals, connecting consumers to car rental services across the globe. It makes it easy and convenient for customers to compare rates from different suppliers and find the best value for their needs",
      clientrequirements:
        "VIPCars had launched before Smartphones became ubiquitous, and as mobile devices grew in popularity, the company’s leadership realized it was time to make their service more accessible to mobile users. VIPCars witnessed an increasing decline in visitors, which the management team attributed to the rise in mobile device users. In an effort to retain (and ultimately expand) their market share, VIPCars decided to create a powerful, highly usable mobile app. VIPCars decided to outsource design and development. Their search led them to the team at Rytsense Tech, who impressed them with their range and depth of experience. Rytsense Tech’ designers and developers asked probing questions and took the time to fully understand the online car rental industry. Rytsense Tech produced the app on an accelerated timeline, allowing VIPCars to quickly launch on the Apple Store and start winning back market share. ",
      clientsrc: "/images/app-mobile.png",
      feature1:
        "The main feature of this app is faster search appearances, this was achieved by having the app work directly with the engine that collates all rental car information (known as the CRBMS system). In other words, rather than having the app sit on top of the website, it would deliver results directly from the CRBMS.",
    },
  ];
  const navigate = useNavigate();
  const handleCaseStudyClick = (casestudy) => {
    navigate("/casestudies", {
      state: {
        heading: casestudy.heading,
        sub: casestudy.sub,
        passage: casestudy.passage,
        clientrequirements: casestudy.clientrequirements,
        clientsrc: casestudy.clientsrc,
        topimage: casestudy.topimage,
        imagearray: casestudy.imagearray,
        feature1: casestudy.feature1,
        feature2heading: casestudy.feature2heading,
        feature2: casestudy.feature2,
        feature3heading: casestudy.feature3heading,
        feature3: casestudy.feature3,
        challenges: casestudy.challenges,
      },
    });
  };

  return (
    <div className="mb-20">
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex flex-col gap-2">
          <motion.div
            className="relative"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className={`mt-7 text-3xl font-bold md:text-5xl md:mt-10`}>
              Case studies
            </h1>
            <h1
              className={`text-5xl font-bold top-0 md:text-7xl ${
                alignCenter ? "text-center" : ""
              }`}
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              {heading || "Studies"}
            </h1>
          </motion.div>
          <motion.div
            className={`flex flex-col gap-2 justify-between items-center md:flex-row ${
              alignCenter ? "justify-center" : ""
            }`}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <p
              className={`text-lg text-slate-800 ${
                alignCenter ? "text-center" : ""
              }`}
              style={{ textAlign: alignCenter ? "center" : "left" }}
            >
              We shed a light on our work and what goes behind the development
            </p>
            {showViewAllButton && (
              <div
                className="self-start p-4 flex gap-4 items-center"
                style={{ backgroundColor: "#3D5AA4", color: "#FFFFFF" }}
              >
                <button onClick={() => navigate("/casestudy")}>View All</button>
                <div>
                  <svg
                    width="35"
                    height="16"
                    viewBox="0 0 35 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928932C27.9526 0.538408 27.3195 0.538408 26.9289 0.928932C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM0 9L34 9V7L0 7L0 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        <div className="mt-5 flex gap-20 flex-wrap">
          {casestudies.map((casestudy) => (
            <div
              className="flex-1 basis-80 h-96 flex flex-col shadow-lg rounded-2xl relative"
              onClick={() => handleCaseStudyClick(casestudy)}
              style={{
                backgroundImage: casestudy.image,
                backgroundSize: "90%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="w-80 h-40 rounded-3xl bg-gray-200 p-5 flex flex-col justify-between"
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <h1 className="font-semibold text-center">
                  {casestudy.appname}
                </h1>
                {casestudy.languages ? (
                  <div className="flex gap-3 flex-wrap justify-center">
                    {casestudy.languages.map((lang, index) => (
                      <p
                        className="px-2 py-1 bg-white text-center font-normal rounded-lg"
                        style={{ fontSize: "12px", width: "72px" }}
                        key={index}
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
