import React from "react";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import IndustriesHead from "../industrieshead/industrieshead";
import IndustryHeading from "../industryheading/industryheading";
import IndustryAppServices from "../industryappservices/industryappservices";
import IndustryMid from "../industrymiddlepara/industrymid";
import IndustryFeatures from "../industryfeatures/industryfeatures";
import IndustryDevelopmentProcess from "../industrydevelopmentprocess/industrydevelopmentprocess";
import IndustryFaq from "../industryfaq/industryfaq";
import Partnercompany from "../../Homecomponent/Partnercompany/partnercompany";
import IndustryTechnology from "../industrytechnology/industrytechnology";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const IndustriesFullContent = () => {
  return (
    <div>
      <Helmet>
        {/* GTM script in the <head> */}
        <title>Industries-Rytsense Technologies</title>
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
      <IndustriesHead />
      <IndustryHeading />
      <IndustryAppServices />
      <IndustryMid />
      <IndustryFeatures />
      <IndustryDevelopmentProcess />
      <Partnercompany />
      <IndustryTechnology />
      <IndustryFaq />
      <Footer />
    </div>
  );
};

export default IndustriesFullContent;
