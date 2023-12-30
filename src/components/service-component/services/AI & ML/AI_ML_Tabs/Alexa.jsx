import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Alexa() {
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
              <span className="block xl:inline">Alexa Skill Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transform Your Business Experince with our Voice Enable Alexa
              Service{" "}
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
              src="\images\service-img\alexa-banner.png"
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
        className="mb-8 border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10"
      >
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600 p-5">
            {" "}
            Alexa is Amazon’s voice-control system. It allows you to speak your
            wishes to a smart speaker and fulfilled it. Starts with simple ones
            like dimming your lights or play music tracks. With the voice
            responsiveness facility user don’t require to press any buttons so
            just with some trigger words, it can be set to perform an action.
            Voice assistants have transformed the way businesses produce a
            personalized user experience to the target audience.
          </p>
          <p className="text-gray-600 p-5">
            At Rytsense Technology, we raised by getting well-versed in
            IoT-based mobile app development and Alexa skill development. Our
            courage in these sought-after technologies enables us to perform
            Alexa-enabled commands in the clients’ solutions. Our complete Alexa
            skills integration not just to helps them to voice their business
            but also improve their processes and enhances the customer
            experience.{" "}
          </p>
          <p className="text-gray-600 p-5">
            We have a team of expert IoT developers that can produce as per the
            client’s idea according to Alexa’s policy guideline. Our team
            provides cost-effective solutions to our client’s business demands
            and we make sure the skill set to meet the standard security
            demands. AtRytsense Technology, our team is extremely excited for
            the opportunities that smart speakers and voice technology present
            and are even more happy to be at the forefront of Alexa skill
            development.
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10 p-16"
      >
        <h1 className="font-bold text-xl text-gray-800">
          Our Alexa Skilled Development Services
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Custom Skill Development
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          At HLIS, we create natural and engaging voice experiences with
          custom-built Alexa interaction models by using our Alexa skills.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Alexa For Home Automation
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Our experienced developers make smart solutions that use
          conversational Artificial Intelligence. We have a great skill to
          integrate the current smart home systems with Alexa.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          Alexa For On-demand solution
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          We assure that your customers can book appointments, place orders, or
          book cabs with amazing voice commands given to Alexa.Rytsense
          Technology team integrate your on-demand business model with Alexa to
          get the benefits of smart devices.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">Alexa Strategy</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          With modern techniques of voice-based SEO like geotagging,
          question-based queries and much more. We efficiently grow your
          business rankings.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Integration With ERP Systems
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          We allow voice-driven management of business operations that draws
          live data from your ERP system, with the integration of Alexa skills.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> AWS Lambda</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The familiarity with AWS Lambda service mandates in order to create
          robust and dynamic Alexa skills and we are well versed in AWS Lambda
          service.
        </p>
      </motion.div>
      <Technology />
      <Footer/>
    </div>
  );
}
