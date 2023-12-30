import React from "react";
import Service from "../../components/service-component/service-content/Service";
import ServiceBanner from "../../components/service-component/service-banner/ServiceBanner";
import Header from "../../../src/components/common/Header"
import Footer from "../../components/common/Footer";
const ServicePage = () => {
  return (
    <div>
      <Header/>
       <ServiceBanner />
      <Service />
     <Footer/>
    </div>
  );
};

export default ServicePage;
