import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Ethereum() {
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
              <span className="block xl:inline">Ethereum App Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get Best Ethereum Development Services to Develop Smart Contracts
              and Decentralized Apps
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
              src="\images\service-img\ethereum-banner.png"
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
                Ethereum is an open software platform based on Blockchain
                technology that assists Smart Contracts Development and
                Distributed Applications development - DApps. Ethereum app
                development is a unique innovation in the business world, but
                it's already showing to be a powerful tool for developing and
                managing blockchain systems, clear smart contracts and brilliant
                new ideas about how companies can be organized. Ethereum
                platform is used to develop several applications over a wide
                range of services and industries that cover financial
                applications, semi-financial applications, and non-financial
                apps. In the world of Ethereum app development,Rytsense
                Technology blend our expertise and unique features of Ethereum
                to know your business demands and deliver customized app
                development services.{" "}
              </motion.p>
            </section>
            <motion.section
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
            >
              <p className="text-gray-700">
                The specific cryptographic token which is called Ether and it is
                one of the most famous cryptocurrencies associated with smart
                contracts. Ether is also used by application developers to pay
                for transaction fees and help on the Ethereum network.{" "}
              </p>
            </motion.section>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-300 shadow-2xl rounded-2xl ml-30 mr-30 p-20"
          >
            <h1 className="font-bold text-xl text-gray-800 mb-5">
              Why Should You ChooseRytsense Technology As Your Ethereum App
              Development Partner?
            </h1>

            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=" text-gray-800 mt-1 mb-3"
            >
              Hyperlink InfoSystem is dedicatedly working to make the
              revolutionary Ethereum blockchain development to incorporate state
              of the art technologies to make you high octane and fully
              customizable Ethereum development solutions which is fit to the
              unique demands of your project. Enhance your business operations
              with our Cryptocurrency development services and build powerful
              decentralized applications.
            </motion.p>

            <ol class="list-decimal md:list-disc lg:list-decimal">
              <li class="mb-2">Expert & professional employees</li>
              <li class="mb-2">Tailor Made Decentralised Apps</li>
              <li class="mb-2">
                Scalable, Flexible & Interactive Ethereum Apps
              </li>
              <li class="mb-2">Fast Responders</li>
              <li class="mb-2">Security Professionals</li>
            </ol>
          </motion.div>
          <Technology />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
