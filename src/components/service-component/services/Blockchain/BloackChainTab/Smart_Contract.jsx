import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Smart_Contract() {
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
                Smart Contract Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A Full-service Smart Contract Development Firm
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
              src="\images\service-img\smart-banner.png"
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
                Smart contracts help you exchange anything of value in a
                transparent way while avoiding the services of a middleman.
                Smart Contracts are digital computer protocols that are backed
                by the ability to keep a track of the terms of an agreement
                between businesses. The smart contracts facilitate a fair
                exchange of goods and services between the exchanging parties.
                The smart contract is a development on the Ethereum blockchain.
                It is the main part of a technology that adapts the Ethereum
                cryptocurrency from Bitcoin’s Blockchain. Smart Contracts have
                grown along with the new possibilities in the software
                development scenario. The release of Ethereum in 2015 allowed
                the very first implementation of smart contracts.
              </motion.p>{" "}
            </section>
            <motion.section
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="text-gray-700">
                Rytsense Technology is a good Blockchain Development Company
                with an excellence in building decentralized smart contracts. We
                have a skilled team of Blockchain Developers that specialize to
                develop world-class decentralized apps - DAPPs for various
                industries. A team ofRytsense Technology works together with
                clients to validate, design, and develop smart contracts to make
                safe, accurate, and honest transactions.{" "}
              </p>
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
              Key Advantages of Smart Contracts
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Quick, Reliable & Immutable</li>
                <li>Automatic Monitoringc</li>
                <li>Clear Recordkeeping</li>
                <li>Decentralized Performance</li>
              </ul>
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Creation of New Business Models</li>
                <li>Intermediary-free Transactions</li>
                <li>A Self-auditing Mechanism of Digital Value</li>
              </ul>
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>High Accuracy</li>
                <li>Associated with Cryptocurrency</li>
                <li>Automatic Fulfillment of Orders</li>
              </ul>
            </div>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Know the feature of Hyperledger
            </h1>
            <p>
              WithRytsense Technology, you are guaranteed that using
              Hyperledger, we can offer you the following features,
            </p>
            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Plethora of Network Platform</li>
              <li>Higher Accuracy</li>
              <li> Open-Source Security</li>
              <li> Trustworthy business model</li>
            </ul>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Why You Should HireRytsense Technology For Smart Contracts
              Development{" "}
            </h1>
            <p>
              AtRytsense Technology, we have a good team of developers who have
              proven skills and vast expertise in offering smart contracts
              development services and solutions as per our clients’
              requirement. Whether you need to accept payment through
              cryptocurrencies or want to secure your transactions by using
              smart contracts, our smart contract development services are sure
              to get your task done the right way and cost-effectively.{" "}
            </p>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Strong Blockchain &Smart contracts development team</li>
              <li>Customizable and scalable solutions</li>
              <li>
                Web platforms using Phoneix / Elixir and serverless architecture
              </li>
              <li>Quick-responder to your business needs</li>
              <li>Development with Web3, Solidity, Cakeshop, and Truffle</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
