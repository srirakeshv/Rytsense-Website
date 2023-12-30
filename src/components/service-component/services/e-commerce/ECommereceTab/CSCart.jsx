import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function CSCart() {
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
              <span className="block xl:inline">CSCart Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Develop Business Websites With Our Cs Cart Development{" "}
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
              src="\images\service-img\cscart-banner.png"
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
              Why Cs-cart Is Called A Shopping Cart Solution For Any E-commerce
              Business
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Cs-Cart is called a Shopping Cart Solution rather than simply an
              e-commerce solution because the aim of the Cs-Cart engineers is to
              promote the customer shopping experience. Thus, by calling it a
              shopping cart solution Cs-Cart engineers want your business to
              become known for having the right products and services to sell
              that customers really want. Cs-Cart is offered as an open-source
              code system meaning you have the added freedom of customizing the
              source code as your business requires if that is what you require.
              At the same time, the Cs-Cart Store you set up can be adjusted and
              designed for you by the Cs-Cart people for a certain fee. (Take
              note,Rytsense Technology can help you with the source code
              programming if coding is not your strength).{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              One of the key benefits of signing up with Cs-Cart is that you get
              updated and correct shipping information via the manual shipping
              features of its shopping cart software. Cs-Cart can be used with
              real-time information from trustworthy carriers including DHL,
              Australia Post, Canada Post, USPS, and FedEx. This way you
              minimize customer complaints about lost shipments or inaccurate
              shipping quotes which translate to more customer satisfaction.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              At the same time, you can also control the flow of and access to
              sensitive information within your own e-commerce business. You
              want some employees left out of the loop? No problem, this is
              doable. Want to limit access to data that only you should see?
              Yes, this too is possible with the Cs-Cart software. For security
              purposes, you will require a server adjusted for SSL and that has
              the right certificate installed on it.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Despite this emphasis on accuracy of data and sticking to the
              right security features, Cs-Cart will allow you to get great SEO
              benefits such as developing dynamic URLs based on static URLs. You
              also have the option of putting keywords and meta tags within your
              online store pages. This will help your customers gain word about
              your company and anything you want to sell to the public.
            </p>{" "}
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Despite the open-source nature of this shopping cart software, you
              might be hesitant to migrate to it because you are not strong in
              programming code or are more experienced in the industry that you
              are in. No worries – just contactRytsense Technology so we can
              take steps to do what is needed for your business to adapt to the
              Cs-Cart solution today.
            </p>{" "}
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
