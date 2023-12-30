import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function PHP() {
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
              <span className="block xl:inline">PHP Web Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Rytsense Technology Provides Best PHP Development For Our
              Customers{" "}
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
              src="\images\service-img\webtab.png"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4"
            >
              Why Your Business May Need A PHP Based Web Solution
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              For the newbies among us, PHP is a web development language that
              has been widely adopted for multiple websites throughout the
              world. It also has its uses in general programming functions.
              Literally millions of websites are now running on the PHP language
              which means that your e-commerce business may need to be founded
              on the PHP language as well to facilitate smooth operations with
              other PHP based websites. If you are looking for a developer to
              make a PHP based web solution for you, Rytsense Technology could
              be the right company for the job.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              One benefit of switching to PHP is that it is free software based
              on the PHP License. Most web servers can accommodate a site built
              on PHP so that eases one problem from your list of worries. Most
              operating systems or platforms will also accept the PHP as a
              standalone shell as well. So not only do you get it free of charge
              but you can use PHP without worrying much that it cannot be
              compatible with servers, operating systems or platforms. By
              assuring compatibility, it means your e-commerce site can function
              smoothly most of the time. If you do encounter any problems that
              need a technical solution, turn to Rytsense Technology to provide
              that assistance.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Because PHP is an open-source code, you can actually have the
              source code for your site amended if necessary. You can do this
              code tweaking yourself or you can hire a more experienced
              developer for the job. Open source means any changes can be done
              without having to pay the owners of the PHP source code which is
              the PHP Group developer. You probably will easily be able to find
              a web hosting provider that can support your PHP-based website.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Another side benefit of switching to PHP code is that it can
              accommodate web content management systems founded on PHP. Your
              e-commerce system might be using Joomla! for example, so you will
              be pleased to know that Joomla! is compatible with your PHP-based
              site. Another commonly used web content management system is
              Moodle which also happens to work well with a PHP-based website.
              Many e-commerce businesses do need some kind of web content
              management system so it is best to choose one that will work
              smoothly on your PHP coded website for the long term. Otherwise,
              you may need help from a developer to figure out the technical
              issues that are in the way.
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
