import React from "react";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import CaseStudyHead from "../casestudyhead/casestudyhead";
import SingleCaseStudyHead from "../singlecasestudyhead/singlecasestudyhead";
import SingleCaseStudyBody from "../Singlecasestudybody/singlecasestudybody";
import SingleCaseStudyclient from "../singlecasestudyclient/singlecasestudyclient";
import SingleCaseStudyPic from "../singlecasestudypic/singlecasestudypic";
import SingleCaseStudyFeatures from "../singlecasestudyfeatures/singlecasestudyfeature";
import SingleCaseStudyChallenge from "../singlecasestudychallenge/singlecasestudychallenge";
import SocialMedia from "../../Contact Us/social media/socialmedia";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const SingleCaseStudy = () => {
  return (
    <div>
      <Helmet>
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
      <CaseStudyHead color={true} />
      <SingleCaseStudyHead />
      <SingleCaseStudyBody />
      <SingleCaseStudyPic />
      <SingleCaseStudyclient />
      <SingleCaseStudyFeatures />
      <SingleCaseStudyChallenge />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default SingleCaseStudy;
