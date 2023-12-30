import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Technology from "../mobile-app/Technology";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Topbar from "../../../common/Topbar";

export default function Game() {

  return (
    <div>
      <Topbar/>
      <Header/>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer ">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="xl:max-w-6xl"
            src="\images\service-img\game-banner.jpg"
            alt=""
          />
          <motion.div
            variants={fadeIn("leftt", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="content  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-28"
          >
            <h2 className="text-3xl text-black font-bold mt-4 md:mt-10">
              Game Development Company
            </h2>
            <p className="my-3 text-justify font-medium text-black leading-relaxed">
              Hire Game developers from a top game development company and Step
              Up Your game for you and every gamer out there.
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Read More
            </button>
          </motion.div>
        </section>
      </section>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
          Game Development - The Process Of Offering Fun With The Integration Of
          Technical Expertise
        </h1>
        <p className="mt-6 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl">
          Throughout our entire life, we have been addicted to at least one
          game, whether it could be a card game, candy crush, or GTA. Like some
          of these, there are tons of fantastic games that exist already and
          will come into the market to entertain gamers, all thanks to game
          development.
        </p>
      </motion.div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight text-center mt-10">
          Game Development Services Of Rytsense
        </h1>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col md:flex-row mt-5 p-10"
        >
          <div className="bg-white p-6 flex-1">
            {/* Content for first column */}
            <h2 className="text-3xl font-semibold">Mobile Game Development</h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Got a fantastic gaming app idea? Hire game developers from
              Rytsense technology and get an excellent mobile gaming
              application that works well on Android, iOS, and every other
              operating system..
            </p>
          </div>
          <div className="bg-white p-6 flex-1 mt-4 md:mt-0 md:ml-4">
            {/* Content for second column */}
            <h2 className="text-3xl font-semibold">Custom Game Development</h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Have you got an out-of-the-box game development idea? Then you
              will need assistance from game developers that are not just
              ordinary. Rytsense Technology has got some of them.
            </p>
          </div>
          <div className="bg-white p-6 flex-1 mt-4 md:mt-0 md:ml-4">
            {/* Content for third column */}
            <h2 className="text-3xl font-semibold">Web Game Development</h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Get help from the experts of the top game development company that
              can offer an outstanding user experience integrating the latest
              game development technologies..
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          <img
            className="mx-auto block w-full md:w-auto"
            src="\images\service-img\game-img1.png"
            alt="Responsive Image"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col md:flex-row mt-5 p-10"
        >
          <div className="bg-white p-6 flex-1">
            {/* Content for first column */}
            <h2 className="text-3xl font-semibold">Custom Game Development</h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Have you got an out-of-the-box game development idea? Then you
              will need assistance from game developers that are not just
              ordinary. Rytsense Technology has got some of them.
            </p>
          </div>
          <div className="bg-white p-6 flex-1 mt-4 md:mt-0 md:ml-4">
            {/* Content for second column */}
            <h2 className="text-3xl font-semibold">
              Character Or Avatar Creation
            </h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Hire dedicated game developers from Rytsense Technology that hold
              proficiency in creating interactive avatars and characters that
              can create magic for metaverse games and mobile games based on
              your requirements.
            </p>
          </div>
          <div className="bg-white p-6 flex-1 mt-4 md:mt-0 md:ml-4">
            {/* Content for third column */}
            <h2 className="text-3xl font-semibold">Concept Art</h2>
            <p className="my-3 text-justify font-medium text-gray-600 leading-relaxed">
              Get your game development idea's look and feel before turning it
              into a working gaming solution. Hire game developers from
              Rytsense Technology that can be there for you whether you need
              character design, prop design, or Landscape design.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16"
      >
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <h1 className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
            We Don't Do Things Just For The Sake Of Doing Them.
          </h1>

          <div className="relative">
            <a href="/">
              <img
                className="w-full"
                src="\images\service-img\game-img-2.jpg"
                alt="Sunset in the mountains"
              />
            </a>
          </div>
          <p className="text-gray-700 py-5 text-base leading-8">
            The game developers at Rytsense not only develop the game just
            because you bring them to us. We ensure you get the gaming
            application you have imagined while your gamers get the experience
            they have never imagined. The game developers at Rytsense work with
            multiple game development technologies to deliver these outstanding
            game development results.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row">
        {/* First Column with Card */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=" p-6 flex-1 "
        >
          <div className="border border-gray-300 rounded-lg shadow-md ml-10 p-8 bg-gray-300">
            {/* Content for card */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
              The Game <br />
              Development <br /> Tech Stacks <br /> tacksbr We Cover <br /> At
              Rytsense
            </h1>
            <a
              href=""
              className="bg-indigo-700 text-white border border-indigo-600 py-4 px-6 rounded inline-flex items-center mt-10"
            >
              View More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-2"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Second Column with Rows */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          {/* First Row */}
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            2D/3D Game Development
          </h1>

          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Want to offer a fantastic 2D gaming experience or an immersive
            gaming experience through 3D game development; game developers at
            Rytsense hold years of experience and expertise for both.
          </p>

          {/* Second Row */}
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            HTML 5 Game Development
          </h1>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Need a browser-based cross-platform gaming solution? HTML 5 game
            development is the perfect solution for you. Hire dedicated game
            developers from Rytsense who are efficient enough to work with HTML
            5 and fulfill your development requirements just the way you want.
          </p>

          {/* Third Row */}
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Unity 3D Game Development
          </h1>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            Hire experienced game developers from a top game development company
            that can create three-dimensional games through unity 3D game
            development that are appealing to play offering support throughout
            the game conceptualization to development.
          </p>
        </motion.div>
      </div>

      <div className="text-center p-10">
        <div className="flex flex-wrap items-center mt-20 text-left  ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full md:w-3/5 lg:w-1/2 px-4 "
          >
            <img
              src="\images\service-img\game-img-3.png"
              alt="gem"
              className="inline-block rounded  border border-gray-400 shadow-2xl h-full"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 "
          >
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-gray-600">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6 mb-5  text-gray-500">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-gray-600 ">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6 mb-5  text-gray-500">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-gray-600">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6 text-gray-500">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left ">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full md:w-3/5 lg:w-1/2 px-4"
          >
            <img
              src="\images\service-img\game-img4.png"
              alt="project members"
              className="inline-block rounded  border border-gray-400 shadow-2xl "
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12 "
          >
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-gray-600">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6 text-gray-500">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-gray-600">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6 text-gray-500">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row p-10"
      >
        {/* First Column with Paragraph */}
        <div className="bg-gray-100 p-6 flex-1">
          <h1 className="text-darken mb-3 text-3xl font-medium lg:px-14">
            The Game Development Process We Follow
          </h1>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            There is a reason we are well-known as a top game development
            company. As there is much more to deal with and deliver even for the
            single game development project, we follow the accurate game
            development process. The game development process not only helps the
            game developers to define the accurate development time frame but
            also helps businesses to get the estimated development budget which
            we take into consideration with at most care.
          </p>
        </div>

        {/* Second Column with Card */}
        <div className="bg-gray-100 p-6 mt-4 md:mt-0 md:ml-4 flex-1">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              01
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Project Requirement Analysis
            </h1>
            <p className="px-4 text-gray-500">
              Once the client reached out to us with their game development
              requirements, we thoroughly analyzed the concept covering all the
              points, diagrams, scenarios, problems, flow charts, and SRS for
              the entire workflow before moving forward.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="h-full min-h-screen w-full bg-gray-100 pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              02
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Concept Art
            </h1>
            <p className="px-4 text-gray-500">
              Concept art is our second step, where our creative team of
              animators, rigging artists, modellers, and designers creates the
              2D and 3D art & sketches for the gaming equipment, characters,
              environments, props, and more.
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
              03
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
              Game Design
            </h1>
            <p className="px-4 text-gray-500">
              Are you happy with the game concept art delivered to you? If yes,
              here is where our game designers come into the picture. The team
              of prolific game designers will design the entire game blending
              their amazing designing skills with top-notch design software
              precisely.
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
              04
            </modiv>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
              GARDEN BED MAINTENANCE
            </h1>
            <p className="px-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure
              inventore amet modi accusantium vero perspiciatis, incidunt dicta
              sed aspernatur!
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
              05
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Testing and Automation
            </h1>
            <p className="px-4 text-gray-500">
              Is this the end? Of course not. Our QA engineers will test the
              entire game and will try to find the bugs or flaws that might have
              found their way during the game development process. The QA
              engineers will test the entire game before the game deployment
              phase.{" "}
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
              06
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
              Game Deployment
            </h1>
            <p className="px-4 text-gray-500">
              Do we help with the deployment process? Of course, yes. Whether
              you need to release your gaming solution on the Apple app store,
              Google play store, epic game store, or any other platform, we will
              be there for you. The game developers at Rytsense can provide
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
              07
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
        className="text-center p-10"
      >
        <h1 className="text-3xl font-extrabold tracking-normal text-gray-900 sm:text-3xl md:text-3xl md:leading-none">
          <span className="block">
            Who Will Work On Your Game Development Project?
          </span>
        </h1>
        <p className="max-w-sm mx-auto mt-1 font-normal text-gray-500 text- sm:mt-5 sm:text-md md:mt-5 md:text-xl sm:max-w-2xl md:max-w-2xl">
          Who makes us a top game development company? Well, a few of our
          experts make Rytsense one of the top game development companies and
          help to turn the game development requirement into a successful gaming
          solution. Who are these geniuses of Rytsense?
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row p-10">
        {/* First Column with Paragraph */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 flex-1"
        >
          <h1 className="text-xl font-extrabold tracking-normal text-gray-900 sm:text-xl md:text-xl md:leading-none">
            Game Animators
          </h1>
          <p className="my-3 text-justify text-gray-700 leading-relaxed">
            The team of game animators at Rytsense includes 2D/3D artists,
            rigging creators, texturing creators, lighting creators, animators,
            and more. They leverage their creative mindset and skills to work a
            concept art of the game and be the backbone to bring the authentic
            look and feel of the gaming solution.
          </p>

          <h1 className="text-xl font-extrabold tracking-normal text-gray-900 sm:text-xl md:text-xl md:leading-none mt-10">
            Game Designers
          </h1>
          <p className="my-3 text-justify  text-gray-700 leading-relaxed">
            The game designers of Rytsense Technology bring the best of their
            creativity and skills to create an entire gaming solution starting
            from the game logo to the game storyline, characters, gaming
            scenario, and everything in between. They stay connected with other
            game development team members to portray your ideas in the most
            precise manner.
          </p>
        </motion.div>

        {/* Second Column with Image */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          <img
            className="mx-auto block w-full md:w-auto"
            src="\images\service-img\game-img-5.png"
            alt="Responsive Image"
          />
        </motion.div>

        {/* Third Column with Paragraph */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          <h1 className="text-xl font-extrabold tracking-normal text-gray-900 sm:text-xl md:text-xl md:leading-none mt-10">
            Game Developers
          </h1>
          <p className="my-3 text-justify  text-gray-700 leading-relaxed">
            Proficient game developers at Rytsense Technology develop and offer
            an immersive gaming world as an end product enriched with different
            gaming scenarios, landscapes, and gaming features following
            different gaming algorithms and integrating APIs. Along with that,
            the game developers of Rytsense Technology are also responsible for
            offering after-sale support.{" "}
          </p>

          <h1 className="text-xl font-extrabold tracking-normal text-gray-900 sm:text-xl md:text-xl md:leading-none mt-10">
            Game Testers
          </h1>
          <p className="my-3 text-justify  text-gray-700 leading-relaxed">
            Being one of the best critics and hardcore gamers, our team of
            testers test all the game scenarios and entire gaming solutions
            through manual testing and automation tools to make sure you release
            the game without any bugs or technical errors and offers an
            immersive gaming experience to your gamers.{" "}
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center p-20"
      >
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left text-gray-700">
          Reasons To Choose Rytsense Technology For Your Next Game Development
          Requirement
        </h1>
        <p className=" md:text-base lg:text-lg xl:text-xl text-gray-600 text-left">
          No matter whether you reach out to the game development team of
          Rytsense Technology with cross-platform game development, native
          development requirements, or game porting requirements, we can be the
          best game development agency you can partner up with. Here are some of
          the reasons that make us the best game development partner for you.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row"
      >
        {/* First Column with Image */}
        <div className="bg-white p-24 flex-1">
          <img
            className="object-cover h-full w-full md:w-auto rounded-3xl"
            src="\images\service-img\game-img6.png"
            alt="Image"
          />
        </div>

        {/* Second Column with Rows */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-8 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          {/* First Row with Paragraph */}
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left text-gray-700 mt-28 p-5">
            Team of Hardcore Game Developers
          </h1>
          <p className="my-3 text-left text-gray-700 leading-relaxed ">
            The Game development team of Rytsense make sure to bring their
            A-game throughout the game development process and make sure to
            develop innovative gaming solutions no matter whether you come up
            with a single-player, multiplayer, or AR/VR game development
            requirement.
          </p>

          {/* Second Row with Two Columns for Images */}
          <div className="flex flex-col md:flex-row ">
            <img
              className="w-full md:w-1/2 rounded mr-5"
              src="\images\service-img\game-img7.png"
              alt="Image 1"
            />
            <img
              className="w-full md:w-1/2 rounded"
              src="\images\service-img\game-img8.png"
              alt="Image 2"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row">
        {/* First Column with Image */}
        <div className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1">
          {/* First Row with Paragraph */}
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left text-gray-700 mt-28 p-5"
          >
            Team of Hardcore Game Developers
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="my-3 text-left text-gray-700 leading-relaxed ml-5 "
          >
            The Game development team of Rytsense make sure to bring their
            A-game throughout the game development process and make sure to
            develop innovative gaming solutions no matter whether you come up
            with a single-player, multiplayer, or AR/VR game development
            requirement.
          </motion.p>

          {/* Second Row with Two Columns for Images */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col md:flex-row "
          >
            <img
              className="w-full md:w-1/2 rounded mr-5"
              src="\images\service-img\game-img11.png"
              alt="Image 1"
            />
            <img
              className="w-full md:w-1/2 rounded"
              src="\images\service-img\game-img10.png"
              alt="Image 2"
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-24 flex-1"
        >
          <img
            className="object-cover h-full w-full md:w-auto rounded-3xl"
            src="\images\service-img\game-img9.png"
            alt="Image"
          />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* First Column with Image */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-24 flex-1"
        >
          <img
            className="object-cover h-full w-full md:w-auto rounded-3xl"
            src="\images\service-img\game-img12.png"
            alt="Image"
          />
        </motion.div>

        {/* Second Column with Rows */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-8 mt-4 md:mt-0 md:ml-4 flex-1"
        >
          {/* First Row with Paragraph */}
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left text-gray-700 mt-28 p-5">
            Different Engagement Model
          </h1>
          <p className="my-3 text-left text-gray-700 leading-relaxed ml-5">
            You choose the best-fit engagement model based on your project
            requirements and hire dedicated game developers for resource base,
            time and material base or for a fixed cost. The team of Rytsense
            have got you covered in every way possible.{" "}
          </p>

          {/* Second Row with Two Columns for Images */}
          <div className="flex flex-col md:flex-row ">
            <img
              className="w-full md:w-1/2 rounded mr-5"
              src="\images\service-img\game-img13.png"
              alt="Image 1"
            />
            <img
              className="w-full md:w-1/2 rounded"
              src="\images\service-img\game-img14.png"
              alt="Image 2"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* First Column with Image */}
        <div className="bg-white p-6 mt-4 md:mt-0 md:ml-4 flex-1">
          {/* First Row with Paragraph */}
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left text-gray-700 mt-28 p-5"
          >
            Client Diversification
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="my-3 text-left text-gray-700 leading-relaxed ml-5 "
          >
            Being a top game development company, we work with various global
            brands that include startups to fortune 500 companies of different
            industries. So, we are good at building a gaming solution that
            represents your business goal and brand image well.{" "}
          </motion.p>

          {/* Second Row with Two Columns for Images */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col md:flex-row "
          >
            <img
              className="w-full md:w-1/2 rounded mr-5"
              src="\images\service-img\game-img17.png"
              alt="Image 1"
            />
            <img
              className="w-full md:w-1/2 rounded"
              src="\images\service-img\game-img16.png"
              alt="Image 2"
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="bg-white p-24 flex-1"
        >
          <img
            className="object-cover h-full w-full md:w-auto rounded-3xl"
            src="\images\service-img\game-img15.png"
            alt="Image"
          />
        </motion.div>
      </div>

      <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-xl sm:text-4xl font-semibold  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            Partner Up With None Other Than The Best Game Development Agency
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="relative"
          >
            <p className="text-gray-700 py-5 text-base leading-8">
              With the gaming business turning into a strong,
              multi-billion-dollar substance, the necessities for games
              introduced in the market are expanding in mathematical movement.
              In this way, picking the organization to develop your game is an
              essential choice. With our extraordinary blend of involvement and
              skill, we give full-cycle game development services to make your
              title a religion exemplary, a social peculiarity or, at any rate,
              a high-netting crowd top choice.
            </p>

            <a href="/">
              <img
                className="w-full"
                src="\images\service-img\game-img18.png"
                alt="Sunset in the mountains"
              />
            </a>

            <p className="text-gray-700 py-5 text-base leading-8">
              Rytsense Technology can assist you with developing a game with
              the most elevated level of quality. Our game developers and QA
              team will overcome any issues starting from development to
              delivery with a careful testing cycle. Before we deliver the final
              product, the QA testing team of Rytsense Technology always tests
              the gaming solution to eliminate any defects that slip through in
              the developing phase, along with any significant updates that need
              to be upgraded.
            </p>
            <p className="text-gray-700 py-5 text-base leading-8 mt-5">
              An ideal fit for games overpowered with graphics, which is normal
              for first-individual shooters, procedures, secrecy, and
              action-adventure games enables Rytsense game developers to
              develop dazzling visual encounters for gamers across the globe.
              Incredible Engine is a self-evident and conventional decision for
              AAA titles and plum for game development organizations. With a
              wide involvement with UE, Hyperlink game development company is
              here to convey market-cutthroat games.
            </p>
          </motion.div>
        </div>
      </div>
      <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-700">
        Our Featured
      </h1>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap -mx-1 item-center justify-center"
      >
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 py-2">
          <div className="relative group">
            <a href="/">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
                src="\images\service-img\runner 1.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="font-bold text-4xl text-white">Runner</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 py-2">
          <div className="relative group">
            <a href="/">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
                src="\images\service-img\poker.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="font-bold text-4xl text-white">Poker</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-1 py-2">
          <div className="relative group">
            <a href="/">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center transition duration-300 transform group-hover:scale-105"
                src="\images\service-img\Carrace.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="font-bold text-4xl text-white">Carrace</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
        <details className="p-6 group" open>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              What type of technologies does Ryt'tense Technology use for game
              development
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
            The wide universe of game app development requires considerable
            knowledge of the famous game engines. Our game app development team
            installs their inventively splendid game themes in the specialized
            specifications of the accompanying famous programming tools and game
            engines
          </p>
          <ul className="list-disc ml-10">
            <li className="py-2"> Cocos 2D</li>
            <li className="py-2">Cocos 2D-X</li>
            <li className="py-2">Unity 3D</li>
            <li className="py-2">Box2D</li>
            <li className="py-2"> Corona</li>
            <li className="py-2">OpenAL</li>
            <li className="py-2">Steam Programming</li>
            <li className="py-2">OpenGL ES(1.1- 2.0+)</li>
          </ul>
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Will Rytsense assist in publishing my game ?
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
            When you hand over your game development project requirements into
            the imaginative hands of our game developers, Rytsense will be with
            you till the last phase of publishing your games and sending them
            live on the web.
          </p>
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Can you help me develop one mobile gaming application which can
              support all the platform like iPhone,iPad Android.
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
            Yes, Rytsense game developers can develop applications/games that
            would work on all platforms. For such development, we choose to go
            for cross-platform mobile development in which our developers use
            frameworks that are used to develop the main application and then
            deploy it across all the platforms you want. For more information on
            our cross-platform gaming development services, you can reach out to
            us with your requirements, and we will guide you for the further
            process.
          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              What process involved in game development ?
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
            At Rytsense Technology, the entire process of the evolution of
            mobile game development is categorized into various stages such as
            pre-production, production and post-production.{" "}
          </p>
          <ul className="list-disc ml-10">
            <li className="py-2 font-bold"> Pre-Production Stage includes</li>
            <li className="py-2">Finalizing concept and theme of the game</li>
            <li className="py-2">Storyline</li>
            <li className="py-2">Finalizing Project Plan</li>
            <li className="py-2"> Architecture Designa</li>
          </ul>

          <ul className="list-disc mt-5 ml-10">
            <li className="py-2 font-bold"> The Production Stage includes</li>
            <li className="py-2">Design</li>
            <li className="py-2">Development</li>
            <li className="py-2">Testing & QA</li>
          </ul>

          <ul className="list-disc mt-5 ml-10">
            <li className="py-2 font-bold">
              {" "}
              The post-Production Stage includes
            </li>
            <li className="py-2">Deployment</li>
            <li className="py-2">Maintenance</li>
          </ul>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Can you develop multiplayer games without a server ?
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
            Our team of developers are experienced enough to develop gaming
            solutions with the server or without the server as well. But it is
            always advisable to have a gaming solution with the server as it
            solves various security problems, keeping software and data in check
            to protect them. It keeps your gaming solution safe from cyber
            threats and alteration as well..
          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Which game engine is superior to developing VR and Ar games:
              Unreal or Unity ?
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
            For AR it is difficult to look past Unity. It has been supporting AR
            for much longer than Unreal and is as yet the main platform that can
            develop holo lens applications. But when it comes to VR it is a
            totally different question. Again on the off chance that you are
            looking toward more versatile VR, Unity's mobile support will help a
            ton.
          </p>
        </details>
      </div>
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
