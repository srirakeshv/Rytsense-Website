import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Prestashop() {
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
                Prestashop Website Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Why PrestaShop Can Catch The Attention Of E-commerce Businesses{" "}
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
              src="\images\service-img\prestashop-banner.png"
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
              Develop Your Ecommerce Website Using Prestashop
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              The main reason PrestaShop can be an attractive e-commerce
              business solution is that it is an open-source system. If you are
              an online business owner you naturally want to get a business
              solution that is priced as low as possible so that your overhead
              does not overwhelm you. With an open-source solution like
              PrestaShop, you need not pay anything to get it which is a boon
              especially if every cent saved counts.Rytsense Technology knows
              PrestaShop so we too can contribute to your e-commerce survival.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              If you are currently using some other e-commerce solution but are
              interested to try PrestaShop, you can always migrate easily to
              PrestaShop (as many other e-commerce merchants have done before
              you). The nice thing about migrating is that your valuable
              customer and sales data will remain intact until you have
              completed the transition. Data such as customers, catalog content,
              orders, payments, shipping details, preferences and business
              statistics will all be moved to PrestaShop without any data being
              lost along the way. No matter what e-commerce solution you are
              currently using your new PrestaShop store will be able to
              accommodate your business information.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              One advantage with moving to PrestaShop is that you gain
              simplified back office solutions along with a slew of new
              functions. We all know that your back office transactions are just
              as valuable as your front office activities so ideally, both will
              be managed well with your current e-commerce solution. If you’re
              not happy with how your back office is being managed right now,
              you can always shift to PrestaShop to get a better experience.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Because PrestaShop is easy to learn and use, you may save hours
              daily that would have gone towards going over your different
              e-commerce responsibilities. Time saved means the time that you
              can then devote to other business needs such as meeting with your
              sales force to find out how you can better serve your customers or
              checking out inventory to learn which products are moving fast.
              You might even be able to use those extra hours coming up with new
              products or services that you can offer to make your online
              business more competitive and profitable.
            </p>{" "}
          </motion.section>
        </div>
      </div>

      <Technology />
      <Footer/>
    </div>
  );
}
