import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Reccom_Engin() {
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
              <span className="block xl:inline">Reccomandation Engine</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hire To Transform Your Business With Recommendation Engine{" "}
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
              src="\images\service-img\recc-banner.png"
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
          <h1 className="font-bold text-xl text-gray-800 ">
            What Is Object Recognition?
          </h1>
          <p className="text-gray-600 p-5">
            {" "}
            Recommendation Engine has become one of the most adaptable services
            for mobile and web development. For now and then, companies need a
            recommendation search engine to increase their brand awareness and
            businesses. It shows the suggestion of product, service, website,
            and all based on the data analysis. The data is conducted from the
            factors like history of the users, click, behavior, preferences of
            the users. It indicates what the users want and shows solely- what
            they might be interested in. The recommendation engines also help to
            increase customer loyalty as the search engine makes their work
            easy. The more options they get, the more they are interested in
            your particular product, business, service, and others.
          </p>
          <p className="text-gray-600 p-5">
            In this efficient way, the companies can provide customized and
            personalized information and solutions to the services. Indeed, it
            is relevant to the users and helps to increase the revenue of the
            business. The recommendation engines enhance the user experience,
            growth in profits, and many other essential factors. Click-Through
            Rates is possible with the recommendation and concluding it
            positively affects customer satisfaction and remembrance. The
            Recommendation Engine is expanding in multiple industries and
            sectors because of its brilliant factors. The engine understands the
            user's choices, preferences, habits, and much more with the data.
            The data further also helps to generate analytics and accurate
            decision-making.{" "}
          </p>
          <p className="text-gray-600 p-5">
            The recommendations engine leverages the data with the help of
            Machine Learning and Data Analytics. It enables users to watch and
            select and drive the power of their choice. However, it is helpful
            for the easy to search and easy to get work for the users. The
            Recommendation Engine has deep-driven insight, which eventually
            built future data into the predictive analysis.
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
          Types Of Recommendation Engine:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Content-based Filling
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          These algorithms provide suggestions based on crowd-sourced data, with
          similarities defined by customer affinity. Various models have been
          developed to handle different sorts of attribute data. Because the
          method necessitates the use of market research data, no user ratings
          are required. The content-based filling is essential as there is no
          service, solution, product, website, or anything without content. A
          content-based filling is a vital factor in the recommendation search
          engine.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          2) Demographic-based Filling
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The users are classified based on their characteristics and make
          suggestions based on a set of demographic groups. It creates
          straightforward demographic recommendation algorithms that are simple
          to apply. Because the method necessitates the full implementation of
          market research data, no user ratings are necessary. It helps to
          target a particular audience, and it reaches more relevant users. The
          demographic-based filling helps to achieve the goal faster and
          accurately.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          3) Collaborative Filtering
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The goal of collaborative filtering is to gather and analyze user
          behavior, activities, and preferences to forecast what a person will
          like based on their resemblance to other users. A matrix-style formula
          is used in collaborative filtering. Collaborative filtering has the
          advantage of not requiring the content to be analyzed or understood
          products, films, and it just selects products to recommend depending
          on the user's profile. The analysis influences every business and
          makes it profitable.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> 4) Hybrid Engine</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          A hybrid recommendation engine considers both meta and content-based
          data when making recommendations. As a result, it outperforms both in
          terms of search. Natural language processing tags can be generated for
          each product or item in a hybrid recommendation engine, and vector
          equations are utilized to calculate product similarity. Users can be
          recommended things through a collaborative filtering matrix based on
          their actions, activities, and preferences. A hybrid recommendation
          engine, such as Netflix,is an excellent example. It considers both
          the collaborative user's interests and the descriptions or
          characteristics of the content-based movie or show.{" "}
        </p>
      </motion.div>
      <Technology />
      <Footer/>
    </div>
  );
}
