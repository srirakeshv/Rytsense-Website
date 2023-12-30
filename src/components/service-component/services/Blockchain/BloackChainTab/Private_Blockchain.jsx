import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Private_Blockchain() {
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
                Private Blockchain Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get Top-notch, Extensively, Innovative Private Blockchains
              Solution ByRytsense Technology
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
              src="\images\service-img\private-banner.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div>
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
                A private blockchain is a peer-to-peer network, made centralized
                by connecting all the nodes to a center point that manages the
                whole platform. Private blockchains are mainly by used banks and
                businesses for promoting smooth operations. It is usually set up
                by the network validator, where every participant holds the
                ultimate power to pick who can and cannot be a part of the
                network and perform transactions. A private blockchain asks for
                the permission from its' center point that appears the network
                whenever a participant tries to participate. The transactions in
                private blockchain are faster and easy when compared to the
                Bitcoin blockchain.
              </motion.p>{" "}
            </section>

            <motion.section
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="text-gray-700">
                Rytsense Technology is a global consulting company providing
                solutions that put together the best team on board to develop
                and design all the services ranging from simple to advanced
                Blockchain architecture.
              </p>{" "}
            </motion.section>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-300 shadow-2xl  ml-30 mr-30 p-10"
          >
            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Know Advantages of Private Blockchains
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Cryptographic Auditing</li>
                <li>Improved Efficiency</li>
                <li>Glorified Databases</li>
                <li>Control The Environment</li>
              </ul>
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Faster and cheaper transactions</li>
                <li>Huge amount of data, files can be shared and stored</li>
                <li>Low-risk transactions because of KYC authentication</li>
                <li>Increased stability and scalability</li>
              </ul>
            </div>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Why ChooseRytsense Technology for Private Blockchain Development
              Services ?
            </h1>
            <p>
              Rytsense Technology is providing the best blockchain development
              services globally. We can be the best choice for your private
              blockchain development demands as we provide a highly-secure
              private blockchain infrastructure of shared peers.{" "}
            </p>
            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Plethora of Network Platform</li>
              <li>Higher Accuracy</li>
              <li> Open-Source Security</li>
              <li> Trustworthy business model</li>
            </ul>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              We promise you{" "}
            </h1>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Completely Decentralized Options</li>
              <li>Get Your own cryptocurrency</li>
              <li>Faster and cheaper transactions</li>
              <li>Auto public key generation</li>
            </ul>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Obtain investment advice</li>
              <li>Create multiple key values and identity databases</li>
              <li>Tracking accessibility at all network level</li>
              <li>Dynamic control over all transactions</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
