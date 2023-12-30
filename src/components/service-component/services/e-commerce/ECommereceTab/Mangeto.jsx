import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function Mangeto() {
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
                Mangeto E-Commerce Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We Develop Solutions That Ignite Your Business.{" "}
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
              Why You Should choose Magento E-commerce Solution
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Magento is a big advantage when it comes to e-commerce if your
              website’s retail business is struggling to control costs because
              Magento is an open-source solution used for e-commerce
              applications. Yes, the big retail websites do use this system
              which was formerly owned by the Varien company but if you are a
              small player trying to compete against the big boys then every
              cent you save counts in the long run. Because of this even major
              auction site eBay recognizes the usefulness of being associated
              with Magento (eBay has already bought out 100% ownership of
              Magento). So maybe you should too as well.{" "}
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              There is more to e-commerce than just boring financial data that
              make your eyes glaze over. A website devoted to e-commerce wants
              to know what its customers are thinking and Magento can do that
              through its Magento Mobile service. With Magento Mobile, your
              business will be able to develop your own apps that can work for
              hand in glove with your online retail operations. So what does
              that mean? It means these native apps can help your customers gain
              a better online e-commerce experience while you get more data on
              what customers are buying and what are being ignored. You can
              create retail business apps that will run on Android gadgets as
              well as iPads and iPhones. This is a big advantage if you want to
              shave off losing products and stick to products that you know your
              customers are willing to pay for.{" "}
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              With Magento Mobile service, your new apps may help your retail
              business become a well-known and well-loved retail brand.
              Developing a stable brand is how retailers survive a cut-throat
              e-commerce world so the retailer with the strongest brand recall
              in the minds of customers is usually the one who will win. If you
              want to win with Magento, try contactingRytsense Technology today.
              We can help you adapt Magento Mobile to your purposes even if you
              have to deploy your apps on multiple device platforms. With
              Rytsense Technology on your side, adapting to Magento e-commerce
              solutions will be easier plus you can always ask us to explain any
              aspects of the Magento system that can be confusing to a
              non-developer. You provide the retail experience and we provide
              the techie knowledge and skills. Together we can make your retail
              business survive and thrive where others are doomed to fail.
            </p>
          </motion.section>
        </div>
      </div>

      <Technology />
      <Footer/>
    </div>
  );
}
