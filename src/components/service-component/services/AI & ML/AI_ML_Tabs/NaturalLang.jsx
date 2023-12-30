import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function NaturalLang() {
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
                Natural Languge Processing
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Classify The Identification And Analyze With Natural Language
              Processing (NLP){" "}
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
              src="\images\service-img\lang-banner.png"
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
        <div className="p-10 my-4 ">
          <p className="text-gray-600 p-5">
            {" "}
            Natural Language Processing is increasing rapidly because of its
            method and concepts deployed in various new language technologies.
            It is a set of Artificial Intelligence that empower computers to
            understand natural languages. Natural Language Processing is a
            medium for the words and sentences used to communicate with humans.
            It allows you to assist handwriting identification, predictive text
            support, machine translation, and much more. Natural Language
            Processing services are based on text analytics and solution
            services, and the service leverages information to analyze the text
            for performing recognition and automation. The language helps to
            create value and facilitate power to the businesses.
          </p>
          <p className="text-gray-600 p-5">
            It is the best-computerized approach to analyze, discover, and
            understand the human language and assist the developers in following
            the framework and executing the task accordingly. It also helps them
            organize tasks like recognizing entities, reviewing automatically,
            identifying speech, understanding the sentiments, and other topics,
            which helps the company perform better.{" "}
          </p>
          <p className="text-gray-600 p-5">
            Natural Language Processing enables machines to comprehend how
            humans communicate, not just in words but also in concepts and their
            connections to generate meaning. The algorithmic libraries of NLP
            are structured so that they have been used to create blocks and
            develop an application for syntactic and grammatical analysis
            techniques in real-time.
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
          NLP Solution We Offer:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Text Categorization
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a classic technique to categorize text. With Machine Learning,
          the tasks have become extremely quick and straightforward and provide
          the best result.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Sentiment Anlysis</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Sentiment Analysis shows the approach, aspect, perspective, and other
          factors of humans. Natural Language Processing is incomplete without a
          sentiment Analysis Solution, and it tailors every step of the process
          with human behaviour.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Intent Classification
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The Intent Classification service is critical for training and
          building chatbots, virtual assistants, and other human-machine
          interaction systems. It is a method to support businesses in
          interpreting the conversation's intent accurately.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">Entity Recognition</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Entity Recognition is a technique for identifying and classifying
          various items in the text. It may extract data from any text, such as
          a web page, a piece of news, or social media content. It has become an
          imperative step for several businesses.{" "}
        </p>
      </motion.div>
      <Technology />
      <Footer/>
    </div>
  );
}
