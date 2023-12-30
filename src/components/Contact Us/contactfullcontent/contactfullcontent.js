import React from "react";
import ContactHead from "../contacthead/contacthead";
import ContactForm from "../cotactform/contactform";
import Carousal from "../../Homecomponent/Logocarousal/Logocarousal";
import LocateUs from "../Loacte us/locateus";
import SocialMedia from "../social media/socialmedia";
import Topbar from "../../common/Topbar";
import Navbar from "../../common/Header";
import Footer from "../../common/Footer";
import { Helmet } from "react-helmet";

const ContactFullContent = () => {
  return (
    <div>
      <Helmet>
        <title>Contact us-Rytsense Technologies</title>
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
      <ContactHead />
      <ContactForm />
      <Carousal />
      <LocateUs />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default ContactFullContent;
