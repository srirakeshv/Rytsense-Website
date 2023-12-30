import React from "react";
import Topbar from "../../../common/Topbar";
import Navbar from "../../../common/Header";
import Footer from "../../../common/Footer";
import LatestBlogs from "../../../Homecomponent/Latestblogs/latestblog";
import OurPodcast from "../../../Homecomponent/our Podcast/ourpodcast";
import ResourcesContactHead from "../../resourcescontacthead/resourcescontacthead";
import ContactForm from "../../../Contact Us/cotactform/contactform";
import SocialMedia from "../../../Contact Us/social media/socialmedia";
import ResourceTechNewsNavigation from "../resourcetechnewsnaviagtion/resourcetechnewsnaviagtion";
import ResourceTechNewsHead from "../resourcetechnewshead/resourcetechnewshead";
import ResourceTechNewsPara from "../resourcetechnewspara/resourcetechnewspara";
import ResorceTechNewsImage from "../resourcetechnewsimage/resourcetechnewsimage";
import { Helmet } from "react-helmet";

const ResourceTechNewsFull = () => {
  return (
    <div>
      <Helmet>
        <title>tech News-Rytsense Technologies</title>
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
      <ResourceTechNewsNavigation />
      <ResourceTechNewsHead />
      <ResorceTechNewsImage />
      <ResourceTechNewsPara />
      <LatestBlogs centerTitle={true} />
      <OurPodcast />
      <ResourcesContactHead />
      <ContactForm />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default ResourceTechNewsFull;
