import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients"
import Technology from "../Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Swift() {
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
              <span className="block xl:inline">Swift App Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Develop The Best Application With Our Swift Development
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
              src="\images\service-img\swift-banner.png"
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
            Swift is a famous programming language. It is a quick, highly efficient, and secure programming language. Swift language is preferably suitable for iOS app development. Moreover, Apple provides a suite feature for the iOS app development process. Swift language is used in mobile applications and websites. It is a game-changing advantage if we use it right and properly with innovative technology. It is an emerging language that is easy to use and interactive. The Swift code runs along with Objective C, and it is added into iOS projects for web and mobile apps. The business gains benefits in the process. The C and Object C code will help you to make your process and development smooth. Developing applications through Swift language will help you to obtain benefits. Several other features will add value to your applications.Rytsense Technology will help you to run the application 100% bug-free with a seamless experience. The application will help you in several ways, but it is only possible with a Swift developer or an expert.
            </motion.p>
          </section>
          
         
        </div>
        
        
      </div>
      <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
        >
          Service We Provide:
        </motion.div>
      <div className="h-full min-h-screen w-full bg-gray-100 p-4">
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
            Swift iOS Consultation
            </h1>
            <p className="px-4 text-gray-500">
           Rytsense Technology provides informative and opts Swift iOS App Consultation. Swift language release by Apple, hence iOS plays a key major role. Our Swift developers will guide you at every step and through every process.
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
            Custom Swift Development
            </h1>
            <p className="px-4 text-gray-500">
            We know customization makes business better that is why we provide custom Swift development. Our company delivers custom Swift development according to your business needs and targets, the custom Swift development is different from traditional development, and if you are looking for long-term objectives, go for custom development.
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
            Swift App Designing
            </h1>
            <p className="px-4 text-gray-500">
            Our company built stunning, innovative, adequate designs with Swift development. We ensure that it is different than the usual and help you to stand out among others. The design will help you be interactive, highly engaged to the users, and match client needs.
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
            Enterprise Swift App
            </h1>
            <p className="px-4 text-gray-500">
            With the use of enterprise apps, we can apply to build striking apps with Swift. It can also be compatible with other iOS devices like iPhone, Mac, and iPad. Our Swift developer engaged in every small process to make the app more compelling with the Swift language.
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
            Swift Testing Development
            </h1>
            <p className="px-4 text-gray-500">
            We go through testing development with well-equipped testing tools for Swift Development. Our Swift developers and QA team follow the best practice to enhance app performance and solve all the issues. In addition, our team ensures that after testing development, the application is bug-free and flawless.
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
            Swift Porting Development
            </h1>
            <p className="px-4 text-gray-500">
            Our Swift development provides swift porting development, which is helpful to run applications flawless on different Apple devices. The language can operate only based on Swift to their desired platforms. The application is useful for several other reasons.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
      >
      Why ChooseRytsense Technology For Swift Development?
      </motion.div>
      
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
          1) Agile Procedure
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Our company provides a prompt and agile procedure to make your task effortless. We optimize the practice and method. It helps to deliver faster and bring the finest outcome. Even though the procedure is agile, we maintain the high quality and keep it constant throughout the process.
            </span>
           
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
          2) Unique Approach & Dedicated Team
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            With years of experience, we have a unique approach to the Swift development process. The method comes with a large variety of talent, skills, ability, and much more; the developers, designers, and all work hard to stand out on the top. The unique approach delivers high-end business solutions over technologies in Swift development and its usage.
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
          3) Interactive Process
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            A client should know and be aware of their project, and hence we provide an interactive process where the client can raise any issue regarding the project. With the interaction, both the client and us will be clear on what to do and acknowledge that we both are on the same page for the Swift development. Swift development is an easy language, so we maintain it by providing the easiest method and process.
            </span>
           
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
          4) 24/7 Support And Maintenance
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            We provide 24/7 support and maintenance during the process and after the development. We are a reliable and trustworthy company that supports and provides multiple tools, techniques, and technology. If there is any mobile application or web issue with Swift development, our expert will solve it instantly. We provide 24/7 support and maintenance so any client can solve the issue at their respective time and be left without disappointment.
            </span>
           
          </div>
        </div>
       
      </motion.div>
     
     <Technology/>
     <Footer/>
    </div>
  );
}
