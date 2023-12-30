import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/Header"
import Topbar from "../../../../common/Topbar";

export default function SmartHome() {
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
                Smart Home Home-Automation
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Make Your Smart Home - Home Automation More Skillful With Us
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
              src="\images\service-img\smarthome-banner.png"
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
          Smart Home is the element of IoT solution and one of the most used for
          the home and businesses. Smart homes are virtual assistants that
          manage and operate through the Internet. It is the advanced technology
          that has transformed the home and made every day more convenient.
          Smart home technology enhances the automation of your home and enables
          you to control every aspect of the home with the help of the Internet
          of Things (IoT). Smart home applications include light, door,
          security, applications, and much more. Smart home applications are
          often used to command and control household activities.
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
          One of the best methods to use home automation is controlling
          applications, home security, and more. Home automation is like your
          personal assistant who reminds you, searches for you, handles, and
          all. It is one of the biggest markets of the Internet of Things, and
          the process is less complicated and easy to understand. It saves time
          and is cost-effective, and features are significant for IoT
          applications. The new technology is an adequate method for the home
          and businesses.
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
          Factors of Smart Home and Home Automation
        </h1>
        <h1 className="font-bold text-xl text-gray-800"> 1) Energy System</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Smart home-home automation provides you with splendid energy and
          lighting systems. The system is quite valuable for the consumer as
          with one command or guides over the voice assistant light or energy
          system obtained. The energy and lighting system empowers the IoT
          devices and network, and IoT helps save energy, time, and cost.
        </motion.p>

        <h1 className="font-bold text-xl text-gray-800">
          2) Enterprise IoT Systems
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Enterprise IoT systems have taken resources, capital, and other
          factors to a different level. The network has services and solutions
          on a large scale. It reduces the risk in the system and warns the
          system about threats and cyber attacks. The systems are implemented in
          such a way that they notify you about the near menace. In the
          enterprise, IoT is in the design of sensors, tablets, and connected
          SaaS platforms.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">3) FoodTech</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Many times, we kept food and completely forgot about it. For such
          situations, Food tech powered by IoT comes to the rescue. The
          technology helps keep a record of food, and it reminds you about the
          food and all. It reduces waste management, and record helps to save
          necessary and unnecessary food items. With a command, users can
          discover multiple recipes.{" "}
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">4) Healthcare</h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          Healthcare and smart automation go hand-in-hand. It helps to remind
          about the healthy charts to follow; Healthcare is associated with IoT.
          The system helps to give you accurate results in the form of a report
          or anything. Healthcare is a vivid concept, and the smart home has a
          different approach towards it.
        </motion.p>
        <h1 className="font-bold text-xl text-gray-800">
          5) Smart Warehousing
        </h1>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray-800 mt-1 mb-3"
        >
          A smart warehouse system is to provide companies real-time visibility.
          It allows the optimization of processes and the capability to make
          immediate changes to increase operation speed. Smart warehouses can
          also eliminate the majority of human error and enhance safety and
          security with ease. It helps to keep track of all management
          activities occurring within home automation.
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
          Why ChooseRytsense Technology For Smart Home - Home Automation?
        </h1>
        <p className="text-gray-700">
          We are the leading Internet of Things company, which provides
          brilliant smart home and home automation. Our professionals who hold
          expertise have years of experience in it and are proficient in it. We
          have the latest and intelligent tools and technology that helps to
          make home automation and smart homes more efficient. With the pool of
          experience, our experts have the best solution and service to provide
          for home automation and smart home. We help to maintain and enhance
          the smart home and home automation system.
        </p>{" "}
      </motion.section>
      <Technology />
      <Footer/>
    </div>
  );
}
