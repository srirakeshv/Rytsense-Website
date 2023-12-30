import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";

export default function IOT_Embedded() {
  
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
                Internet OF Things(IOT) Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Connect, Communicate, Control & Manage your Scattered Devices With
              Our IoT Solutions{" "}
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
              src="\images\service-img\AI_ML.png"
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
        className="mb-8 border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10"
      >
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600">
            {" "}
            IoT presents a powerful mechanism to connect various objects with
            the internet and take advantage of smart technology. It will allow
            devices to connect and transfer the information, which can be used
            for a variety of purposes. IoT is changing the way businesses work.
            IoT data can be connected with advanced analytics and help
            businesses to get valuable insights to make their operations
            smoother. For example, sensors can be used in parking to help
            drivers find the vacant parking lots. Internet of Things is all set
            to transform your whole business processes.
          </p>
          <p className="text-gray-600">
            Machine learning is a part of Artificial Intelligence and is
            considered the most evolving technology for business. With
            real-world insight, AI & ML help to build frameworks that support
            businesses to gain profit. The organization that leverages Machine
            Learning and Artificial Intelligence has witnessed the
            transformation in every aspect of the company. It has helped them to
            reshape multiple industries and support enterprises with strategic
            management. The implementation of the project becomes easier with
            these tools and research analytics.
          </p>
          <h1 className="font-bold text-gray-800 text-2xl mt-5">
            Why Should You Go For IoT Application Development?
          </h1>
          <ul class="flex flex-wrap p-10 list-disc">
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Real-time effective decision making
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Optimized use of resources
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Personalize offering</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Automated & optimized processes
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Improved marketing automation
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Increased sales</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Enhanced processes in complex scenarios
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Smart and enhanced supply chain
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Better revenue generation
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" border border-gray-300 shadow-2xl rounded-2xl ml-10 mr-10 p-16"
      >
        <h1 className="font-bold text-2xl text-gray-800">
          About Rytsense Technology
        </h1>

        <h1 className="font-bold text-xl text-gray-800 mt-5">
          {" "}
          Recommendation Engine
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Rytsense delivers the best Internet of Things apps to support smart
          initiatives from the various industries ranging from the security to
          the home automation to industrial IoT that can change business
          operations and change people’s lives. We develop smart connected
          products that provide the power of machine learning and advanced
          analytics to help you become more effective; providing integrated
          services to deliver and manage IoT services.{" "}
        </p>

        <p className=" text-gray-800 mt-1 mb-3">
          Our highly skilled IoT app developers have expertise in the IoT
          specific UI and UX that is determined to deliver value and make sense
          to clients. A Smart IoT-empowered business will take your operational
          processes to the next level of connectivity and intelligence. We
          believe in fast track and active mode of possibility identification
          phase by combining our industry knowledge with cutting-edge
          technologies.
        </p>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h1 className="mt-5 font-bold text-2xl mb-5">
            Our IoT App Development Services
          </h1>

          <ul class="space-y-4 text-gray-800 list-disc list-inside dark:text-gray-800">
            <li className="font-bold">
              IoT Development Consultancy
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  At Rytsense, we offer internet of things development
                  consulting service by our skilled IoT app experts.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              IoT App Development
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Our IoT mobile app programmers & developers will help you to
                  get the right IoT development solution. Here, we deliver
                  flexible strategies, blended with high-security to manage new
                  and different IoT devices.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              Backend & API Development
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  To develop a successful IoT app backend team must be required.
                  Our team of expert internet of things programmers and coders
                  give full backend and API development solutions for our
                  valuable client.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              App Development for IoT Devices
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Rytsense team helps you to make a specific app for various
                  devices, helping you to reach your business goal and make the
                  most of IoT development technology.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              IoT Gateway Development
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Our team is always ready for IoT development related
                  requirements, therefore, we build IoT gateway for your app.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              IoT Implementation & Support
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  By providing internet of things app development services we
                  also provide complete support & maintenance services to our
                  prestigious clients.
                </h2>
              </ol>
            </li>
            <li className="font-bold ">
              Data Analytics
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Our developed IoT mobile apps can perform an advanced level of
                  data analysis that suits best to your business demands.
                </h2>
              </ol>
            </li>
            <li className="font-bold">
              BLE Technology
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Ryte'senceexcels in iBeacon-enabled mobile app development for
                  retailers, entrepreneurs and others to raise their brand
                  efficiently.
                </h2>
              </ol>
            </li>
            <li className="font-bold">
              Wearable Technology
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  At Rytsense we deliver best-in-class services for Android and
                  iOS compatible wearable mobile app development at affordable
                  prices.{" "}
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              Voice-Enabled Technology
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                <h2>
                  Our internet of things app development company always tries to
                  provide advance IoT mobile app development solutions & provide
                  Voice-Enabled Technology Solutions.
                </h2>
              </ol>
            </li>

            <li className="font-bold">
              Raspberry Pi Solutions
              <ol class="ps-5 mt-2 space-y-1  list-inside  text-gray-600 font-normal">
                Rytsense has completed several proof-of-concept (POC)
                development projects offering IoT solutions.
              </ol>
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="font-bold text-2xl mt-5 mb-5">
            Our Industry-Focussed IoT Solutions
          </h2>
          <ul class="flex flex-wrap list-disc list-inside">
            <li class="w-full sm:w-1/2 p-4 font-bold">
              Manufacturing
              <h2 className="text-gray-600 font-normal">
                Connects Machines Monitors Activities Remotely Offers Real-Time
                Analysis Keeps a Close Eye on Production Data
              </h2>
            </li>
            <li class="w-full sm:w-1/2 p-4 font-bold">
              Retail
              <h2 className="text-gray-600 font-normal">
                Optimizes Operations Engages Better with Customers Lowers Costs
                Accelerates Innovation
              </h2>
            </li>

            <li class="w-full sm:w-1/2 p-4 font-bold">
              Agriculture
              <h2 className="text-gray-600 font-normal">
                Makes Room for Precision Farming Supports Agricultural Drones
                Creates Smart Greenhouses Improves Livestock Monitoring
              </h2>
            </li>
            <li class="w-full sm:w-1/2 p-4 font-bold">
              Healthcare
              <h2 className="text-gray-600 font-normal">
                Improves Hand Hygiene Offers Real-Time Insights regarding
                Services & Location Tracks Usage of Equipment Remote Patient
                Monitoring
              </h2>
            </li>

            <li class="w-full sm:w-1/2 p-4 font-bold">
              Energy
              <h2 className="text-gray-600 font-normal">
                Improves Production Accelerates Decision-Making Minimizes Costs
                Increases Worker Safety
              </h2>
            </li>
            <li class="w-full sm:w-1/2 p-4 font-bold">
              Warehouse & Logistics
              <h2 className="text-gray-600 font-normal">
                Helps Cut Down Costs Helps Identify Potential Threats Providers
                Improved and Real-Time Traceability Improves Forecasting
              </h2>
            </li>

            <li class="w-full sm:w-1/2 p-4 font-bold">
              Transportation
              <h2 className="text-gray-600 font-normal">
                Optimizes Operations of Fleets Minimizes Service Costs Increases
                Real-Time Visibility across Roads, Oceans, and Air Improves
                Preventative Maintenance Fleet Management & Monitoring Amplifies
                the Capabilities of Transit Systems and Connected Cars
              </h2>
            </li>
            <li class="w-full sm:w-1/2 p-4 font-bold">
              Education
              <h2 className="text-gray-600 font-normal">
                Enhances Student Outcomes Improves Campus Monitoring Increases
                Security
              </h2>
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="p-5"
        >
          <h2 className="font-bold text-2xl">
            Tech Stack For IoT at Ryte'sence
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">DATA Analytics</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">
              Data Process and Analytics
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">BIGDATA</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Machine Learning</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">Connectivity Between Devices</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Wireless</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Ethernet</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">Bluetooth</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">4G LTE</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">NFC</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-4">GSM Netwoek</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">Supported Protocols</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">HTTP</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">HTTPS</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">TCS</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">CoAP</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">UDPC</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">MQTT</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">XMPP</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">AllJoyn</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">AMQP</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">SNMP</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Weave</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">MODBUS</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">Cloud Platforms</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">AWS</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Google Cloud</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">IBM Bluemix</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">ThingWorx</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Windows Azure</li>
          </ul>
        </motion.div>

        <motion.div>
          <h3 className="font-bold ml-5 mt-4">Web Services</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">
              OAuth Authorization services
            </li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">RestFul service</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">SOAP services</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">TThing API</li>
          </ul>
        </motion.div>

        <motion.div>
          <h3 className="font-bold ml-5 mt-4">Hardware/Boards</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Arduino</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Dragon Board</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Esp32</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">STM Controllers</li>

            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Esp8266</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">RaspberryPI</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">Hardware/Boards</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Azure IoT</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">AWS IoT</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          {" "}
          <h3 className="font-bold ml-5 mt-4">Sensors</h3>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Temperature sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Humidity Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Pressor Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">STM Controllers</li>

            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Level Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">IR Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Ultrasonic Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Touch Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Proximity Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Smoke & Gas Sensor</li>

            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Hall effect Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">PIR</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Reed Switch</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">LSM303</li>

            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Light Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">GAS Sensor</li>
            <li class="w-full sm:w-1/2 md:w-1/3 p-3">Fingerprint Sensor</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="font-bold ml-5 mt-4">
            RytsenseTechnology – The Right Solution For Internet of Things
            Development
          </h3>
          <p>
            Rytsense Technology do business transformation through Internet of
            Things (IoT) software. We provide ideas and insights to businesses
            on the right IoT solutions that build new business models and
            improve operational efficiency. We help you develop an IoT strategy,
            build a roadmap to implement it, and offer more customized
            end-to-end solutions to get you from IoT pilot stage to production
            stage fast and effectively.
          </p>
          <ul class="flex flex-wrap list-disc p-5">
            <li class="w-full sm:w-1/2 p-4 ">
              Highly skilled team of IoT experts
            </li>
            <li class="w-full sm:w-1/2 p-4 ">Faster time to market delivery</li>
            <li class="w-full sm:w-1/2 p-4">Own research & development team</li>
            <li class="w-full sm:w-1/2 p-4 ">
              Industry-specific IoT ecosystem
            </li>

            <li class="w-full sm:w-1/2 p-4 ">Flexible & reliable services</li>
            <li class="w-full sm:w-1/2 p-4 ">
              Dedicated data analytics laboratoryI
            </li>
            <li class="w-full sm:w-1/2 p-4 ">End-to-End IoT solutions</li>
            <li class="w-full sm:w-1/2 p-4 ">IoT Technical Support, 24/7</li>
          </ul>
        </motion.div>
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
  
      <Footer/>
    </div>
  );
}
