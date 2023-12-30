import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Wordpress() {
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
              <span className="block xl:inline">Wordpree Web Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Let's Build Amazing WordPress Website Together!{" "}
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
              src="\images\service-img\wordpress-banner.png"
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
              Why You Should Consider Setting Up A WordPress Website
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              If you are thinking of putting up a blog site but don’t know any
              coding languages (or even what a code is) then your next best
              option could be signing up for a WordPress website. WordPress is
              used by many bloggers throughout the world which may be why some
              consider it to be the most popular blogging tool on the Internet.
              You can easily sign up for a free WordPress blog account if you
              are just starting out but once you get the hang of it might want
              to delve further into blogging by getting a for-pay WordPress blog
              account later on.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              WordPress is really very user-friendly so beginners will not find
              it hard to cope with setting up their new blog account. You just
              need to give the right information about yourself and choose the
              blog theme for your site from the list WordPress will give you.
              Interestingly, if you find that there are themes that you want to
              change you can get an experienced developer like Ryt'sense
              Technology to tweak the HTML, CSS and PHP code of the theme until
              we deliver what you were looking for. Take note that there are
              some sites on the Web that offer customized and customizable
              themes applicable for use on WordPress.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Many business owners recognize the benefits of getting a WordPress
              account for SEO purposes. If this sounds like you, you can
              askRytsense Technology - Leading WordPress Web Development Company
              to help you find the right plugins in the WordPress database.
              Plugins are useful for changing the content or appearance of your
              blog site to make it more SEO friendly. In addition, your blog
              site on WordPress is very friendly to search engines - which is
              another reason business users like it so much.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Partly because of its features and partly because bloggers love it
              so much, WordPress has won multiple awards over the years.
              Although there is a criticism of its security features, you can
              still rely on security plugins to keep your WordPress more secure.
              You should also update any plugins, themes or installation codes
              to protect you from new Web attacks. Refrain from getting themes
              and plugins from sites that have doubtful security issues. You
              should also take steps to change your default admin account and
              the. Access file itself so that your blog site stays secure even
              when faced with SQL injection attacks of any kind or if intruders
              want to steal your sensitive files. Connect with us profile Your
              Full Name* email Your Email* call + 91 Contact No.* message Your
              Message* Please enter sum: 8 + 7 = Write Answer... We sign NDA for
              all our projects. Send
            </p>
          </motion.section>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
