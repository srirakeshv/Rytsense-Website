import React from "react";
import {motion} from 'framer-motion'
import {fadeIn} from '../../../varients'


export default function Service() {
  
  return (
    <div className="content">

      <div className="we-offer">

        <motion.div variants={fadeIn("down",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className=" mb-10 ml-0 text-3xl font-bold text-gray-900 text-shadow-lg shadow-gray-500 text-center">
          Service We Offer
        </motion.div>
        <div className="flex flex-wrap justify-center ">

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Software Development Services
              </div>
              <p className="text-gray-700 text-base">
                We specialize in crafting custom software solutions that are
                designed to address your specific business requirements. Our
                development process involves in-depth analysis, strategic
                planning, and collaborative prototyping to ensure that the final
                product aligns perfectly with your vision.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Blockchain Application Development
              </div>
              <p className="text-gray-700 text-base">
                Our blockchain consultants are here to guide you through the
                process of understanding how blockchain can benefit your
                business. We provide in-depth analysis, feasibility studies,
                recommendations to help you determine the best approach to
                integrating blockchain into your operations.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Cloud Services</div>
              <p className="text-gray-700 text-base">
                Our cloud experts work closely with you to understand your
                business objectives and devise a tailored cloud strategy. We
                provide insights, recommendations, and roadmaps to help you
                choose the right cloud platforms, optimize your infrastructure,
                and align your IT resources with your business. Based on our
                in-depth analysis, recommendationsthe right cloud platforms.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Data Science Analytics Service
              </div>
              <p className="text-gray-700 text-base">
                We help you make sense of your data through advanced data
                analysis techniques. Our team performs exploratory data
                analysis, identifies patterns, trends, and correlations, and
                provides comprehensive visualizations to uncover meaningful
                insights.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Digital Transformation Services
              </div>
              <p className="text-gray-700 text-base">
                We work closely with you to develop a digital strategy that
                aligns with your business objectives. Our consultants assess
                your current digital landscape, identify opportunities for
                improvement, and devise a roadmap for successful digital.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}   className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Business Intelligence Service
              </div>
              <p className="text-gray-700 text-base">
                We specialize in crafting custom software solutions that are
                designed to address your specific business requirements. Our
                development process involves in-depth analysis, to ensure that
                the final product aligns perfectly with your vision.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}   className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                AI & ML Software Development Services
              </div>
              <p className="text-gray-700 text-base">
                Our AI and ML experts work closely with you to understand your
                business objectives and identify opportunities for AI and ML
                integration. We provide strategic guidance, to help you leverage
                the full potential of AI and ML in your organization.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                SAAS Development Service
              </div>
              <p className="text-gray-700 text-base">
                Our SaaS experts work closely with you to define a comprehensive
                SaaS strategy aligned with your business goals. We analyze your
                target market and identify opportunities for differentiation. We
                provide strategic guidance on pricing models,
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}   className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Mobile Application Development
              </div>
              <p className="text-gray-700 text-base">
                We understand that each business has unique requirements. Our
                team takes a collaborative approach, working closely with you to
                understand your goals and functionality requirements. We then
                design and align perfectly with your vision.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}   className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
              Game Development
              </div>
              <p className="text-gray-700 text-base">
              We specialize in developing custom games tailored to your
                specific requirements. From concept design and storyline
                development to character creation , we work closely with you to
                ensure that your game captures your visi
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
              VR development
              </div>
              <p className="text-gray-700 text-base">
              We specialize in developing tailor-made VR applications across
                various industries, entertainment, education, training. Our team
                takes your vision. From concept development to deployment, we
                ensure that every aspect of your VR application exceeds your
                expectations.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}   className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-slate-100 transition duration-300 hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
              Marketplace Development
              </div>
              <p className="text-gray-700 text-base">
              We specialize in building customized marketplace platforms from
                scratch, tailored to your specific requirements. Our team
                collaborates closely with you to understand your business goals,
                target audience.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded justify-center  px-10 py-1 mt-3 mx-auto">
                More
              </button>
            </div>
          </motion.div>

          
         </div>
      </div>

      <div className="px-2 py-20 w-full flex justify-center">
        
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <motion.div  variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="lg:w-1/2">
            <div
              className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
              // style={backgroundImage}
            >
              <img src='images/service-img/partner-img.jpg' alt="" />
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 className="text-3xl text-gray-800 font-bold">
              Why Make Us Your Outsourcing Partner?
              
            </h2>
            <p className="mt-4 text-gray-600">
            We specialize in crafting custom software solutions that are
                designed to address your specific business requirements. Our
                development process involves in-depth analysis, to ensure that
                the final product aligns perfectly with your vision.
            </p>
            <div className="mt-8">
              <a href="/" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">
                Start Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="blogs max-w-screen-xl mx-auto">
        <motion.h1 variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="pt-10 mb-10 text-3xl font-bold text-gray-800 text-center">
          BLOGS
        </motion.h1>
        <motion.span variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="2xl font-bold text-gray-700 text-center block mb-4">
          Explore the Latest Blogs on Trends and Technology.
        </motion.span>
        <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="flex flex-wrap justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105 ">
            <img
              className="w-full"
              src='/images/service-img/blog-img1.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Loravel Microservices
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                15/11/2023
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105">
            <img
              className="w-full"
              src='/images/service-img/blog-img2.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                How to create Food Delivering App like Eatclub?
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20/11/2023
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105">
            <img
              className="w-full"
              src='/images/service-img/blog-img3.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                How to create a Transportation App Like Transit?
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                10/11/2023
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="review">
        <div
          className="bg-gray-600 rounded-lg md:p-8 dark:bg-gray-800"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
         <motion.h1 variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="pt-10 mb-10 text-3xl font-bold text-gray-100 text-center">Glimpse Of Our Work And Presence..</motion.h1>

          <motion.dl variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-4 dark:text-white sm:p-8 ml-22">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">4500+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                App Developed
              </dd>
            </div>

            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">2200+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Website Designed
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">2700+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Happy Clients
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Developers
              </dd>
            </div>
          </motion.dl>

          {/* Second Row */}
          <motion.dl variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-4 dark:text-white sm:p-8 ml-22">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">120+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                AI & IOT Solution
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">140+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
               Game Developed
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">120+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Salesforce Solutions
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">40+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Data Science
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
     
      <div className="resarch pt-10 max-w-screen-xl mx-auto">
        <motion.h1 variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="pt-10 mb-10 text-3xl font-bold text-gray-800 text-center">
          Resarch
        </motion.h1>
        <motion.span variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}}  className="2xl font-bold text-gray-700 text-center block mb-4">
        A Well-Detailed Research About The Innovative Topics.
        </motion.span>
        <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.5}} className="flex flex-wrap justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105 ">
            <img
              className="w-full"
              src='/images/service-img/resarch-img1.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
               How AI Is Transforming BusinesseLA complete Guide
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Harnil Oza
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105">
            <img
              className="w-full"
              src='images/service-img/resarch-img1.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                How to Hire PHP Developer in 2023?
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Harnil Oza
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-auto transition duration-300 hover:scale-105">
            <img
              className="w-full"
              src='/images/service-img/resarch-img1.jpg'
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Definitive Guide to Hire Unity3D Developers in 2023
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Harnil Oza
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      
    </div>
  );
}
