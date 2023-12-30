import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function Consulting() {
 
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
              <span className="block xl:inline">Salesforce Consulting </span>
              <span className="block text-indigo-600 xl:inline">Services</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hire Certified Salesforce Partners From  Rytsense Technology to
              Transform Engagement With Customers{" "}
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
              src="\images\service-img\cunsalting-banner.png"
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
            Salesforce is one of the best CRM Platforms that providing
            businesses an advantage you to transform how your company works,
            streamline the way you connect with possibilities and customers,
            track your sales, service, and marketing actions, optimize employee
            collaboration, and develop apps to fit business requirements. This
            top cloud-based CRM platform can transform the way your business
            operates, reinventing both customers and employee experience. With
            so many integrated apps, it takes a lot of knowledge and expertise
            to unlock the real benefits of Salesforce CRM in making success to
            your business.
          </p>{" "}
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
          Benefits of Salesforce
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Customer Information</li>
          <li>Account Planning</li>
          <li>Time Management</li>
          <li>Time Management</li>
          <li>Accessibility</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Our Salesforce Developers Have Specialization in,
        </h1>

        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Sales Cloud</li>
          <li>Community Cloud</li>
          <li>Commerce Cloud</li>
          <li>Services Cloud</li>
          <li>Pardot</li>
          <li>Salesforce IQ</li>
        </ul>
      </motion.div>
      <Technology/>
      <Footer/>
    </div>
  );
}
