import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../varients";
import Technology from "../Technology";
import Footer from "../../../../common/Footer";
import Header from "../../../../../components/common/Header"
import Topbar from "../../../../common/Topbar";
export default function Android() {
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
              <span className="block xl:inline">Android App Development</span>
              <span className="block text-indigo-600 xl:inline">Company</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Android App Development Experts With The Proficiency to Develop
              the Most Unique App Solutions!
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
              src="\images\service-img\mobiletab.png"
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
              Custom Android App Development Expertise Enriched With Years Of
              Experience
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              Being a top app development company, we have expanded our
              boundaries above and beyond the offering of device-specific app
              development services. Our Android app developers in India have
              built a portfolio successfully developing and delivering various
              mobile app solution for the Android platform that ranges from
              on-demand applications to IoT applications.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              When it comes to focusing on browsing specification we have
              deployed Android applications browsable for SmartTV, wearable
              devices, tablets, and of course mobile devices. Without doing much
              except blending our Android app development expertise well with
              our client's app idea, we have made ourselves one of the most
              preferred Android Application development partners for global
              business.
            </p>
          </motion.section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 mt-5">
              Keeping "the practice makes a man perfect" in the center, our
              Android developers have achieved remarkable success by offering
              Android app development services to successfully deploy
              easy-to-use, intuitive, and feature-rich mobile applications for
              Google Playstore. Various global businesses have achieved their
              much-anticipated outcomes by hiring Android developers from us.{" "}
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
          Android App Development Service Offering
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="text-gray-700 p-6 text-center"
        >
          Android application development services that help small to
          enterprise-level businesses to own custom and feature-rich Android
          apps enriched with top-notch features and functionalities to reach a
          global audience in a more innovative way.
        </motion.p>
      </div>

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
              Android Software Testing
            </h1>
            <p className="px-4 text-gray-500">
              Our Android Software Development team makes sure to cover all the
              aspects of the development process including testing the
              application. Leverage their expertise in working with manual and
              automated testing automation tools to make sure you and your users
              get the perfect and feature-rich application.
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
              IoT App Development
            </h1>
            <p className="px-4 text-gray-500">
              Get an industry-specific IoT application from Android app
              developers that not only has the expertise but also has the
              experience to develop IoT solutions that offer exceptional device
              accessibility through mobile applications from a remote
              environment.
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
              App Migration to Android Platform
            </h1>
            <p className="px-4 text-gray-500">
              Make your existing application browsable for the platform with the
              most dominating smartphone user base to enhance your app users,
              ROI, and target audience base by levering our Android mobile app
              development knowledge.
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
              Hire Android Developers
            </h1>
            <p className="px-4 text-gray-500">
              Leverage the expertise of the developers who have magnified their
              Android development capabilities offering innovative solutions to
              the global business by Hiring top Android App developers from us.
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
              Game Deployment
            </h1>
            <p className="px-4 text-gray-500">
              Do we help with the deployment process? Of course, yes. Whether
              you need to release your gaming solution on the Apple app store,
              Google play store, epic game store, or any other platform, we will
              be there for you. The game developers at Ryt'sence can provide
              great assistance to make your game available for your end users.{" "}
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
              Support and Assistance
            </h1>
            <p className="px-4 text-gray-500">
              The work still needs to be done. The game development team ensures
              your game stays updated and never faces any technical glitches for
              all platforms. We make sure your game fulfills every industry
              standard and rule so you or your game never face any backlashes
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
        Android App Development Technologies
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-700 p-6 text-center"
      >
        Leverage the Technical Expertise of A Top App Development Company to Own
        Feature-rich Android Applications
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Front-end Development
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Native(Java/Kotlin)
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Xamarin Native C
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Xamarin
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Xamarin Forms For Android
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Cordova/ PhoneGap
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              React Native
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Operating System
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Android Os
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            SDKs/Tools/Framework
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Android Studio
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Fit SDK
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Assistant SDK
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Open GL
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              AR Core
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Android Auto
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Others
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Assistant
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google VR
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Machine Learning
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Firebase
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Cloud
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Analyst
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Cloud Platform
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Microsoft azure
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Google Cloud
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              PlatForm (GCP)
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Fiebase
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              AppCenter for CI/CD
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Kubernetes
            </span>
          </div>
        </div>
      </motion.div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-center mt-8">Frequently Asked Questions</h1>

      <div   className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
        <details className="p-6 group" open>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              1. How can I find the best Android app development team for my development project requiremnts?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          You can reach out to one of the top Android app development companies like Hyperlink InfoSystem and share your development requirements with them. Finalize the best one, based on their Android app development expertise, development knowledge, years of experience, and advanced skills to develop digital solutions based on your project requirements.
          </p>
         
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
             What toools and technologies do you use for development?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          There are various tools and technologies we use for Android development. Some of them include Android Studio, AVD Manager, Eclipse, XML, SQLite, Android NDK, Realm, Android SDK, Fabric, Genymotion, GameMaker: Studio, and various others. Along with this, our Android app development team keeps themselves knowledgeable about almost every latest trend which can help us to choose the most suitable tech stacks based on your development requirements.          </p>
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
            Can I hire dedicated developers from your company ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          As our Android app developers hold the experience and expertise to deliver outstanding results with the highest optimization. We allow businesses to hire developers from our Android development team that can take advantage of our technical expertise to get much-anticipated development outcomes.          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
             How much can Android developmnt app cost ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Android App development cost estimation does not depend on just one factor. The cost estimation considers various factors such as your development project requirements, type of app development solution, the complexity of the solution, features and functionalities to include in the mobile application and many more.</p>
                    

          
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
      How Much time app development can take ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Just as the cost estimation, defining the time frame of the Android app development solution depends on various factors such as project requirements, app development time frame, the complexity of the app development, the type of solution, features, and functionalities of the mobile application, the required app development team, and many more.          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
          How do you assure the confidentialy of my app idea ? ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Your app idea matters to us as much as it does to you. So before moving on with anything else we make sure to sign an NDA to keep your app idea always safe and secure.          </p>
        </details>
      </div>
     <Technology/>
     <Footer/>
    </div>
  );
}
