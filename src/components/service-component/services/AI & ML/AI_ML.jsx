import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";

export default function AI_ML() {
  
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
                Machine Learning Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get the Best For The Best With Our ML{" "}
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
              src="\images\service-img\AI_ML.png"
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
          <p className="text-gray-600">
            {" "}
            Artificial Intelligence and Machine Learning are two emerging trends
            in technologies. Rytsense Technology caters to the prominent AI and
            ML to deliver high-end solutions. We provide intelligent and
            data-driven insights that help your AI vision convert into reality.
            Our company helps your business enhance and provide Image & Video,
            Text To Speech, Business Intelligence, Data Forecasting, Natural
            Language Processing, and Data Analytics. These tools enable you to
            operate with a large amount of data and valuable insight into the
            present and future predictions. The understanding will help you to
            stay ahead and gain a significant edge in competition. The data can
            be of institutional knowledge, internal, industry, and more.
            Artificial Intelligence and Machine are easily affordable and
            accessible, but you require a developer to manage all.
          </p>
          <p className="text-gray-600">
            Machine learning is a part of Artificial Intelligence and is
            considered the most evolving technology for business. With
            real-world insight, AI & ML help to build frameworks that support
            businesses to gain profit. The organization that leverages Machine
            Learning and Artificial Intelligence has witnessed the
            transformation in every aspect of the company. It has helped them to
            reshape multiple industries and support enterprises with strategic
            management. The implementation of the project becomes easier with
            these tools and research analytics.
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
          {" "}
          Industries We Serve:
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Healthcare</li>
          <li>Education</li>
          <li> Media & Entertainment</li>
          <li> E-Commerce</li>
          <li>Logistics</li>
          <li>Manufacturing</li>
          <li>Sports</li>
          <li> Banking & Finance</li>
          <li>Food Tech</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          AI & ML Service Offer To Include:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Recommendation Engine
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          One of the efficient services of Artificial Intelligence and Machine
          learning is the Recommendation Engine. The Engine helps to search and
          give you personalized suggestions, boost sales, and enhance user
          experience. It is frequently used in the e-commerce sector, lifestyle
          sector, and more.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Process Automation{" "}
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Process Automation is used for the automation of repetitive tasks. It
          includes several assignments where it helps to optimize resources,
          save time and be cost-effective. Thus, process Automation enhances
          business workflow and increases the execution speed of operations.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Voice-based AI </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Voice-based AI has ruled the market and increased the demand by
          applying it for several purposes. Siri, Alexa, Google Assistant, and
          others are famous examples of Voice-based personal Artificial
          Intelligent Assistants. We provide personalized assistants and
          customize them to engage the customers. Moreover, we ensure it to make
          it more dynamic.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Chatbots</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Another useful service of Artificial Intelligence and Machine learning
          is Chatbots. AI-enabled Chatbots enable to have a conversation through
          bots and make humans interact with the machine more engaging. The
          Chatbots help to solve the query and responsd 24/7. It is easy to
          function and very useful for the business.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Inventory Optimization{" "}
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Inventory Optimization helps to optimize and streamline productions.
          Artificial Intelligence allows businesses to figure out sales and
          overall consumption of the product. It helps to predict forecasts and
          improve the method of the supply chain. We help to create business
          strategies and improve the functions of businesses. Our team assures
          us to solve complex problems and enhance business productivity.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Image Processing</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Artificial Intelligence and Machine learning are used to recognize the
          image, object, or any other images. Image processing helps identify a
          particular thing, scale pictures, remember the image's pattern, and
          more. It is frequently used in the medical sector, security industry,
          and more. We present image processing services that provide accuracy.
          Our team offers exceptional image processing service that helps you to
          increase the growth of the business.
        </p>
        <h1 className="font-bold text-xl text-gray-800"> Object Recognition</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Object recognition is applied to identify appropriate objects from
          images and obtain valuable information for additional use. Therefore,
          it needs expanded use of Artificial Intelligence, Machine Learning and
          Neural networks. Smart search engines, identifying particular things,
          human image and video, distinguishing text in pictures, and more are
          object recognition applications. Object recognition makes human work
          more effortless.
        </p>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Why Choose Ryte'sence For Machine Learning?
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Improvised Technologies
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Artificial Intelligence and Machine Learning are the new technologies
          that are applied to the business. We present improved and latest
          technology to fulfill client's needs. The technologies are efficient,
          and our developers implement them impeccably.
        </p>
        <h1 className="font-bold text-xl text-gray-800">2) Dynamic Solution</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          With more than 10+years of experience, Rytsense Technology offers the
          best Artificial Intelligence and Machine learning technology. The data
          solution offers ML and AI's deepest range and provides a dynamic
          solution to enhance business.
        </p>
        <h1 className="font-bold text-xl text-gray-800">
          3) Enhance Productivity
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          We provide the best Artificial Intelligence and Machine learning
          technology that enhance the productivity of the business. Our talented
          professionals prepare effective strategies and plan accordingly to
          meet client's needs.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> 4) Deep Insights</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Whenever we obtain insights with the help of Artificial Intelligence
          and Machine Learning, we provide them clearly to the client. We aim to
          make client business grow and boost. We keep it open with our process,
          model, decision, and more. We interact with the clients and provide a
          deep insight into the project, process, model, and necessary
          information. Our team acknowledges the demand and tries to meet the
          business need.
        </p>
      </motion.div>
      <Technology />
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-slate-50 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              What Our Customers Are Saying
            </h2>
          </div>

          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        Rytsense Technologies built a high-performance app
                        that's endowed with a wide range of capabilities.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Arlenys Guillen
                        </div>
                        <div className="font-display text-sm text-slate-900">
                          (Co-Founder, Lela Beauty LLC)
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        Rytsense Technologies Provided excellent support in the
                        areas of website engineering and site optimization.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Mohmed Badr
                        </div>
                        <div className="font-display text-sm text-slate-900">
                          (Founder, Wachteggi)
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-gray-400 p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        I can confidently recommend Rytsense Technologies as a
                        dedicated and reliable supplier,and experts in their
                        field.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          Ivon MCColl
                        </div>
                        <div className="font-display text-sm text-slate-900">
                          (Dermatalogist Consultant)
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Technology/>
      <Footer/>
    </div>
  );
}
