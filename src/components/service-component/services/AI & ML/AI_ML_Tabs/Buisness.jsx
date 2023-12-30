import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Business() {
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
              <span className="block xl:inline">
                Buisness Intelligence Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hire Business Intelligence Experts For Accurate And Well-informed
              Decision-making
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
              src="\images\service-img\bi-banner.png"
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
            Business Intelligence is one of the essential services needed to
            analyze business activity. The service's purpose is to reach targets
            and goals in an optimized manner.Rytsense Technology offers
            outstanding business intelligence services that provide an
            end-to-end solution for a wide range of Business Intelligence and
            Analytics services. It helps to predict the likely expectation
            opportunity and develop perspectives. Descriptive analytics helps to
            measure the performance of the present and future. With the help of
            BI, the decision-making process enhances and presents the accurate
            interpretation of data. BI has excellent tools and technology that
            leverage the analytical skills of the business. The requirement for
            Business Intelligence comes with the concept that manages not to
            lend inaccurate and incomplete information. As a wrong decision can
            take a toll on your business, Business Intelligence ensures that
            data is precise and well-informed. Being a leading mobile app
            development company, we assist you to recognize emerging trends,
            accurate decision-making processes, data-driven tactics and find
            valuable insights.
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
          Our BI Experts Have Master Major BI Tools:
        </h1>

        <h1 className="font-bold text-xl text-gray-800"> Power BI</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a set of software services that help connectors work together to
          turn data into valuable insights. The tool is robust and transforms
          business structure better.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Tableau</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          BI applies Tableau to predict and understand the future. With the help
          of data and decide according to that. It is one of the most used tools
          in Business Intelligence{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> User Verification</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Suppose someone is looking for minor details for verification. In that
          case, object recognition makes it more accessible, and it makes
          everything on the spot and helps save time on the long going process.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Plotly</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a tool that helps perform analytics, statistics, and graphing
          for managerial work and makes future prediction easier. The gathered
          information in analytics is applied in several sectors and business
          fields.{" "}
        </p>
      </motion.div>
      <Technology />
      <Footer/>
    </div>
  );
}
