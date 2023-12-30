import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";
export default function Saleforce() {
 
  return (
    <div>
      <Topbar/>
      <Header/>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="sm:text-center lg:text-left"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Salesforce Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Explore Vast Possibilities With Our Salesforce Development Service
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4"
          >
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="\images\service-img\salesforce.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="mb-8 border border-gray-300 shadow-xl  rounded-2xl p-15 ml-10 mr-10"
      >
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600">
            {" "}
            Customers are surely the biggest & most valuable assets of your
            company. And, to their requirements, the establishment of an
            effective CRM system becomes important now. The tools and services
            in Salesforce are designed to turn a business into an enterprise
            where every employee, vendors, and customer are together in a single
            platform helping an organization to function more efficiently than
            ever. With the growth of Salesforce’s cloud-based CRM and other
            advanced products, more and more organizations are adopting them to
            streamline their sales processes.
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" border border-gray-300 shadow-xl  rounded-2xl p-20 ml-10 mr-10"
      >
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Important Benefits of Salesforce Development
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>In-depth Account Planning</li>
          <li>Effective Time Management</li>
          <li>Better Team Collaboration</li>
          <li>Improved Accessibility</li>
          <li>Access to Customer Related Information</li>
        </ul>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Being a leading Salesforce development company, we provide optimized
          Salesforce development services from planning, designing, to executing
          complete Salesforce-based business solutions to businesses to help
          them deliver good productivity and higher earnings. At  Rytsense
          Technology, our team of expert Salesforce developers assures that the
          solutions given are highly useful, reliable, extensible, and
          maintainable on the Salesforce platform. Our Salesforce development
          services transform the way businesses communicate and manage their
          customers, products, partners, and even employees. The strong
          Salesforce developer tools like Force, Salesforce Lightning,
          Salesforce Lightning Inspector, Developer Console, and Workbench build
          quite a powerful scope for you to grow your versatility. We follow the
          agile methodology for complete Salesforce development services.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          Salesforce Development Company Offerings
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          {" "}
          Ryte'tense offers various types of service to improve blockchain
          development process.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Salesforce Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          A team of ryte'sence can help your organization in designing and
          implementing strong Salesforce-based solutions and get long-term
          advantages, whether you are a startup or a large Enterprise.
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Salesforce Implementation Consulting</li>
          <li>Force.com Development</li>
          <li>Force.com Integration and Migration</li>
        </ul>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Salesforce Mobile Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          As a top Salesforce development company,  Rytsense Technology can help
          you to increase Salesforce functionality to mobile devices and use
          Salesforce to its highest potential.
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Salesforce Mobile App Consulting & Developmen</li>
          <li>Mobile apps for Appexchange</li>
          <li>UI/UX Design Services</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Salesforce AppExchange Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          AppExchange can improve Salesforce's existing functionality or even
          implement additional features. With  Rytsense Technology Salesforce
          development services, you can build custom apps for AppExchange.
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>App Consulting</li>
          <li>App Development</li>
          <li>Lightning Apps</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Salesforce Lightning Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          As a leading salesforce consulting company, Ryte'sense can help your
          organization to take full advantage of Salesforce Lightning to make
          your Salesforce implementation more convenient and natural.
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Salesforce Lightning Consulting</li>
          <li>Salesforce App Development</li>
          <li>Component Development for Salesforce Lightning</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Integration With Third-party Solutions
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We help many businesses to connect this third-party software with
          their Salesforce Solution so that they can work more efficiently and
          actively.{" "}
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Integration Using Tools</li>
          <li>API Development</li>
          <li>Integration App Development</li>
          <li>Custom Integration</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Technical Expertise That You Will Get From Ryte'sence
        </h1>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Writing Apex Triggers And Bulkify Triggerss</li>
          <li>Overriding Default Behavior</li>
          <li>Future Methods And Batch Apex</li>
          <li>Record Sharing Through The Apex</li>
          <li>Integrating Yahoo UI/jQuery Components In Visualforce</li>
          <li>Inbound & Outbound Email Services</li>
          <li>Webservice Callouts And Building Web Services</li>
          <li>Scheduled Jobs</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Elevate Your Business To The Next Level With Ryte' sence
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Ryte'sence is a leading web and app development company with long
          years of industry experience in Salesforce development. We believe
          that innovation paves the path for success and provide high-quality
          Salesforce development services that can change the way you do
          business. We are here to transform the way businesses communicate and
          manage their customers, products, partners, and even employees. We are
          here to provide the best Salesforce services for you.{" "}
        </motion.p>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Experienced Salesforce Development</li>
          <li>Automate And Simplify Your Sales Processes</li>
          <li>100% Transparency</li>
          <li>Quality Work With Effective Results</li>
          <li>Focus On Complete Client Satisfaction</li>
          <li>Regular Showcase Of Work</li>
          <li>Innovative Approach</li>
          <li>Offer 24/7 Customer Support Channels</li>
          <li>Cut Down Cost On Infrastructure & Maintenance</li>
        </ul>
      </motion.div>
     <Technology/>
      <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl md:text-center">
      <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
    </div>
  
    <ul 
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
  

      <li>
        <ul  className="flex flex-col gap-y-6 sm:gap-y-8">
      
          <li>
            <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900"> Rytsense Technologies built a high-performance app that's endowed with a 
wide range of capabilities.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Arlenys Guillen</div>
                  <div className="font-display text-sm text-slate-900">(Co-Founder, Lela Beauty LLC)</div>

                </div>
                
              </figcaption>
            </figure>
          </li>
        
        </ul>
      </li>
      <li>
        <ul className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900"> Rytsense Technologies Provided excellent support in the areas of website 
engineering and site optimization.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Mohmed Badr</div>
                  <div className="font-display text-sm text-slate-900">(Founder, Wachteggi)</div>

                </div>
               
              </figcaption>
            </figure>
          </li>

        </ul>
      </li>
      <li>
        <ul  className="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                <path
                  d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                </path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">I can confidently recommend  Rytsense Technologies as a dedicated and 
reliable supplier,and experts in their field.</p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">Ivon MCColl</div>
                  <div className="font-display text-sm text-slate-900">(Dermatalogist Consultant)</div>
                </div>
                
              </figcaption>
            </figure>
          </li>

        </ul>
      </li>
     
     
    </ul>
  
  </div>
</section>
<Footer/>
    </div>
  );
}
