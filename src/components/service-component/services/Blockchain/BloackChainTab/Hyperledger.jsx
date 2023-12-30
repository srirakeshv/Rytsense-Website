import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Hyperledger() {
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
                Hyperledger BlockChain Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We Develop Unique Blockchain on Hyperledger
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
              src="\images\service-img\hyper-banner.png"
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
                Hyperledger blockchain technology is a new demand of the
                business world and mostly every business are looking for
                Hyperledger blockchain development. This technology was founded
                in December 2015 by the Linux Foundation. It is open source and
                based on the distributed ledgers with the purpose of the
                betterment of the blockchain industry. It acts as an
                intermediary for decentralized digital communities. Hyperledger
                blockchain technology uses smart contract app which results in
                the highly beneficial for the enterprises over the globe and it
                is known as Hyperledger smart contracts.{" "}
              </motion.p>
            </section>
            <motion.section
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="text-gray-700">
                Ryt'sence Technology is a Cryptocurrency development company
                that enables wallets to store your personal data and manageable
                activities. We make the method user-friendly, provide a seamless
                experience and scalable investment. It helps to avail benefits
                from the operation and interface of the Cryptocurrency wallet.
                We help to make different payment methods easily integrated. We
                assist in storing and managing a certain amount of currency in
                the wallet. It will also have a public digital code in the
                Cryptocurrency wallet, assigned to a respective wallet address.
                We help businesses to manage the Cryptocurrency wallet well and
                adhere to expert guidance for it.
              </p>
            </motion.section>
            <motion.section
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="text-gray-700">
                Hence, while seeing the demand, it has been seen many companies
                has turned into Hyperledger Blockchain development Company and
                among them,Rytsense Technology is known as a best Hyperledger
                Fabric blockchain development company. Expert Developers
                atRytsense Technology can help you to build decentralized
                enterprise apps using Hyperledger which is the top Blockchain
                platforms.{" "}
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
              Some Of The Business Blockchain Frameworks Hosted Currently With
              Hyperledger Are:
            </h1>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Hyperledger Burrow</li>
              <li> Hyperledger Fabric</li>
              <li> Hyperledger Sawtooth</li>
              <li>Hyperledger Indy</li>
              <li>Hyperledger Iroha</li>
            </ul>
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
              Why ChooseRytsense Technology for Ethereum Hyperledger Blockchain
              Development?
            </h1>
            <p>
              When it comes to choosing a Hyperledger app for your business
              development, you should hire the team fromRytsense Technology for
              expert Blockchain development. So are you looking to opt this
              technology for your business development, so your search is
              complete here becauseRytsense Technology gives you numerous
              reasons to hire it. We have a leading talent in the field of
              blockchain technology,Rytsense Technology is a blend of
              responsive, professional and skilled employees.
            </p>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Award Winning Company</li>
              <li>Dedicated Employees</li>
              <li>24*7 Support</li>
              <li>On Time Delivery</li>
              <li>Fast Responders</li>
              <li>Security Professionals</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
