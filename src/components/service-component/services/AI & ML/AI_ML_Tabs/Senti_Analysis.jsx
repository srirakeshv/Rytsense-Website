import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Senti_Analysis() {
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
              <span className="block xl:inline">Sentimental Analysis</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Understand Behavioural Aspects With Sentimental Analysis
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
              src="\images\service-img\senti-banner.png"
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
            It is a computer vision technique to detect and identify objects in
            images and video. It is a method driven by Artificial Intelligence
            and Machine learning. Facial practices like image, video, and other
            minor things are detected with object recognition. Through computer
            vision techniques, you can perform analytics.
          </p>
          <p className="text-gray-600 p-5">
            By understanding the behavioural changes, the company can tailor
            products and services according to that- to match the needs. Thus,
            it shifted to be a necessary tool to monitor and know the opinion.
            The Sentimental Analysis is a robust process for decision-making and
            predicts further analytics. Several advantages can be gain through
            Sentimental Analysis. The service analyzes the data, customer
            reviews, feedback, and other media source, from which data
            questionnaires are prepared for analytics. It enhances the
            performance of the businesses.
          </p>{" "}
        </div>
        <p className="text-gray-600 p-5">
          Our experienced team has deep knowledge and understands the insights
          on Sentimental Analysis. We bring the best accurate and specific data
          that helps you to make an efficient decision. Rytsense Technology will
          help you to analyze the information in real-time with effective and
          efficient latest tools. It benefits to leverage human intelligence and
          behaviour by the message and collected data. We set an algorithm that
          extracts relevant keywords and sentences based on human behavior,
          preferences, and words prediction. Rytsense Technology makes it
          possible to maintain the enhance the precision of the search work
          without any additional work. We provide domain expertise and analysis
          in multiple languages so that different languages and industries can
          predict excellent results. Our team ensures quality and outcome with
          sentimental analysis.
        </p>
      </motion.section>

      <Technology />
      <Footer/>
    </div>
  );
}
