import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients"
import Technology from "../Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Hybrid() {
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
              <span className="block xl:inline">Hybrid App Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Create Cost-Effective And Robust Mobile Apps With Hybrid App Development
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
              src="\images\service-img\hybrid.png"
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
             Hybrid App is a software application that is a merge component of web applications and native apps. The most loved element of Hybrid apps in application development is that developers have to write code once, applying it to several platforms. The code is written in cross-platform applications like HTML, JavaScript, and other programming languages. Therefore, it is cost-effective and less time-consuming because there is no requirement of writing different codes for multiple platforms. Instead, it saves time and money for business owners by applying the same code to multiple platforms. It is the best of both worlds with less development cost and easily accessible data. However, you can operate offline with Hybrid apps development. The latest framework of Hybrid app developments are Sencha, PhoneGap, and much more. It helps mobile applications function smoothly and present optimal performance.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
            Rytsense Technology is a wonderful Hybrid application development company that provides scalable and unmatchable mobile applications. Our experts help to determine the right cross-platform framework that matches your business requirements. We will support reaching the target audience with less cost and rapidly. Our developers use Flutter, Ionic, React Native, Phone Gap, Xamarian for cross-platform app development. We provide a splendid user experience and create a cross-platform app that works on every platform like Android, iOS, Windows, and other devices. We understand the business's concerns while developing mobile apps, and we have proved to be the leading mobile application development company. We have served startups to enterprise level businesses globally and are still going strong to develop more mobile applications. We create powerful hybrid app development that helps businesses to grow without settling for less for anything.
            </p>
          </motion.section>
         
        </div>
       
       
      </div>

      <div className="h-full min-h-screen w-full bg-gray-100 p-4">
      <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
        >
         Service We Provide In Hybrid App Development:
        </motion.h1>
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              01
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            React Native Development
            </h1>
            <p className="px-4 text-gray-500">
            React Native is an essential element of Hybrid app development, and thus we provide powerful React Native Development in Hybrid app development services. Our experts implement development services faster and ensure robust performance in the project. With this service and framework, your business can accelerate to the highest peak of growth. React Native development in Hybrid app development brings progress in the enterprise.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
              02
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
            Hybrid Application Design
            </h1>
            <p className="px-4 text-gray-500">
            Our team follows the design prototype and map wireframes based on users' needs. Design is the key element in Hybrid application development, and we come up with beautiful and engaging designs. For example, we create a striking design that urges mobile apps to attract more downloads by applying Hybrid app development.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <modiv className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
              03
            </modiv>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
            Flutter App Development
            </h1>
            <p className="px-4 text-gray-500">
            Flutter is another element of Hybrid app development. To make the best cross-platform, we offer Flutter app development services. Our company provides high-end solutions and essence performance for Flutter app development by integrating with Hybrid app development.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              04
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Progressive Web App Development
            </h1>
            <p className="px-4 text-gray-500">
            Progressive web app development service is for devices to reach out with other devices' single codebase. Our experts execute skilled and installability by using Progressive web app development that helps to reach anywhere and anyone. Progressive web app development service has a strong system and network for connecting devices.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
              05
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
            Hybrid Application Quality Assurance
            </h1>
            <p className="px-4 text-gray-500">
            An app development service is incomplete without testing and quality assurance. We create Hybrid app development that goes through the entire development, deployment, and testing process. Any bugs, errors, system problems, and much more is solved with Hybrid Application Quality Assurance services. It is useful to optimize the best result in the applications.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
              06
            </div>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
            Hybrid Application Maintenance
            </h1>
            <p className="px-4 text-gray-500">
            We monitor the application and ensure that performance is operating well. Our team provides 24/7 support; we provide end-solutions to our clients. With maintenance, we focus on business objectives and the accomplishment of the applications. Our team maintains quality work with support and maintenance.
            </p>
          </motion.div>
        </div>
      </div>
      
   
        
        
     
           <Technology/>
           <Footer/>
    </div>
  );
}
