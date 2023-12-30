import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";

export default function Web_Cms() {
 
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
              <span className="block xl:inline">Web Developmenty</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A Roadmap To The Emerging And Effective Web And CMS Development
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium  text-white bg-gray-800 hover:bg-gray-600  rounded-2xl md:py-4 md:text-lg md:px-10"
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
              src="\images\service-img\web_cms.png"
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
        className="mb-8  p-10"
      >
        <div className="p-10 my-4 font-bold text-xl sm:text-xl mb-4 border border-gray-400 shadow-lg">
          The smartphone Apps have changed the definition of every day activity
          in human life. It has been an essential part of our lives and why not?
          We do almost everything with the help of an app. The world is
          connected with mobile apps. In this really techie era, Hyperlink
          Infosystem can help you to craft some excellent mobile application for
          your business & start-ups. We are the leading tailor made mobile app
          development company, serving finest apps across the globe.
        </div>
      </motion.section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="ml-10 "
      >
        <h2 className="font-bold text-2xl">Process We Follow:</h2>
        <p className="mb-5">How Our Experts Handle The Project Efficiently,</p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-10 border border-gray-300 shadow-lg rounded-2xl ml-10 mr-10"
      >
        <p className="mb-3 font-semibold dark:text-gray-900">
          <span className="font-bold">1) Planning :-</span>
          Gather all the information and plan the project, craft the idea for
          the website and CMS development.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          <span className="font-bold">2) Web Designing:-</span>
          Our front-end designers will craft a stunning and striking responsive
          website following the wireframe, UI/UX design to prototype.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          {" "}
          <span className="font-bold">3) Define Content:-</span>A website is
          incomplete without content. Thus, we will put informative content on
          the website and make it SEO-friendly.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          {" "}
          <span className="font-bold">4) Development :-</span>
          After deciding the website's objectives, it is time for development.
          The process is the pre-final stage of the website.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          {" "}
          <span className="font-bold">5) Testing:-</span>
          Our front-end designers will craft a stunning and striking responsive
          website following the wireframe, UI/UX design to prototype.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          {" "}
          <span className="font-bold">6) Deployment</span>A website is
          incomplete without content. Thus, we will put informative content on
          the website and make it SEO-friendly.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-900">
          {" "}
          <span className="font-bold">7) Post Deployment & Maintenance</span>
          After the website's launch, we will provide all support and answer
          every query after the deployment.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="mt-10 ml-10 mr-10 border border-gray-300 shadow-lg rounded-2xl p-20"
      >
        <h1 className="font-bold text-gray-800">
          {" "}
          The Technologies And Services We Use For Website & CMS Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Innovative and Advanced Technologies for the Website & CMS Development
        </motion.p>
        <h1 className="font-bold text-gray-800">WordPress Web Development</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our developer provides the best WordPress Web Development to create an
          efficient website.
        </motion.p>
        <h1 className="font-bold text-gray-800">PHP</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          {" "}
          With PHP, our proficient developers will deliver highly functional PHP
          websites to acquire the market.
        </motion.p>
        <h1 className="font-bold text-gray-800">Custom Web Development</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We provide an excellent customization service that delivers
          optimization and dynamic websites.
        </motion.p>
        <h1 className="font-bold text-gray-800">Drupal</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Get top-notch Drupal to receive beneficial information and insights.
        </motion.p>
        <h1 className="font-bold text-gray-800">CakePHP</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our CakePHP developer provides the best scalable website to boost your
          business.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          E-commerce And CMS Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The top development offers the top robust development service for
          creating a website.
        </motion.p>
        <h1 className="font-bold text-gray-800">API Development</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our core developers embrace API development to deliver the best
          insightful result.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          Progressive Web Application (PWA)
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          PWA facilitate reliable and robust development for the seamless
          experience in the website.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          A Perfect IT Service Provider For All Your Web Needs!
        </h1>
        <h2>Excellent Quality Delivered on Time</h2>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We deliver excellent quality at a rapid pace. Moreover, with the
          quality, we deliver on time and maintain our punctuality & discipline.
          We ensure that the project is delivered in high quality, which brings
          the best outcomes.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          Effective & Continuous Communication
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our experts are warm and keep effective & continuous communication
          with the client. We are oriented and keep the communication open, so
          the client knows the project & its entire process.
        </motion.p>
        <h1 className="font-bold text-gray-800">Full Confidentiality</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Ryt'sence Technology respects privacy and keeps the information and
          data full confidentiality. When the client trusts us, we maintain
          their faith alive by keeping the information fully confidential.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          Friendly & Cordial in Nature
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our web & CMS developers are friendly and cordial. Our team is always
          ready to help and happily solve all the issues of the client. We are
          passionately always there for our clients and their project.
        </motion.p>
        <h1 className="font-bold text-gray-800">Experienced Team</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our team holds years of experience in Web & CMS development. They are
          aware of the techniques, tools, and technology internally &
          externally. With the out-of-box approach, our team stands out at the
          top.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          Complete Technical Competency
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          We use the latest tools and technology and keep the clients updated
          about the process. We have complete technical competency and hold
          technical knowledge deeply.
        </motion.p>
        <h1 className="font-bold text-gray-800">Absolute Support</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          With the insightful knowledge of Web & CMS development, we provide
          absolute support to our clients. All technical glitches, bug issues,
          and doubts about the project are solved by our experts immediately and
          happily.
        </motion.p>
        <h1 className="font-bold text-gray-800">
          Why Choose Ryt'sence Technology
        </h1>
        <h2 className="font-bold text-xl text-gray-600">A Few Good Reasons:</h2>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Our team holds knowledge in completing the projected goals and makes
          it possible to mold the ideas as per the market demands. We do not
          just make a website; we design a platform that takes your business to
          another level. Our front-end designers blend the expertise, innovation
          & technology to design a masterpiece for you. Client satisfaction is
          what matters the most for us at Ryt'sence Technology.
        </motion.p>

        <ul>
          <li>- Higher ROI</li>
          <li>- Scalable and Reliable</li>
          <li>- Easy To Use</li>
          <li>- Shorten Risks</li>
          <li>- Ease Access</li>
        </ul>
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
