import React from "react";
import Topbar from "../../../common/Topbar";
import Navbar from "../../../common/Header";
import ResourceBlogHead from "../resourcebloghead/resourcebloghead";
import ResourceBlogNavigation from "../resourceblognavigation/resourceblognavigation";
import ResourceBlogParaContent from "../resourceblogparacontents/resourceblogparacontents";
import ResourceBlogPara2 from "../resourceblogpara2/resourceblogpara2";
import ResourceBlogBanner from "../resourceblogbanner/resourcebogbanner";
import OurPodcast from "../../../Homecomponent/our Podcast/ourpodcast";
import ResourcesContactHead from "../../resourcescontacthead/resourcescontacthead";
import ContactForm from "../../../Contact Us/cotactform/contactform";
import SocialMedia from "../../../Contact Us/social media/socialmedia";
import Footer from "../../../common/Footer";
import ResourceBlogTech from "../resourceblogtech/resourcebloftech";
import LatestBlogs from "../../../Homecomponent/Latestblogs/latestblog";
import { Helmet } from "react-helmet";

const ResourceBlogFull = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs-Rytsense Technologies</title>
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
      <ResourceBlogNavigation />
      <ResourceBlogHead />
      <ResourceBlogBanner />
      <ResourceBlogParaContent />
      <ResourceBlogPara2 />
      <LatestBlogs centerTitle={true} />
      <ResourceBlogTech />
      <OurPodcast />
      <ResourcesContactHead />
      <ContactForm />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default ResourceBlogFull;
