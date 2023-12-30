import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Forcasting() {
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
              <span className="block xl:inline">Data ForCasting</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Predict The Future Of Business With Data Forecasting
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
              src="\images\service-img\forcasting-banner.png"
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
            Data and forecasting are the two factors that have become essential
            for performing businesses. Hence, Artificial Intelligence and
            Machine Learning make it easier by providing Data Forecasting. It
            helps you to predict the upcoming future event. Data Forecasting is
            a method of generating current and past data to obtain insightful
            and actionable information. Eventually, it helps businesses to make
            better decisions and enhance decision-making.
          </p>
          <p className="text-gray-600 p-5">
            The real-time data will decrease uncertain risks and create more
            opportunities. Data Forecasting boosts your business by collecting
            data, visualization, analysis, and more to grow reliability. It will
            help to understand the behavior, preferences, and actions of the
            users. Data Forecasting will support businesses to adopt the
            necessary development and innovation. Data Forecasting sums up all
            present and past information to predict the business future.Rytsense
            Technology provides exquisite Data Forecasting services to enhance
            and boost work. The prediction has become easier and faster with
            Data forecasting.{" "}
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
          Various Techniques And Methods Of Data Forecasting:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Time-Series Analysis
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It emphasizes time to time data and information. The Analytics is
          prepared based on some time. It has limited resources, and the result
          for the analysis is for a short time.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          2) Qualitative Technique
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is for the experts who like to measure in a few sections or some
          area. The information and data might not be in a huge amount, but it
          gives you a qualitative basis. The events are longer and
          time-consuming; but worth it.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          WhyRytsense Technology For Data Forecasting?
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Rytsense Technologyteam will help you create a structured flow from
          data to deployment, the best method of Data Forecasting has
          performed.Rytsense Technology focuses on reducing risk management and
          implementing what-if situations into consideration as well. Our
          solution supports data-driven growth and scalable improvement.Rytsense
          Technology delivers the best and provides valuable data to create
          business strategies and decisions efficiently. Our team strategies
          have proved to present accurate and beneficial insight to the
          business.Rytsense Technology analytics and developers have expertise
          in market analysis and creating proficient development models that
          help companies move forward.{" "}
        </p>
      </motion.div>
      <Technology />
      <Footer/>
    </div>
  );
}
