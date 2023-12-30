import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function TypeScript() {
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
              <span className="block xl:inline">Typescript Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Leverage Web Development With Our TypeScript{" "}
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
              src="\images\service-img\typescript-banner.png"
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
              TypeScript is a programming language that is set JavaScript for
              application development. It begins from the semantics and syntax
              applied by developers to latent typing to the language. With
              Typescript, the development process is highly productive, and
              several tools is used. It is functional and designed for extensive
              application development. By adopting TypeScript, the usage of
              JavaScript made it more accessible and supported the latest
              features and future projects. It is a good application for
              frontend applications and can reliably model versatility. It
              presents the structure and secure your application and delivers
              your app smoothly and correctly to write and maintain code in the
              rapid environment. It is a powerful programming language to
              develop an application. For cross-platform, it is an ideal choice
              as it supports a built minimum viable product.
            </motion.p>{" "}
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Rytsense Technology provides scalable TypeScript services. We help
              to deliver the application with accuracy and enhancement. Our
              developers are well experienced and proficient in TypeScript
              language. We offer a rapid pace and reliability with advanced
              tools and technology. Our company caters to excellent TypeScript
              that avail benefits with its tooling ability. It is very efficient
              for server-side and client-side execution. Our developers help to
              rewrite code through the use of TypeScript web development
              promptly. In addition, our developers provide TypeScript, which
              has proved to be very efficient for web applications.
            </p>
          </motion.section>
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
        >
          TypeScript Services We Provide:{" "}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-between p-10"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              1) TypeScript Web App Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our developers provide well-defined web app development
                services. It will help to build a web application with the
                leverage of TypeScript language. It is beneficial to integrate
                JavaScript frameworks with various platforms. The TypeScript
                code written makes web app development more scalable.
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              2) Enterprise App Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rytsense Technology offers Enterprise app development services
                to develop robust applications that will increase user
                engagement. In addition, it will help to accelerate business
                development to deploy secure mobile applications. Our developers
                implement dynamic tools that stand ahead of all.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              3) Customize TypeScript
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide custom TypeScript Design for the best enterprise
                development to deploy applications. The customization gives a
                robust and scalable effect to your business. Our developers
                create a customized pattern in the TypeScript programming
                language. It will apply to various domains and platforms.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              4) TypeScript App Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our developers create multiple application development with
                TypeScript app development. It is used for mobile applications
                for any device and platform. We built a vital interface that
                helps to implement any size of devices and platforms with
                dynamic. It gains user engagement and makes work more
                manageable.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              5) JavaScript to TypeScript Migration
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                JavaScript is the core of TypeScript, and hence we provide
                migration of the project. It helps to execute JavaScript to
                TypeScript with a compelling approach. The migration helps to
                work efficiently with professional methodology. Moreover, it is
                scalable and highly reliable by using the technology and
                programming language.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              6) TypeScript Consultation
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our experts have comprehensive knowledge of the TypeScript
                programming language and thus provide compelling TypeScript
                consultation. They will help to solve your queries on TypeScript
                services and guide you to the right direction. Through
                consultation, experts will give accurate solutions.{" "}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
