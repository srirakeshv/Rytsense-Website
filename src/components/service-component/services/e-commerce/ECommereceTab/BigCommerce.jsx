import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function BigCommerce() {
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
              <span className="block xl:inline">BigCommerce Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              BigCommerce Gives You The Freedom To Terminate The Service At Any
              Time You Wish.{" "}
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
              src="\images\service-img\bigcommerce-banner.png"
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
              Why BigCommerce Can Help Your E-commerce Website Survive
              Competition
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              When you opt to use a BigCommerce Store, you gain some features
              that will help you in the e-commerce world. For example, your
              online store will look attractive to any demographic because
              BigCommerce offers a range of store themes that you can choose
              between and HTML/CSS based interface that you can customize as you
              wish. BigCommerce can make your e-commerce marketing campaign
              stronger by offering you necessary marketing tools (such as
              newsletters, coupons and promo campaigns). Because your store will
              be designed at the start for better search engine rankings, you
              may be pleased to find that you do get higher rankings after the
              switch to BigCommerce. Another great aspect is that you will not
              have to pay for hidden fees even as you are given access to
              multiple features that will help in e-commerce.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              With other e-commerce solutions, you are really on your own as you
              try to learn how to apply their features to your business.
              BigCommerce offers you a special team of experts called the
              Success Squad that can assist you in this. Plus you also have the
              option of hiring Rytsense Technology to speed up adaptation to
              BigCommerce. Before you launch your store, after you have launched
              your store, as you market your products and services, and as you
              experience a spike in sales – you have the Success Squad and
              Rytsense Technology watching your back for you so that business
              does not falter.
            </p>{" "}
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              With the BigCommerce system, you can literally sell anything you
              wish through your online store but still be able to raise sales to
              the right target market. You can choose the right business plan
              for your e-commerce needs, ranging from Bronze, Silver, Gold,
              Platinum to Diamond. Each plan will charge you a monthly fee
              starting at $24.95 per month for the Bronze plan and max out at
              $299.95 per month for the Diamond plan. Take note that there are
              no transaction fees that will give you a nasty surprise plus you
              can always check out the service for a free trial period of 15
              days. When you do decide to make the big switch to BigCommerce, be
              sure to have the right credit cards ready to pay for your plan
              (acceptable cards are JCB, American Express, MasterCard, and
              Visa). You won’t need to sign a contract because you are only
              charged for the month – this gives you the freedom to terminate
              the service at any time you wish.{" "}
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
