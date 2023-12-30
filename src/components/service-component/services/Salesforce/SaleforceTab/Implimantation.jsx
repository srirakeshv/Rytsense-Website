import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function Implementation() {
  
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
              <span className="block xl:inline">Salesforce Implementaion</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transform Your Business With Salesforce Implementation At
               Rytsense Technology
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
              src="\images\service-img\imple-banner.png"
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
            Salesforce provides innovative, cloud-based software-as-a-service
            solutions to its customers that enables the software to be highly
            adaptable and accessible from anywhere. Salesforce is fully
            customizable and can be made to work in whatever way a business
            desires. Salesforce increases your workforce productivity and
            enhances customer collaboration and ultimately their satisfaction.
            These days Salesforce is being used by the many businesses as its
            trusted cloud-based CRM that is utilized to join the managers,
            customers, and workforce collectively.{" "}
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
          Know The Benefits of Salesforce Implementation
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Accurate and Complete Information</li>
          <li>Sales Forecasting</li>
          <li>Saves Time</li>
          <li>Lead and Sales Team Management</li>
          <li>Improved Internal Processes</li>
          <li>Formation of Business Strategy</li>
        </ul>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
           Rytsense Technology is an experienced company in Salesforce
          Implementation. We have a skilled team of experienced consultants and
          implementation leads which will take you by Salesforce journey step by
          step. We will ensure streamlined business processes, identification of
          Salesforce features that can be used and many more that almost
          instantaneously reflect positively of your ROI.{" "}
        </motion.p>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          {" "}
          As part of our Salesforce implementation services, we start by helping
          you define the system role of Salesforce as an app in your enterprise
          technology and business ecosystem. With that role in mind, we set the
          feature list for Salesforce Implementation, make a plan for Salesforce
          Implementation and Integration and set the Salesforce Solution
          Architecture for your Salesforce Implementation project.{" "}
        </motion.p>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          {" "}
          At Rytsense Technology, we understand that every business is unique.
          We define ourselves as a forward-thinking CRM solution provider who
          allows creative business solutions that bring constant results.
          Partnering with us will guarantee that you are always one step ahead
          of your opponents through the active implementation of new CRM
          solutions that will increase productivity and assure long-term
          success.
        </motion.p>
      </motion.div>
      <Technology/>
      <Footer/>
        </div>
  );
}
