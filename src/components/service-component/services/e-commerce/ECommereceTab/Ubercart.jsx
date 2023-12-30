import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function UberCart() {
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
              <span className="block xl:inline">Ubercart Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Why Is Ubercart Right E-commerce Solution For Your Online Business{" "}
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
              src="\images\service-img\ubercart-banner.png"
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
              Reasons To Adopt The Ubercart E-commerce Solution For Your
              Business
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              If you have an e-commerce site, you may be looking for a great
              e-commerce software solution that can help make sales generation
              and data management easier. Would you consider Ubercart? Ubercart
              is used by e-commerce companies for practically anything required
              to drive business up while improving efficiencies. It is
              open-source so you need not pay for royalties and licensing – but
              it still delivers on great features, though.Rytsense Technology
              can assist you in learning how to optimize Ubercart for your
              business.
            </motion.p>{" "}
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Why is Ubercart the right e-commerce solution for your online
              business? First, it allows you to assign products to the right
              catalogs based on size so that customers know what you are
              offering and in what sizes for that price range. Second, it allows
              you to sell virtual items that are now popular in the online
              community. Third, if you are offering software, videos or music
              for sale to the public they can avail of your products as file
              downloads because you have Ubercart. Fourth, you can offer event
              registrations for purchase by your customers. Fifth, if your
              website is open to your special members only then Ubercart will
              permit you to offer site access for purchase to them – inclusive
              of the automatic renewal option and letting user access expire
              when needed. You can even sell your products on multiple sites if
              necessary. These are all advantages when you are in an online
              business because in e-commerce ease of use and offering the right
              functionality all affect the level of sales your business can
              generate. Your business survival depends on it.
            </p>{" "}
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Ubercart is also great to use because often you might have
              different ideas on how your e-commerce transactions should go.
              This means you may have to do a lot of trial and error before you
              deem your site to be perfect. Ubercart was designed for such
              repetitious actions so this may help your business improve as you
              try out new ideas. Ultimately you will find a set up that is
              perfect and that you can settle for but in case you want to change
              again in the future, Ubercart will accommodate your new decisions
              as well. Interestingly, if you are shifting from an old website to
              a more up-to-date website then Ubercart has the XML import/export
              feature. You can rely on this feature to easily move your
              customers, orders, products, and attributes to your new website or
              vice versa. If you need some assistance with the other Ubercart
              features you can always rely onRytsense Technology to guide you.{" "}
            </p>
          </motion.section>
        </div>
      </div>

      <Technology />
      <Footer/>
    </div>
  );
}
