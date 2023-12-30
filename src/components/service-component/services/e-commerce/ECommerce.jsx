import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";
export default function ECommerce() {
  
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
              <span className="block xl:inline">E-Commerce Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              E-Commerce Website Peps Up The Quotient Of Sale
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
              src="\images\service-img\e-coomerce.webp"
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
        className="mb-8 p-10 rounded-lg"
      >
        <div className="p-10 my-4  mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            What Is E-Commerce?
          </h1>
          <h2 className="text-gray-600">
            {" "}
            It is a simple method of purchasing and selling transactions of
            products based online over the internet. The E-Commerce website is
            quite popular and lately becoming essential for the business. If you
            are one of the rising entrepreneurs looking for a perfect way of
            promoting your brand? E-Commerce is the perfect way to fulfill your
            needs for promotions. The scale might be different for everyone, but
            the result always turns out to be profitable. E-Commerce websites
            transform businesses and help them to expand for the growth of the
            company. Match your needs and preferences with E-Commerce websites.
            All operations targeted at the creation, management, and evolution
            of a web store are covered under ecommerce website design and
            development. With one click, the operation online can perform in
            E-Commerce development. The UX/UI is the E-Commerce website's key
            factor, and large options attract customers and users.
          </h2>
        </div>
      </motion.section>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="ml-10"
      >
        <h2 className="font-bold text-2xl">
          Our Expertise E-Commerce Development Solutions:
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-10 ml-10 mr-10 font-bold  rounded-lg"
      >
        <p className="mb-3 font-semibold dark:text-gray-800">
          <span className="font-bold">1) Custom eCommerce Integration :-</span>
          We offer special customized E-Commerce solutions and take the
          E-Commerce venture to a new level. The Integration of a custom
          E-Commerce solution would be beneficial for the E-Commerce business.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          <span className="font-bold">2)B2C Platforms:-</span>
          Business to Customer business is highly in demand and one of the
          easiest ways of interaction. The web portal enables customers to
          connect directly to increase engagement and boost E-Commerce business.
          We provide advanced integrated E-Commerce tools to enhance
          productivity. An E-Commerce website is the best way for B2C platforms.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">3) B2B Commerce Solutions:-</span>We
          provide rich Business to Business Commerce solutions. Our companies
          have expertise in creating the excellent performance of B2B E-Commerce
          solutions that encourage conversions and value. The avail of
          E-Commerce websites is to interact and transact directly and increase
          the creation of businesses.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">4) Technology Consulting:-</span>
          It is essential to know which technology is best for E-Commerce
          websites; Rytsense Technology provides the best technology
          consulting. Our technology consultants help you to find the relevant
          technology, platform, and all. We believe in delivering the best, and
          that is valuable for your project.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">5) E-Commerce App Development:-</span>
          We provide seamless E-Commerce websites with our best E-Commerce app
          development. Our industry experts consult the best, and being no#1 app
          development company, and we help you build E-Commerce app development.
          It is a great way of expanding your online business and enhancing the
          website. E-Commerce app development is the simplest and easiest way
          for E-Commerce.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">6) Deployment</span>There is no E-Commerce
          website without the feature of payment integration. Our solution
          provides you multiple payments integrated gateways that enable secure
          and simple online transactions.
        </p>
        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">6) Payment Integration</span>
          After the website's launch, we will provide all support and answer
          every query after the deployment.
        </p>

        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">7) Deploy Maintenance</span>
          We provide top support and maintenance service to ensure flawless and
          sleek online E-Commerce experiences. The deployment maintenance has
          been taken care of, and it helps to maintain error-free E-Commerce
          websites.
        </p>

        <p className="mb-3 font-semibold dark:text-gray-800">
          {" "}
          <span className="font-bold">8) Multi Platforms</span>
          Several E-Commerce platforms perform and bring multiple vendors into
          one. For those platforms, we provide world-class technology that
          flourishes and promotes solutions of multi-platforms. We enable
          E-Commerce platforms that facilitate selling and buying factors on
          E-Commerce websites.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className=" p-10  rounded-lg"
      >
        <h1 className="font-bold text-xl text-gray-800">
          Why Choose Ryte'tense for the E-Commerce Website?
        </h1>

        <p className=" text-gray-800 mt-1 mb-3">
          We have industry experts who have deep insight knowledge about
          E-Commerce website development. Rytsense Technology developers
          provide top adequate and accelerate E-Commerce projects. The
          high-qualified team determines E-Commerce website development with
          exclusive, rich, and reliable technologies. E-Commerce development is
          made using compelling tools such as Magento, Shopify, BigCommerce,
          WooCommerce, and more.
        </p>
        <p className=" text-gray-800 mt-1 mb-3">
          Our highly skilled team offers a friendly user experience and adequate
          UI. We believe in delivering quality and using the latest technologies
          to provide our clients the best. The E-Commerce website development
          includes facts and figures, ratings, reviews, and necessary factors.
          The E-Commerce website development is in sheer demand, and Rytsense
          Technology will provide the best E-Commerce websites like no other.
        </p>

        <h1 className="text-xl font-bold">
          Our Ecommerce Development Expertise
        </h1>
        <ul className="text-left mt-5">
          <li>- Development of multi-store eCommerce platform</li>
          <li>- Website Maintenance and Support</li>
          <li>- Marketplace development</li>
          <li>- Shopping cart development</li>
          <li>- Online store customization</li>
          <li>- Modules and plugins development</li>
          <li>- Magento eCommerce development</li>
          <li>- SAAS eCommerce solutions</li>
          <li>- Developing websites with third-party Integration</li>
        </ul>

        <h1 className="text-xl font-bold mt-5 ">
          Our Ecommerce Development Expertise
        </h1>
        <ul className="text-left mt-5">
          <li>- Development of multi-store eCommerce platform</li>
          <li>- Website Maintenance and Support</li>
          <li>- Marketplace development</li>
          <li>- Shopping cart development</li>
          <li>- Online store customization</li>
          <li>- Modules and plugins development</li>
          <li>- Magento eCommerce development</li>
          <li>- SAAS eCommerce solutions</li>
          <li>- Developing websites with third-party Integration</li>
        </ul>
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
      <Technology/>
      <Footer/>
    </div>
  );
}
