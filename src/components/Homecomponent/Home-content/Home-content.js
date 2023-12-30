import React from "react";
import HomeBanner from "../Home-banner/Home-banner";
import Carousal from "../Logocarousal/Logocarousal";
import Rytsense from "../Rytsense Technologies/Rytsense";
import Rank from "../Ranked/Ranked";
import Keyfeatures from "../Our Key Features/Keyfeatures";
import Partnercompany from "../Partnercompany/partnercompany";
import Clientfeedback from "../Clientfeedback/Clientfeedback";
import { Services } from "../Services offered/servicesoffered";
import WhoweWorkWith from "../Whoweworkwith/whowework";
import OurPodcast from "../our Podcast/ourpodcast";
import Partnershipmodels from "../Partnershipmodels/partnershipmodels";
import IndustriesWeServe from "../industriesweserve/industriesweserve";
import CaseStudies from "../Casestudies/casestudies";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import Mediacoveage from "../Mediacoverage/mediacoverage";
import SocialMedia from "../../Contact Us/social media/socialmedia";
import LatestBlogs from "../Latestblogs/latestblog";
import ResearchContent from "../Research/Research";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const Homecontent = () => {
  return (
    <>
      <Helmet>
        <title>Rytesensetech - Software Development Company</title>
        {/* GTM script in the <head> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11329970966"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11329970966');
          `}
        </script>
        {/* Viewport meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* GTM noscript iframe immediately after <body> */}
        <noscript>{`
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-11329970966"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        `}</noscript>
      </Helmet>
      <Topbar />
      <Navbar />
      <HomeBanner />
      <Carousal />
      <Rytsense />
      <Partnercompany />
      <Rank />
      <Services />
      <Keyfeatures />
      <Partnershipmodels />
      <IndustriesWeServe />
      <CaseStudies />
      <WhoweWorkWith />
      <OurPodcast />
      <Mediacoveage />
      <Clientfeedback />
      <LatestBlogs />
      <ResearchContent />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Homecontent;
