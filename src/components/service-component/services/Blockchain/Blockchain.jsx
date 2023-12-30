import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";

export default function Blockchain() {

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
              <span className="block xl:inline">Blockchain Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hire The Expert Development Team of Blockchain Technology!
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
        className="mb-8  border border-gray-200 shadow-2xl rounded-2xl"
      >
        <div className="p-10 my-4 mb-4">
          <h1 className="font-bold text-2xl mb-5">What is Blockchain?:</h1>
          <p className="text-gray-600">
            {" "}
            In simple words, the blockchain is a unique distributed record that
            stores data and verifies its integrity. By using a different set of
            cryptography based technologies, Blockchain assures that transaction
            continued into the blockchain database which is stable.
          </p>
          <h1 className="font-bold text-2xl mt-5">Blockchain Development:</h1>
          <p className="text-gray-600">
            {" "}
            Nowadays Blockchain has become most discussed topic around many
            businesses, especially in the IT Field. This technology has made a
            new gateway for payments which is extremely secure. A blockchain is
            an excellent form of Database storage system, which uses records to
            store data or information. These records or blocks get copied
            automatically with the mechanism of cryptography providing a more
            secure data storage platform. This means, your data is stored
            securely in multiple areas, reducing the overall cost of data
            storage. The blockchain is the technology which supports the
            cryptocurrencies and Digital currencies. So, Businesses having a
            huge amount of big data can hire Blockchain developers to create new
            and more efficient business processes.
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="p-20 ml-10 mr-10 border border-gray-200 shadow-2xl rounded-2xl"
      >
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Advantages of Blockchain Technology
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          Innovative and Advanced Technologies for the Website & CMS Development
          <li>Efficiency</li>
          <li>Transparency</li>
          <li>Trust</li>
          <li>Flexibility</li>
        </ul>
        <h1 className="font-bold text-xl text-gray-800">
          Ryte'tense - Blockchain Development Company
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Being one of the leading web and mobile app development company, we
          put together the expert team to a board that helps to build
          Blockchains. Our multi-disciplined domain experts team which provides
          an accurate and holistic client experience by blockchain development
          lifecycle. We made a framework of blockchain service which
          successfully takes artificial Intelligence, data analysis, IoT and web
          security.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">Services We Offer,</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          {" "}
          Ryte'tense offers various types of service to improve blockchain
          development process.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          Smart Contract Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          In this service, we create a digital contract to secure your
          transactions in the blockchain or provide an insightful audit of
          current contracts.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Advantages of Blockchain Technology
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          Advantages of Smart Contract Development
          <li>Automated Monitoring</li>
          <li>Transparent Recordkeeping</li>
          <li>Reducing Middlemen Costs</li>
          <li>Automatic Fulfillment of Orders</li>
        </ul>
        <h1 className="font-bold text-xl text-gray-800">Drupal</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Cryptocurrency Wallet Development
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">CakePHP</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It poised to reach all forms of virtual payments and we have the
          technical expertise to build and maintain them for your application
          requirements.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          Platform we used for Cryptocurrency Wallet Development,
        </h1>
        <ul class="flex flex-wrap p-10 list-disc">
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Ripple</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">NEM</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Dogecoin</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Peercoin</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">ZCash</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Augur</li>

          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Bitcoin</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Bitcoin Cash</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Reducing Middlemen Costs</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Dash</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Etherium</li>
          <li class="w-full sm:w-1/2 md:w-1/3 p-4">Monero</li>
        </ul>

        <h1 className="font-bold text-xl text-gray-800">
          Crypto Exchange Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It explores new monetization methods by using our development services
          to put collectively a vast crypto exchange for you.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          Advantages of Crypto Exchange Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
            <li>High Performance</li>
            <li>Private</li>
            <li>Open Source</li>
            <li>Reliable</li>
            <li>Secure</li>
          </ul>
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">Ethereum App</h1>

        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It is the favored choice for smart crypto investors. With reliable and
          rapid transactions, Ethereum apps are a part of the base.
          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10 flex flex-row space-x-7 ">
            <li>Coinbase</li>
            <li>Exodus Wallet</li>
            <li>Jaxx Wallet</li>
            <li>ETHAdress</li>
            <li>Reliable</li>
            <li>MyEther Wallet</li>
          </ul>
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">Hyperledger</h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Hyperledger provides stakeholders the knowledge that they are working
          within an atmosphere that assures that the process will be as
          trustworthy and transparent as the complete project.
          <h1>Features of Hyperledger</h1>
          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10 flex flex-row space-x-7">
            <li>Collaboration</li>
            <li>Scalabilityt</li>
            <li>Longevity</li>
            <li>Security</li>
            <li>Transparency</li>
          </ul>
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          Supply Chain Development
        </h1>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          With the supply chain service, we can Improve transparency and
          traceability and reduce administrative costs. It covers the entire
          lifecycle of a block of data-from production place, to a warehouse,
          logistics, retail, and end consumers.
        </motion.p>
        <h1>Role of Blockchain</h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Improve Inventory Management</li>
          <li>Eliminate Manual Errors and Frauds</li>
          <li>Reduced Courier Costs</li>
          <li>Enhance Customer-Retailer Relationship</li>
        </ul>
        <h1 className="font-bold text-xl text-gray-800">
          Why You Choose Ryte'tense For Blockchain Development?
        </h1>
        <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
          <li>Knowledge of Data Structures</li>
          <li>Strong at Cryptography</li>
          <li>Knowledge of Latest Technologies and Programming Languages</li>
          <li>High Availability</li>
          <li>
            Overall ideation process including to expand business opportunities,
            technical & financial probability
          </li>
          <li>
            User-friendly, flexible models for various client requirements
          </li>
        </ul>
        <motion.p
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          User-friendly, flexible models for various client requirements
        </motion.p>
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
