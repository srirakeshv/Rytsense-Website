import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function CodeIgniter() {
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
                CodeIgniter Web Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Exploit Our Power of CodeIgniter Framework for the Growth of your
              Business{" "}
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
              src="\images\service-img\codeignter-banner.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              CodeIgniter is one of the most famous and open source PHP
              development frameworks in the world of web development. It is
              based on MVC development model that helps to build dynamic and
              instinctual websites. Compared to other best frameworks
              CodeIgniter is fastest, easiest and works less like a framework
              and have a very interactive interface with developer-friendly
              tools. Its MVC architecture and flexibility allow you to get agile
              web apps while meeting budgetary limitations and deadlines.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              A good CodeIgniter PHP framework solution uses a small footprint
              to give excellent performance. Compatibility and zero
              configuration are the main parameters to rate an open source
              website. The framework is continually rising on the new heights
              because the council guarantees that constant development on this
              framework will nurture it further.{" "}
            </p>
          </motion.section>
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
        >
          Explore Our CodeIgniter Web Application Development Services:{" "}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-between p-10"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              1) CodeIgniter Web Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                AtRytsense Technology we offer best-in-class CodeIgniter Web
                Development services that help you to take your business to the
                next level.
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              2) Develop Web Portals with PHP CodeIgniter and MySQL
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Users can expand their online services globally with web portals
                with our CodeIgniter frameworks that make the people know about
                your growing business.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              3) CodeIgniter Social Networking Solution
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                As everyone knows, social media has become a most important part
                of the business & so we provide you with featured- packed social
                networking solutions with CodeIgniter.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              4) Web 2.0 Based CMS Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our developers atRytsense Technology build an efficient CMS,
                customize as you want with strong functionality streams within
                your time frame.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              5) CodeIgniter ECommerce/Shopping Cart Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rytsense Technology offers you with a huge range of shopping
                cart or E-Commerce solutions that assist you to maximize the
                ROI.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              9) Integration with third party API’ s
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our expert team integrates third-party services like payment
                gateways, email services, social media services, analytics, etc.
                with various APIs.{" "}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
