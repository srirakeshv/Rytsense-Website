import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Shopify() {
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
              <span className="block xl:inline">Shopify Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Built Robust E-commerce Website With Shopify Development.
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
              src="\images\service-img\shopify-banner.png"
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
              Shopify Development is a leading e-commerce solution that helps
              e-commerce to grow their business. Shopify has several beneficial
              features and has cutting-edge technologies to perform e-commerce
              websites. With Shopify development, a business can enhance their
              optimization, sales, marketing in the short overall experience of
              e-commerce business. It streamlines processes that improve
              business with high functionality. In addition, Shopify development
              creates an adequate and striking e-commerce store that attracts
              customers to the e-commerce website. Well-built e-commerce
              websites with the help of Shopify development can transform your
              business and enhance it in every way. The sale gain, seamless user
              experience, and much more is possible by using Shopify
              development. For the beginner, working on Shopify is easy;
              however, you need to hire Shopify developers who will add value to
              your brand for advance and numerous.
            </motion.p>{" "}
          </section>

          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Rytsense Technology crafts innovative, superior and compelling
              Shopify development services. Our Shopify development helps
              e-commerce businesses to make an efficient e-commerce website that
              provides a flawless user experience. We make the online store
              aesthetic and reliable to have a great experience on the
              e-commerce website. Our out-of-box solutions provide the best
              result and build a scalable e-commerce website with Shopify
              development service. Our team has expertise in Shopify development
              and contributes the finest website for the client and their
              business.{" "}
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
          Services We Offer In Shopify Development:{" "}
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
              Shopify Extension Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide Shopify Extension Development that includes
                extensions, themes, personalization, and more. The service helps
                expand your business into the marketplace with multiple themes,
                personalized experiences, and much more that help businesses
                grow. Our skilled developers ensure that it functions perfectly.
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify Store Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Shopify development provides an e-commerce store, and we offer
                Shopify store development that presents all e-commerce
                development solutions. It is possible with the help of
                configuration and installation to integrate third-party apps.
                The service is accessible depending on the client's need for the
                website.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify SEO Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide a Shopify SEO development service that helps your
                e-commerce business to stay on the top list. Our developers
                perform SEO development to make your business top on the search
                engine list. It is beneficial for startups and small businesses.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify Theme Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Shopify Theme development has immense features which help to
                boost your e-commerce business. We craft the mobile app, web
                into a theme tailored and keep it highly interactive and have an
                amazing feature according to the client's requirements.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify App Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide a Shopify app development service to establish your
                online store with Shopify Development. It is possible with
                integrations of third-party. There are multiple factors that you
                should look at in this Shopify app development service.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify SAP Integration
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Shopify SAP integration is a beneficial facility for the
                real-time business process. It will help you to keep a record of
                the orders, inventory, shipping, and more. Data automation helps
                to manage the orders with ease. In addition, it helps to make
                data and information functions easy and profitable.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify Mobile App Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rytsense Technology is a leading mobile app development company,
                and we provide the best scalable mobile app development with
                Shopify development. It helps to integrate with other devices
                and grow business by being on multiple platforms.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify QA And Testing
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide Shopify QA & testing to verify that the function of
                the web or application is working well or not. We conduct a test
                that shows the accurate result and help to make online stores
                100% bug-free and flawless for the user experience.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Shopify Maintenance And Support
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide Shopify maintenance and support service to solve all
                the issues. Our experts fix the error and audit the online store
                to check any problem arising. Shopify maintenance and support
                helps to sustain your superior online experience for the users.
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
