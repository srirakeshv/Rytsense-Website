import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../../mobile-app/Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";

export default function NFT() {
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
                NFT MarketPlace Development
              </span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              NFT Marketplace Development Service Provider
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
              src="\images\service-img\NFT-banner.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      <div>
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
                Non-Fundigibal Token is changing how we used to talk about art,
                music, media and events. One can trade NFTs with the help of
                cryptocurrency. So, every NFTs are unique in their own way and
                it is almost impossible to duplicate them.Rytsense Technology -
                a NFT Marketplace development company can provide services for
                NFT marketplace development to trade any digital assets you
                want.{" "}
              </motion.p>
            </section>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-300 shadow-2xl  ml-30 mr-30 p-10"
          >
            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                {" "}
                NFT Development Industries We Cover{" "}
              </h1>
              <h1 className="font-bold text-xl text-gray-800 mt-5"> Sports </h1>
              <p>
                Hire NFT Developers fromRytsense Technology to integrate
                blockchain technology into your NFT trading marketplace that can
                prevent the issues of fake collectables and tickets that invade
                the sports industry.{" "}
              </p>
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 "> E-commerce </h1>
              <p>
                NFT developers atRytsense Technology can develop an NFT
                marketplace platform where buyers, sellers and creators can
                trade their NFT authorized Antiques.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 "> Art </h1>
              <p>
                In a world full of duplication, do not take a chance and reach
                out toRytsense Technology, the Most trusted NFT marketplace
                development company that can develop a marketplace platform that
                provides artists with a stage to trade their original pieces of
                art.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 "> Music </h1>
              <p>
                Our NFT marketplace developer can provide NFT authorization
                services to the Musician, producers and industry leaders to
                trade their NFT authorized work. It helps them to earn royalty
                feels every time their music is played or being used.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 "> Real Estate</h1>
              <p>
                Our experienced NFT marketplace development team can incorporate
                AR/VR facilities for your real estate Marketplace that can
                provide a virtual tour of the property and allow transactions
                through e-wallets and cryptocurrency as well.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 "> Photography</h1>
              <p>
                A combination of NFT and Blockchain technology authorizes the
                owner of the photos and helps them to be more secure. And being
                a top NFT development company, the team ofRytsense Technology
                can help you build an NFT Marketplace where Photographers can
                trade their work and can communicate with other photographers as
                well.{" "}
              </p>{" "}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-300 shadow-2xl  ml-30 mr-30 p-10"
          >
            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                {" "}
                FeaturesRytsense Technology Provides for NFT Marketplace
                Development
              </h1>
              <h1 className="font-bold text-xl text-gray-800 mt-5">
                {" "}
                Data Protection
              </h1>
              <p>
                NFT marketplace developers atRytsense Technology follow strict
                ERC-721 NFT standards which means the information gathered and
                stored in NFT for your platform cannot be exchanged or used
                anywhere else.
              </p>
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                Enhanced Security{" "}
              </h1>
              <p>
                Hire NFT marketplace developers that utilize bitcoin technology
                to provide enhanced security to your marketplace. It can make
                them more reliable for your users.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">Reliability </h1>
              <p>
                NFT developers atRytsense Technology can help you develop a
                secure, reliable NFT marketplace as it is impossible to modify,
                remove or replace any NFT that exists.
              </p>{" "}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-300 shadow-2xl  ml-30 mr-30 p-10"
          >
            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                {" "}
                Our NFT Marketplace Development Services{" "}
              </h1>
              <h1 className="font-bold text-xl text-gray-800 mt-5">
                {" "}
                NFT Marketplace Design & Development
              </h1>
              <p>
                Our NFT marketplace development team takes care of ERC-721 and
                ERC-1155 standards along with smart contracts and IPFS protocols
                with the very first marketplace design and development stage.
              </p>
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                NFT Smart Contracts Audit{" "}
              </h1>
              <p>
                We can help you develop accurate NFT smart contracts ensuring
                there will not be any breaches or bugs for a long time in
                future. Our NFT marketplace tester team will audit those Smart
                Contracts before delivering the final solutions.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                After-sale NFT Marketplace Support & Maintenance{" "}
              </h1>
              <p>
                NFT developers of our development team always believe the
                project never just ends with the final submission. Our NFT
                marketplace support and maintenance team will be there for you
                for a certain amount of time to provide after-sales services.
                So, We are responsible even after the successful delivery from
                our end, to solve the queries you might face afterwards.
              </p>{" "}
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl text-gray-800 ">
                Full Stack NFT Marketplace Development{" "}
              </h1>
              <p>
                Rytsense Technology NFT marketplace development team can help
                you unlock the unlimited potential of NFT for your business.
                Owning a Marketplace where people can trade their NFT authorized
                digital assets such as a mere meme to hold virtual events
                allowing NFT authentic identification can bring unimaginable
                success to your business. Drop business inquiries now and let
                our NFT marketplace developers do the wonders.{" "}
              </p>{" "}
            </div>
          </motion.div>
        </div>
      </div>
      <Technology />
      <Footer/>
    </div>
  );
}
