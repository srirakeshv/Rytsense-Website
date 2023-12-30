import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Virtumart() {
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
              <span className="block xl:inline">Virtumart Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Virtuemart Offers Modules Components And Plugins That You Can Use
              For Your Shop.{" "}
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
              src="\images\service-img\virtumart-banner.png"
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
              How Virtuemart Differs From Other Open-source E-commerce Solutions
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              If you have heard of Virtuemart before you probably already know
              that it is an e-commerce solution available as an open-source
              system for interested online users. However, what you may not have
              known is that it is actually meant to be used with the Joomla!
              Content Management System. The two are meant to be used together
              because they are both based on PHP programming which makes them
              adaptable for use within a PHP/MySQL Environment. Virtuemart’s
              other claim to fame is that more e-commerce websites rely on it
              compared to popular e-commerce solutions like OpenCart,
              PrestaShop, an osCommerce. If you wish assistance in migrating to
              the Virtuemart system, you can always askRytsense Technology for
              their input.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              To migrate to Virtuemart you will need at least Joomla! 1.5
              version, PHP version 5.2 and version 5.3, and of course MySQL 5.
              Virtuemart itself has over 500 features that may make your online
              business stronger and more active by helping you generate more
              sales. Virtuemart offers modules, templates, components and
              plugins that you can use for your Virtuemart shop. Because
              Virtuemart works for the hand in glove with Joomla! you may use
              the Joomla! plugins for coupons, payments, shipments, computing
              procedures, and even custom product fields.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Virtuemart will accommodate your SEO requirements by supplying
              necessary meta tags, nested categories and offer the right
              description plus multiple media. Product descriptions can be short
              or long and will give the correct size and weight dimensions of
              the product being sold. Related products will also be offered as
              well as ratings and reviews that may influence the buying decision
              of your customers. Naturally, pricing is a very important
              consideration for your shopping audience so that too is provided
              with pricing, price display, payments, and shipments based on
              shopper groups. Interestingly, Virtuemart can help you compute the
              right payment based on the currency your customer prefers to use.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Of course, no e-commerce solution would be worth acquiring if it
              did not help you keep track of your product inventory. Virtuemart
              can help you monitor stocking or inventory, alert you when stocks
              are running low, and even give data about the virtual stock (which
              are products that were ordered but remain with you because the
              customer did not buy them).{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              All these features are important but could be a bit overwhelming
              to apply to your business. If you think you need a more
              experienced hand to guide you then consider hiringRytsense
              Technology to ease the way for you.{" "}
            </p>
          </motion.section>
        </div>
      </div>

      <Technology />
      <Footer/>
    </div>
  );
}
