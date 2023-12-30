import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../.../../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function Drupal() {
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
              <span className="block xl:inline">Drupal Web Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Drupal Is An Open-source Framework Plus It Is Easy To Install
              Windows{" "}
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
              src="\images\service-img\drupal-banner.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4"
            >
              Why Many Organizations Are Dependent On The Drupal Content
              Management System
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              When you get the Drupal open-source CMS (content management
              system), you are actually following the footsteps of many
              well-known websites including those run by the US government and
              many corporations. However, even if you just want for your
              personal blog site it is possible to get this free CMS as a GNU
              General Public Licensed download.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              If you have used other CMS before, you may find that the Drupal
              core features have some aspects in common with other CMS. Some
              examples are the user account registration, user account
              maintenance, RSS feed, menu management, a method for customizing
              page layout, and even system administration. This means you might
              find it easy to adapt the Drupal for your needs no matter how
              simple or complex. A simple application of Drupal could be making
              a blog site with multiple users while a more complex application
              is developing a community discussion forum. This may be why this
              CMS is useful for important institutions like the US government.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              As a free CMS, the system is improved upon by the open-source
              community itself. Thus, you can get support from the community of
              users when there are aspects of the CMS that you want to amend or
              are puzzled about. It should be relatively easy to install it on
              your website as well as to manage it over time – but if you do
              encounter problems it may make sense to hireRytsense Technology to
              do the CMS installation and management for you. By hiringRytsense
              Technology you get the assurance that your CMS will function more
              smoothly thus preventing you from encountering downtime due to
              technical delays.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              It is important that if you want to rely on Drupal as your CMS
              that you have the right computing platform. This means you will
              need a PHP-based web server and a related database for your
              settings and content. You have to get the PHP 4.4.0 for the Drupal
              6 version, and at least a PHP 5.2.5 for the Drupal 7 version. Take
              note that Drupal is a multi-awarded CMS even if it is open source
              and continuously being developed by the Drupal user community. It
              is now used by over 910,000 websites as of August 2013. If you
              want to stay ahead of the pack, stay tuned for when the Drupal 8
              will be released – for now, that CMS version is still being
              developed.{" "}
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
