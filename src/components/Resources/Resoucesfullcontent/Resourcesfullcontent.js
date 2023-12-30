import React from "react";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import ResourcesHead from "../Resourceshead/Resourceshead";
import ResourcesTitle from "../resourcestitle/resourcestitle";
import ResourceBoxes from "../resourceboxes/resourceboxes";
import ResourcesContactHead from "../resourcescontacthead/resourcescontacthead";
import ContactForm from "../../Contact Us/cotactform/contactform";
import SocialMedia from "../../Contact Us/social media/socialmedia";
import ResourcePodcast from "../resourcepodcast/resourcepodcast";
import ResourceBlogs from "../resourceBlogs/resourceblogs";
import ResourcesBroucher from "../resourcesbroucher/resourcesborucher";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const ResourcesFullcontent = () => {
  return (
    <div>
      <Helmet>
        <title>Resources-Rytsense Technologies</title>
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
      <ResourcesHead />
      <ResourcesTitle />
      <ResourcesBroucher />
      <ResourceBoxes />
      <ResourceBlogs />
      <ResourcePodcast />
      <ResourcesContactHead />
      <ContactForm />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default ResourcesFullcontent;
