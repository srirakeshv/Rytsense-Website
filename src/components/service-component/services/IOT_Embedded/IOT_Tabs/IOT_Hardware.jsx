import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function IOT_Hardware() {
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
                IOT Hardware Prototyping Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Polish Product And Devices With IoT Hardware Prototyping
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
              src="\images\service-img\iothard-banner.png"
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
          IoT prototyping is the act of experimenting and executing plan ideas
          into preliminary accounts of a polished product. Hardware prototype
          helps to manage and sensor prototypes development. It is the first
          essential step while creating an IoT product. Likewise, it helps to
          connect every project with the device. However, the IoT Hardware
          prototype is challenging because it requires the latest technologies
          and IoT skilled developers. But the hardware supports sensors that
          gather insightful data and helps to analyze the product. It helps
          devices to connect and accomplish their projects. For IoT
          hardware-based products, the company needs skilled experts and
          cutting-edge technologies. It is a lengthy process and needs someone
          who can implement it without any glitches and errors.
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
          The IoT applications help to make the task easier and make your work
          simpler and faster. The IoT applications require multiple technologies
          because almost every technology can provide appropriate information
          regarding its operation. The performance of an activity and situation
          differs from the control and monitor of the Internet of Things. There
          are multiple usages for IoT applications, and they can apply to
          various aspects.{" "}
        </p>
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <p className="text-gray-700">
          IoT hardware prototype is divided into a user interface, backend
          software, and connectivity of a system. Hence, IoT hardware
          prototyping is performed in different methods, and all methods have
          their benefits. Because of it, the insights are obtained, and
          challenges are solved with astonishing opportunities. The purpose of
          building an IoT prototype is to test the concept and match it with
          your target audience. The task of matching expectations becomes easy
          and makes validation of the business easier.
        </p>{" "}
      </motion.section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" rounded-2xl ml-30 mr-30 p-20"
      >
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Three Types Of IoT Hardware:
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Development Kits (DKs)
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          It is easy to use and has user-friendly hardware. For scaling and
          depending, the Development Kits is perfect and helps to optimize the
          expandability. The applications are different for every device; hence,
          the outcome depends on the applications and use case. Use it if you
          are looking for a short time with limited features.
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          2) Mass Production Modules (MPMs)
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          If you are looking to deploy a product in mass production, go with the
          mass production modules. However, it is not for development and
          contains small spaces. It lasts around 5-10 years, and it is quite
          optimized and sustainable. The usage space is more and has limitation
          features.
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          3) MPM Evaluation Kits (EVK's)
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          The expanded version for Mass production Modules is MPM evaluation
          kits. It enables debug, develop, and emphasize IoT solutions. The kits
          are easy to use and quickly with efficiency. Anyone with less
          knowledge can operate this kit as it is friendly to use. There are
          different models and methods for it, but the benefits are all
          significant.
        </motion.p>
      </motion.div>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        <h1 className="font-bold text-xl text-gray-800">
          Why ChooseRytsense Technology For IoT Hardware Prototyping?
        </h1>
        <p className="text-gray-700">
          Being an IoT development company with 10+ more experience, we provide
          the most suitable for the users and the best solution in the industry.
          Our skilled developers will match all your requirements and needs in
          the claimed time.
        </p>{" "}
      </motion.section>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-2 ml-10"
      >
        <p className="text-gray-700">
          We have the calibre to grow with a brilliant innovative IoT hardware
          development process, from starting ideas to completing hardware
          prototypes. Our company provides firmware development, high quality,
          manufacturing design, and much more. We accomplish the client goal of
          IoT hardware development in devices and thrive to achieve more goals
          in the future. Our proficient team solve all your queries and tackle
          all the challenges that come in or after the process. We provide
          error-free, custom, and splendid service for your products.
        </p>
      </motion.section>
      <Technology />
      <Footer/>
    </div>
  );
}
