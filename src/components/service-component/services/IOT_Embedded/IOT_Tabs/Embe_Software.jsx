import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";
export default function Embe_Software() {
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
                Embedded Software Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Develop And Deliver Quality With Embedded Software Development{" "}
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
              src="\images\service-img\iotsoft-banner.png"
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
        className="p-10"
      >
        <p className="text-gray-700">
          Embedded software is computer software written to control devices and
          machines. The different part is that it runs and is specialized for
          specific hardware and has limited memory. Embedded software is to
          support services for the productive use of next-generation hardware
          products. The system is for the modern world, and it has turned
          universal for the software. For quality software, several companies
          prefer Embedded software and systems. The computer software is robust
          and cost-effective, user-friendly, and more. The software needs the
          expertise to provide a quality development process, and Rytsense
          Technology is the one that will provide the best process with
          efficiency.
        </p>{" "}
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <p className="text-gray-700">
          Embedded Software is the most used and popular software development
          and is reliable by multiple businesses. Because of its cost-effective
          manner and scalable experiences. The software solution is
          interoperable and smooth for any device integration. The system has
          adapted and accurate outcomes. The software helps enhance the
          performance of the products and helps maintain the best practices and
          standards of software development.
        </p>{" "}
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      ></motion.section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" rounded-2xl ml-30 mr-30 p-20"
      >
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Process We Follow:
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Product Planning
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It is essential to understand and plan the product, which is created
          from embedded software development. The planning will give you clarity
          and usage of the software. As the written computer software is
          dependable, it needs to plan before implementing it.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">2) Analysis</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          There is no point in planning if there is a mistake while executing
          development. In the analysis step, the process goes through and
          cross-verify every detail. Later, after approval of analysis, the
          design is finalized.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          3) Testing and Deployment
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The testing is a pre-final process where before implementing it, it
          gets tested and checks whether it is appropriate. If there is any
          glitch or error, our expert team immediately solves it and provides an
          outstanding outcome.
        </motion.p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          4) Care and Maintenance
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          After regression testing, the process went ahead with the final
          system. Our developers observe everything and run the application with
          care and maintenance. Rytsense Technology is known for providing a
          process with efficiency.
        </motion.p>{" "}
        <h1 className="font-bold text-xl text-gray-800"></h1>
      </motion.div>

      <Technology />
      <Footer/>
    </div>
  );
}
