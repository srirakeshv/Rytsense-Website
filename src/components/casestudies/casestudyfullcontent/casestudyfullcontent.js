import React from "react";
import CaseStudyHead from "../casestudyhead/casestudyhead";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import CaseStudies from "../../Homecomponent/Casestudies/casestudies";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const CaseStudyFullContent = () => {
  return (
    <div>
      <Helmet>
        <title>Case study | Rytsense Technologies</title>
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
      <CaseStudyHead />
      <CaseStudies
        showViewAllButton={false}
        alignCenter={true}
        heading="Case Study"
      />
      <Footer />
    </div>
  );
};

export default CaseStudyFullContent;
