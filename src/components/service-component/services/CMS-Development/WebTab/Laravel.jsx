import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Laravel() {
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
              <span className="block xl:inline">Laravel Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Experienced Laravel Development Solutions to Create Scalable
              Business Solutions{" "}
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
              src="\images\service-img\laravel-banner.png"
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
              Laravel is an open-source PHP framework, Used for the web
              applications development following the MVC architectural platform.
              One of PHP’s most amazing frameworks, Laravel is developed with a
              key focus of writing code syntax which is simple and less
              expensive. Laravel is considered to be the most used after PHP
              framework today.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              Being extremely powerful and reliable, it is loaded with amazing
              features and attributes that increase the level of output,
              efficiency, and competitiveness. Designing, development, and
              customization become fast and easy with the Laravel. It gives the
              development of high-quality websites and web applications.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              At theRytsense Technology, we have a skilled team of best Laravel
              developers working on developing small to medium to large-scale
              projects. We provide a wide range of services like Laravel website
              development, Laravel mobile-based applications, etc. We provide
              you the flexibility to hire skilled and experienced Laravel
              developers to work on projects that meet clients' requirements and
              deeds and improve their overall conversion rate and growth.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              We can help you to build simple apps to complex CMS for eCommerce
              websites at fast turnaround time without using a lot of money. Our
              team of Laravel developers are always ready to build the solutions
              based on latest coding standards and guidelines for creating any
              type and size of applications or websites. Our Laravel developer
              did all the skills of the framework to give a robust, real-time
              solution for the web application to all industry. We use all the
              positive aspects of Laravel to create class-apart eCommerce and
              enterprise apps by implementing agile business methodologies.{" "}
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
