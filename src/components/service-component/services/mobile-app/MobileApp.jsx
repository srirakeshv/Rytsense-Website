import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../varients";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header"
import Technology from "./Technology";
import Topbar from "../../../common/Topbar";

export default function MobileApp() {
  return (
    <div className="mobile-app">
      <Topbar/>
      <Header/>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              Mobile App{" "}
              <span className="text-indigo-600">Development Company</span>
            </h2>
            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-800">
            Get Top-notch, Extensively, Innovative Mobile App Solution By Us.
.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
              >
                Start Exploring
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="\images\service-img\mobile-banner.png"
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
              className="my-4 font-bold text-3xl text-indigo-800 sm:text-4xl mb-4"
            >
              Overview
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700"
            >
              The smartphone Apps have changed the definition of every day
              activity in human life. It has been an essential part of our lives
              and why not? We do almost everything with the help of an app. The
              world is connected with mobile apps. In this really techie era,
              Rytsense Technology can help you to craft some excellent mobile
              application for your business & start-ups. We are the leading
              tailor made mobile app development company, serving finest apps
              across the globe.
            </motion.p>
          </section>
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700">
              We have top mobile app developers who are highly skilled and
              updated with the latest technology trend. Our team works with the
              global firms to transform recognized ideas into stunning &
              inventive mobile Apps. We have rich experience and creativity in
              producing stunning mobile apps for different clients over the
              world.
            </p>
          </motion.section>
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="mx-auto max-w-screen-md text-center border border-gray-400 shadow-lg rounded  h-auto p-10 bg-indigo-700"
        >
          <h2 className="mb-4 text-2xl tracking-tight font-bold leading-tight text-white">
            Want to know How Much Exactly Your Mobile App Will Cost ?
          </h2>
          <p className="mb-6 text-white md:text-lg">
            "The Experts Are Just A CLick Away . Get A Quote"
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  bg-pink text-white shadow rounded-lg hover:transition-all mb-7"
          >
            Share Your Idea
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
        <section className="bg-white text-gray-600 py-32 min-h-screen w-full">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 border border-gray-300 shadow-lg">
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  What Is Mobile App Development?
                </motion.summary>
                <div className="px-4 pb-4 ">
                  <motion.p
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className=""
                  >
                    Even though we have heard the term Mobile app development
                    thousands of times in our lives, we can not elaborate on the
                    term mobile app development with a proper definition. If we
                    talk about the definition of mobile app development; it is
                    the process of creating software for mobile phones and other
                    devices such as tablets, desktops, iPads and so on. The
                    software can be pre-installed on the devices or users can
                    get it by downloading it from the app store or the mobile
                    browsers. You must be wondering why you even need a mobile
                    application. What a mobile application can offer? That's one
                    of the basic questions every business owner faces while
                    starting with the mobile app development process. Let's
                    explore how mobile applications can make your business
                    extra-ordinary..
                  </motion.p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Why Mobile App Development Is Important For Businesses?
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Even though it sounds like nothing, The mobile application
                    can offer small changes that can leave a strong impression
                    on the businesses. The mobile application can help
                    businesses to send off compelling messages to the target
                    user base for a business relationship to generate more
                    leads. These messages are conveyed accurately. With the goal
                    that visitors can turn into a potential user base. Even a
                    push notification can turn into the greatest way of
                    communication that only mobile applications can offer..
                  </p>
                  <img src="\images\service-img\mobileapp-1.jpg" alt="" />
                  <h2 className="text-gray-700 font-bold ">
                    Work on User Expectation
                  </h2>
                  <p className="pt-5">
                    Mobile applications are important in fulfilling user
                    requirements. Users are for the most part glad to find a
                    mobile application that is not difficult to browse through
                    and fulfil their requirements without demanding any extra
                    effort. Mobile applications can enhance the user experience
                    through third-party tool integrations.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Strengthening Reliable Consumers Base
                  </h2>
                  <p className="mt-4 mb-4">
                    One more benefit of having a mobile application for your
                    organization is that it provides you with a consistent
                    comprehension of client demands. Organizations can keep up
                    with their customers by providing various kinds of discounts
                    and offers such as rebate coupons, vouchers, and so on. The
                    plan of action grants you to offer discounts to mobile app
                    users and is affirmed to be the best procedure..
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Ditch The Geographical Location Barriers
                  </h2>
                  <p className="mt-4 mb-4">
                    With many mobile applications, your business automatically
                    ditches the location barrier. It permits you, your workers,
                    and your clients to stay in touch with each other regardless
                    of timezone and location differences. It opens up the market
                    base for the customers that used to be a barrier for the
                    traditional businesses.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Customization
                  </h2>
                  <p className="mt-4 mb-4">
                    The reason individuals esteem applications are that they
                    assist clients with feeling unique. At the point when you
                    visit a website, you are consistently a guest. That's not
                    the case with mobile applications, it provides the homely
                    experience through customized features and functionalities.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Importance Of App Development In Different Industries
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    There is no rocket science in understanding that not every
                    business belongs to the same industry. But there is another
                    fact that mobile apps can help every business to enhance
                    their services no matter which industry they belong to.
                    There are various industries that already exist that mobile
                    app development has enhanced. Let's explore the importance
                    of mobile app development in different industries.
                  </p>
                  <img src="\images\service-img\mobileapp-4.jpg" alt="" />
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Education
                  </h2>
                  <p className="mt-4 mb-4">
                    Mobile innovation has made learning simple and affordable
                    right now. In the period of e-learning, the mobile
                    application upgrades the interest of students in learning
                    and understanding subjects effectively and rapidly. These
                    days, from nursery to postgraduate, mobile applications help
                    in delivering the subject sumptuously.{" "}
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Games and Entertainment
                  </h2>
                  <p className="mt-4 mb-4">
                    From renowned animation characters to most loved
                    entertainers and idols, gaming and entertainment
                    applications are administering the application business. A
                    pattern of film applications before their release likewise
                    attracts the attention of a worldwide crowd.
                  </p>
                  <p className="mt-4 mb-4">
                    Even the gaming mobile applications have different
                    categories that include mind games, sports, adventure,
                    education, action, and racing and it's just the tip of the
                    iceberg. These mobile-based games can attract individuals
                    without putting any restrictions on age bar, locality or any
                    other.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Travel and Tourism
                  </h2>
                  <p className="mt-4 mb-4">
                    Travel and Tourism applications additionally become one of
                    the most famously utilized applications around the globe.
                    These days, the travel industry enterprises began looking
                    for the assistance of mobile app makers to upgrade the
                    travel app development and prestige of their business.
                    Knowing the realities about the huge advantages of mobile
                    applications for the travel industry business, today, the
                    travel industry is appreciating acquiring unexpected
                    results.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Banking & Finance
                  </h2>
                  <p className="mt-4 mb-4">
                    Mobile applications meet every one of the goals of the
                    banking and finance industry by offering unparalleled
                    benefits to their users. Containing top-of-the-line security
                    levels in an application, the mobile banking application
                    turns into the most helpful apparatus for the business to
                    charm the clients. It helps the financial area to further
                    develop customer engagement, offer enhanced assistance and
                    remain connected by enlightening them about new monetary
                    products, plans and offers. A few simple-to-use elements can
                    make the banking application aid its clients. Subsequently,
                    a productive mobile application helps engage more and more
                    user base.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Most Trendy Mobile App Ideas 2022
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Now you have all the required knowledge about the app
                    development process that you should have but wait do you
                    really want to stand out from the others? Do you think your
                    app development idea will help you stand out? If you have a
                    second thought about it, here is the list of trending mobile
                    app development ideas that can help you stand out from your
                    competition and help you earn as well.
                  </p>
                  <img src="\images\service-img\mobileapp-3.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    You can hire On-demand app developers that can develop a
                    solution to show the biggest amount of food sellers and
                    permit users to look at costs and estimated delivery time.
                    Another smart thought is to add a few features such as
                    search, food preference filters and various others so users
                    could track down the most ideal choice for their food
                    preferences. You can charge a small amount from the sellers
                    whenever users order their food through your application as
                    your monetization method.{" "}
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    An Augmented Reality Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-4.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    We can not consider Augmented reality a trending technology
                    now but even with this much popularity, we will not find
                    many successful and popular AR-related mobile applications.
                    AR-based mobile applications can rule in many industries
                    such as can introduce a travel application that helps the
                    users to get a real-life traveling experience even without
                    actually visiting a place. You can introduce an AR-based
                    e-learning mobile application that can help the medical
                    student to have their practical lessons without actually
                    working with the real corps or engineering students can have
                    practical lectures without visiting the site. You can make
                    your ordinary mobile application extraordinary by
                    introducing the augmented reality feature no matter which
                    industry you belong to.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    An Internet of Things (IoT) Based Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-5.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    IoT-enabled appliances offer a way to enhance our day-to-day
                    life through the smart home, smart locks, smart office,
                    smart parking and down-the-line smart city. Even if we have
                    thousands of smart appliances, we will need a way for remote
                    communication. Your mobile app development can be that way
                    of communication. You can make users' lives easy by allowing
                    them to access their smart appliances through your IoT
                    mobile apps and keep them aware of the safety and security
                    of their belongings.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Video Streaming Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-6.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    Even though many individuals actually incline toward full
                    screens, most users can not access their laptops or big
                    screen whenever they want such as on public transport or
                    even at a remorse place. You can offer a cross-platform
                    video streaming mobile application with an extensive range
                    of features and functionalities that can deliver an
                    outstanding user experience on every device. Rather than
                    limiting the video categories to the specific ones you can
                    cover every aspect of the video streaming including talk
                    shows, reality shows, movies, series, product reviews,
                    online tutorials, lectures and various others.{" "}
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Music Streaming Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-7.jpg" alt="" />
                  Music streaming mobile applications can be one of the most
                  trendings mobile app ideas in the year 2022. But keep in mind
                  you can win over your target audience only if you can offer
                  what they exactly want. If we take Spotify as an example it is
                  popular among the users not only because it offers music but
                  it also offers a customized user library consisting of
                  enormous music and digital podcast library based on their
                  search results and history. It's difficult to rival Spotify
                  yet you actually can be extraordinary in the music streaming
                  mobile application market.
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    An E-learning Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-8.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    Individuals are prepared to pay for e-learning applications
                    in light of the fact that the comfort of a mobile
                    application permits them to learn in a hurry. Microlearning
                    is an instructive pattern that goes in accordance with ?
                    learning through mobile phones - it is a short and
                    concentrated opportunity for growth with scaled-down classes
                    and delivery that copies genuine critical thinking. This
                    approach permits employees to obtain both hard and soft
                    skills rapidly, on-demand, and without feeling
                    intellectually wrecked. There are now a lot of online
                    courses available for the employees. In that case, you can
                    show individuals anything: writing, reasoning, law, art
                    anything.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Networking Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-9.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    People around the globe do use various social media
                    applications such as Facebook, Instagram, LinkedIn and so on
                    but none of them offer networking opportunities. According
                    to the study directed by LendEDU, 44% of the youngsters use
                    tinder, not as a dating mobile app but to boost their
                    confidence and social communication skills. So, you can
                    understand the need for a networking mobile application that
                    can help the individual not just find the employees but
                    business partners. Where can individuals track down
                    instructors, specialists for articles and talks, and
                    collaborators? You can develop a networking mobile
                    application for that. You can add various filters allowing
                    app users to search by field, skill level, and location. In
                    applications like this, individuals will actually want to
                    track down a legal counselor to help their business or a
                    psychology expert to team up with on Instagram Live.{" "}
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Language Learning Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-10.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    In any case, even after the pinnacle of lockdown, e-learning
                    is still popular. As per ReportLinker, the educational app
                    market in the US is assessed at $90 billion in the year
                    2021. Furthermore, that's what Statista shows: "education"
                    was the third most famous industry in the App Store, making
                    8.66% of search requests. This information shows that
                    educational applications have a market need and energetic
                    development viewpoints, including monetization. For
                    instance, individuals like to learn foreign languages all
                    over the planet - so why not make a language-learning mobile
                    application? An application like this ought to have video
                    lessons or text content that concentrate on materials and
                    practice choices like self-check tests and video calls with
                    individuals from various nations.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Voice Translation Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-11.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    People are traveling around the globe whether it could be
                    for a business purpose or for traveling purposes. And even
                    though we think English is a global language, no it's not.
                    Many people around the globe who don't even speak English
                    and various others like to communicate in their own national
                    language even with foreigners. So, you can develop a voice
                    translation mobile application that can help foreigners to
                    understand different languages. It can also work as a
                    personal tour guide. It can be a way of communication as
                    well. As a monetization method, you can offer a freemium
                    model that facilitates users with limited-time free access
                    to your mobile application.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Reservation System Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-12.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    No one likes to wait in lines for long. You can help them
                    skip those lines by introducing a reservation booking mobile
                    application. You can allow them to reserve their seats in a
                    movie theater or in a concert and even in their favorite
                    restaurants. You can offer it all in one reservation system
                    that allows users to book their tickets for everything
                    starting from a bus to a concert all under one roof.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Virtual Interior Design Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-13.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    AR technologies are now sufficiently grown to involve them
                    as a reason for extraordinary items made for different
                    regions. For instance, you can introduce a mobile
                    application that can allow users to add a photograph of
                    their room and afterwards take a stab at "renovating" it
                    with various interior plans: change wall colors, try
                    different things with light, add and eliminate shades,
                    furniture things, and so on. This is an extraordinary mobile
                    application though even for a start-up business you could
                    monetize by collaborating with furniture stores or interior
                    design consultants.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Cooking Recipe Mobile App
                  </h2>
                  <img src="\images\service-img\mobileapp-14.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    There is no doubt in knowing that, people around the globe
                    are focusing on developing their hobbies, maintaining their
                    lifestyles and for both of them cooking ranks at the top.
                    Those days are long gone when people used to run away from
                    the kitchen. The pandemic has encouraged youth to build a
                    healthy lifestyle whether it could be making a Dalgona
                    coffee or planning a home dinner date with self-cooked food.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Reading Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-15.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    Simple reading mobile applications are really well known -
                    for instance, by December 2021 IReader, the greatest reading
                    mobile app in China, had 87.5 million active readers. Be
                    that as it may, to contend with such large players, you can
                    focus on more speciality content. You can make a reading
                    mobile application that offers content with kids' books,
                    non-fictional books, the XXth century writing or obscure and
                    intriguing works. Make a library, and distribute audiobooks
                    or translations to various languages for reading and
                    vocabulary practice. Furthermore, if you need to adapt your
                    reading application, put down a boundary for books
                    accessible each month and add additional paying choices
                    relying upon the amount of a bibliophile the mobile app user
                    is.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    A Social Gathering Mobile Application
                  </h2>
                  <img src="\images\service-img\mobileapp-16.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    Based on the report of Global News Wire, the dating mobile
                    application market has been consistently developing and is
                    going to flourish more. In 2020, the total dating mobile
                    application income came to $3.08 billion. The greatest
                    players available in the US-in view of the MAU are Tinder
                    and Badoo. 48% of dating application users have their
                    profile in one of these applications. So it will be
                    difficult for new businesses to fight in their ways with the
                    existence of these large mobile applications like Tinder -
                    that is the reason we recommend a focus on niche-specific
                    markets. For instance, as per the OnePulse review for The
                    Wall Street Journal led in 2021, 35% of individuals matured
                    16 to 24 utilized dating applications to find people for
                    socializing throughout recent months.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Types Of Mobile App Development
                </motion.summary>
                <div className="px-4 pb-4">
                  {/* native app */}
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Native App Development
                  </h2>
                  <p className="mt-4 mb-4">
                    Native app development refers to the mobile application that
                    is designed for specific mobile devices or operating
                    systems. The operating system can be Android, iOS, Windows
                    or so on. The native mobile application works only on the
                    devices they are built for. Just like every other person,
                    you must be thinking about what is the purpose of having a
                    Native mobile app if it represents only a specific operating
                    system. Well, let's discuss that as well.
                  </p>

                  <h3 className="text-gray-700 font-bold pt-5">
                    Benefits of Native Mobile App Development
                  </h3>
                  <span className="text-gray-500 font-bold mt-5">
                    Exclusive User Experience
                  </span>
                  <p className="mt-4 mb-4">
                    If you ask any professional app builders all of them will
                    agree that native mobile app development provides the best
                    user experience that no other mobile app development can
                    provide. As they are built using platform-specific
                    languages, APIs, and tools, they take less processing time
                    and tend to work faster than usual. They can offer
                    user-friendly app experiences due to preloaded app
                    functionality and faster loading time. Along with that, they
                    can offer an exclusive user experience even with lots of
                    features and functionalities.
                  </p>
                  <span className="text-gray-500 font-bold mt-5">
                    Familiar Look and Feel
                  </span>
                  <p className="mt-4 mb-4">
                    There is no rocket science understanding that every mobile
                    device has its own default applications. At the point when
                    you develop a native mobile application that is working for
                    a particular operating system, it's normally going to see
                    and feel the exact same to the users. It's like the
                    applications that are as of now on the device. This sort of
                    consistency and similarity is significant in light of the
                    fact that it makes a more realistic user experience.
                  </p>

                  <span className="text-gray-500 font-bold mt-5">
                    More Secure
                  </span>
                  <p className="mt-4 mb-4">
                    Security weaknesses rely incredibly upon an operating system
                    and how well an application's code is composed. Nonetheless,
                    the dangers are higher for different kinds of mobile
                    applications, for example, hybrid mobile applications, since
                    you are managing not just weaknesses remarkable to the
                    programming language it's utilizing, but at the same time
                    open to weaknesses that influence web browsers. With native
                    applications, security and data insurance is generally more
                    dependable.
                  </p>

                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Native Mobile App Development:
                  </h3>
                  <p className="mt-4 mb-4">
                    It is great for a gaming application that will permit app
                    developers to furnish the gamers with a natural encounter.
                    It also enhances the app performance as well, which is a
                    basic need for such applications.
                  </p>
                  <p className="mt-4 mb-4">
                    On the off chance that you wish to use the features of a
                    mobile application totally, you can go for the native
                    application. The total usage of the GPS, camera and other
                    features can give a superior user experience.
                  </p>

                  <h3 className="text-gray-700 font-bold mt-5">
                    Example of Native Mobile Application
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Scan To Go</li>
                    <li className="mt-2">WhatsApp</li>
                    <li className="mt-2">Spotify</li>
                  </ul>
                  {/* hybrid app */}
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Hybrid App Development
                  </h2>
                  <p className="mt-4 mb-4">
                    When it comes to Hybrid Apps, these mobile applications are
                    a blend of web applications and native application
                    development, thus they offer the best-case scenario. What
                    individuals love about Hybrid applications is that, unlike
                    native mobile applications, hybrid mobile applications can
                    chip away at numerous devices and operating systems, which
                    obviously saves Hybrid app development time and money.
                  </p>

                  <h3 className="text-gray-700 font-bold mt-5">
                    Benefits of Hybrid App Development
                  </h3>
                  <span className="text-gray-500 font-bold">
                    Improved UX and UI
                  </span>
                  <p className="mt-4 mb-4">
                    Since hybrid mobile applications join tech from both web
                    applications and native applications, the client experience
                    across stages is reliable and better than web applications
                    and PWAs ( Progressive Web Applications). They are
                    additionally lightweight, so you can envision that the UI
                    components and illustrations should load more quickly than
                    the others.
                  </p>
                  <span className="text-gray-500 font-bold">
                    Shorter Development Time
                  </span>
                  <p className="mt-4 mb-4">
                    Like PWAs (Progressive Web Applications), which are
                    additionally cross-platform, hybrid applications carve out
                    an opportunity to create more than Native applications.
                    There's a compelling reason to make different codebases for
                    different working frameworks. Hybrid applications capability
                    with only one codebase.
                  </p>
                  <span className="text-gray-500 font-bold">
                    High Performance
                  </span>
                  <p className="mt-4 mb-4">
                    Hybrid mobile applications are known for being quick and
                    high-performing since they do not depend on network
                    communication. Yet, applications that have weighty
                    illustrations, similar to top-quality games with extreme
                    animations, will probably perform better as a native
                    application. Toward the day's end, Native code will
                    continuously be quicker than HTML and JavaScript.
                  </p>

                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Hybrid Mobile App Development:
                  </h3>
                  <p className="mt-4 mb-4">
                    Facing issues with the usage of extensive API issues? The
                    Hybrid applications do not need an excessive number of APIs,
                    and you don't have numerous 3rd party integration issues.
                  </p>
                  <p className="mt-4 mb-4">
                    You can utilize the application for various mobile app
                    features such as in-app advertising, buys, and so on. All
                    adaptation prospects are accessible with the hybrid
                    application.
                  </p>

                  <span className="text-gray-500 font-bold">
                    Example of Hybrid Mobile Application
                  </span>
                  <ul className="list-disc ml-10">
                    <li className="mt-2"> Gmail</li>
                    <li className="mt-2">Evernote</li>
                    <li className="mt-2">Twitter</li>
                  </ul>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Mobile Operating System
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Since cell phone operating systems are so coordinated with
                    the look, feel and capability of a cell phone, many
                    individuals base their decision of the device around which
                    operating system it uses. .
                  </p>
                  <img src="\images\service-img\mobileapp-17.jpg" alt="" />
                  <p className="mt-4 mb-4">
                    You must be wondering why we are even discussing the mobile
                    operating system, right? Well, during the mobile app
                    development process you will have to figure out your
                    potential audience base and what type of device they use,
                    which can help you figure out the type of mobile application
                    of your development such as Native, Hybrid or so on.
                  </p>
                  <h1 className="font-bold text-2xl mt-3">iOS</h1>
                  <p className="mt-4 mb-4">
                    The Apple iOS multi-contact, performing various tasks
                    operating system, runs Apple's iPhone, iPad, and iPod.
                    Powers the Apple Watch to a unique form of the product.
                    Users can download a large number of mobile applications
                    right now accessible on the App Store straightforwardly to
                    any device running iOS, be it an iPhone or an iPad. These
                    incorporate everything from recipe books to Yoga tutorials
                    to games.
                  </p>
                  <h1 className="font-bold text-2xl mt-3">Android</h1>
                  <p className="mt-4 mb-4">
                    Google-owned Android is an open-source working framework
                    which allows app developers to get to develop the new
                    application as they wish. This implies limitless admittance
                    to any individual who needs to create applications for the
                    device and puts next to no limitation on its permitting, so
                    users benefit from masses of free content.
                  </p>
                  <p className="mt-4 mb-4">
                    After finalizing the operating system, the next thing should
                    be thinking about the app development process. But before
                    that, there are various technical things that shape the
                    mobile app development processes differently such as mobile
                    app development language, frameworks, tools and whether to
                    go with android app development or iPhone app development
                    and various other things. First thing first, let's start
                    with mobile app development languages.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Mobile App Development Languages
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Just as we have various languages that we speak and prefer,
                    the same goes with mobile app development as well. There are
                    various languages exist that mobile app developers prefer
                    while the development process and that shape the app
                    development process differently.
                  </p>
                  <img src="\images\service-img\mobileapp-18.jpg" alt="" />
                  <h1 className="font-bold text-2xl mt-3">Java Script</h1>
                  <p className="mt-4 mb-4">
                    The Apple iOS multi-contact, performing various tasks
                    operating system, runs Apple's iPhone, iPad, and iPod.
                    Powers the Apple Watch to a unique form of the product.
                    Users can download a large number of mobile applications
                    right now accessible on the App Store straightforwardly to
                    any device running iOS, be it an iPhone or an iPad. These
                    incorporate everything from recipe books to Yoga tutorials
                    to games.
                  </p>
                  <ul className="list-disc ml-10">
                    <h3 className="text-gray-700 font-bold mt-5">
                      JavaScript Features
                    </h3>
                    <li className="mt-2">
                      {" "}
                      A lightweight, platform-independent, and model-based
                      language.
                    </li>
                    <li className="mt-2">
                      Has various in-built functions like date and time.
                    </li>
                    <li className="mt-2">
                      Works best with object-oriented programming and dynamic
                      typing.
                    </li>
                    <li className="mt-2">
                      Works best with object-oriented programming and dynamic
                      typing.
                    </li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">Kotlin</h1>
                  <p className="mt-4 mb-4">
                    Supposed to be the high-level rendition of Java; Kotlin is a
                    measurably composed programming language utilized for
                    creating trendy Android applications. Kotlin can possibly
                    impact other programming dialects, for example, JAVA to make
                    high-performing and robust applications. Various well-known
                    applications like Trello, Coursera, Evernote and various
                    others are built using Kotlin.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      JKotlin Features
                    </h2>
                    <li className="mt-2">
                      {" "}
                      An open-source programming language.
                    </li>
                    <li className="mt-2">
                      Diminishes startup time for Android mobile apps.
                    </li>
                    <li className="mt-2">
                      Has perfect and compact code syntax.
                    </li>
                    <li className="mt-2">
                      Work well even with operator overloading..
                    </li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">C#</h1>
                  <p className="mt-4 mb-4">
                    Articulated as 'C-sharp' - this is another object-oriented,
                    broadly useful programming language widely utilized for
                    mobile app development, and significantly used for
                    cross-platform and windows based application development. C#
                    has all that you need to accomplish by utilizing other
                    programming languages like Swift, Objective-C, and JAVA
                    programming language. On the off chance that you want to
                    develop an intellectual and high-performing gaming
                    application, this is the best language.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      C# Features
                    </h2>
                    <li className="mt-2">
                      A cutting-edge, structured and versatile programming
                      language.
                    </li>
                    <li className="mt-2">
                      owns in-built libraries of function to facilitate app
                      developers.
                    </li>
                    <li className="mt-2">
                      Guarantees security of a code structure with type-safe
                      code.
                    </li>
                    <li className="mt-2">Is interoperable and updateable.</li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">Swift</h1>
                  <p className="mt-4 mb-4">
                    A game-changer mobile app development language - Swift is an
                    open-source programming language explicitly developed to
                    work with iOS, OS X, and tvOS platforms. The language is
                    adaptable, versatile, and can easily adapt into a safe
                    programming language that facilitates app developers to add
                    various features to any mobile application. Swift is
                    expressive and enjoyable to work with a scripting language,
                    alongside having the top modern quality frameworks. Some of
                    the well-known mobile applications like LinkedIn, Lyft,
                    Hipmunk and various others are developed using Swift.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      Swift Features
                    </h2>
                    <li className="mt-2">
                      {" "}
                      Offers Xcode - a free-standing IDE
                    </li>
                    <li className="mt-2">
                      Is type-safe and helps to find errors early during the
                      compilation process..
                    </li>
                    <li className="mt-2">
                      Offers various in-built memory management functionalities
                    </li>
                    <li className="mt-2">
                      In-built native error handling functionality..
                    </li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">Objective C</h1>
                  <p className="mt-4 mb-4">
                    An extended form of the C language, Objective C is a broadly
                    useful, object-oriented programming language with added
                    features like Smalltalk-style messaging. A well-updated and
                    mature programming language, Objective C offers exclusive
                    results for macOS and iOS application development and
                    operating systems.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      Objective-C Features
                    </h2>
                    <li className="mt-2">
                      Works well with both static and dynamic typing..
                    </li>
                    <li className="mt-2">
                      The Smalltalk functionalities offer message syntax the
                      same as natural language.
                    </li>
                    <li className="mt-2">Auto garbage collector.</li>
                    <li className="mt-2">Simple to introspect objects.</li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">Java</h1>
                  <p className="mt-4 mb-4">
                    ava is an official Android development - object-arranged
                    programming language. With in-built open-source libraries
                    promptly accessible for app developers to browse from. Java
                    is not difficult to deal with and offers the best
                    documentation and community support. With the help of Java's
                    energetic range of features, app developers can easily build
                    exclusive cross-platform mobile apps, Android applications,
                    games, server applications, embedded space, and websites,
                    and that's just the beginning
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      Java Features
                    </h2>
                    <li className="mt-2">
                      {" "}
                      A powerful, server-side programming language.
                    </li>
                    <li className="mt-2">
                      Easy compilation and interpretation..
                    </li>
                    <li className="mt-2">
                      Offers exclusive security features for the programs.
                    </li>
                    <li className="mt-2">
                      Provides access to modifiers and virtual machine sandbox.
                    </li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">HTML 5</h1>
                  <p className="mt-4 mb-4">
                    HTML 5 is one of the best programming languages if you want
                    to develop location-based mobile apps or web-fronted mobile
                    apps. This fifth version of HTML is not exactly a
                    programming language but a markup language that uses tags to
                    structure and present the substance of the website page. The
                    most recent updates of HTML 5 feature extraordinary features
                    like media components, multi-platform usefulness for various
                    projects, and speedy market deployment. Google Docs, Google
                    Drives and so on are built using HTML 5.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      HTML 5 Features
                    </h2>
                    <li className="mt-2">
                      HTML 5 offers various functionalities like vector
                      illustrations, improving the utilization of Adobe Flash
                      while making sites..
                    </li>
                    <li className="mt-2">
                      HTML 5 offers predefined labels to show header and footer
                      data, photographs, captions, and other comparable
                      components..
                    </li>
                    <li className="mt-2">
                      Has killed utilizing the "type" trait for contents and
                      scripts
                    </li>
                    <li className="mt-2">
                      Works well even with multiple tags and media components to
                      show content.
                    </li>
                  </ul>

                  <h1 className="font-bold text-2xl mt-3">Ruby</h1>
                  <p className="mt-4 mb-4">
                    Ruby is a back-end object-oriented scripting language
                    utilized in the development of web applications, servers,
                    framework utilities, and standard libraries. Throughout the
                    long term, Ruby has developed into a broadly useful,
                    undeniable level numerous paradigm, deciphered programming
                    language. Ruby is a functional language that
                    straightforwardly executes the interactions as opposed to
                    compelling the program in machine language. Various
                    well-known mobile applications such as Airbnb, Bloomberg,
                    Twitter and Spotify are developed using Ruby.
                  </p>
                  <ul className="list-disc ml-10">
                    <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                      Ruby Features
                    </h2>
                    <li className="mt-2">
                      {" "}
                      Works well with both Dynamic and Duck typing
                    </li>
                    <li className="mt-2">
                      Has a flexible and compact syntax..
                    </li>
                    <li className="mt-2">
                      Has various in-built extensive libraries of functions and
                      modules.
                    </li>
                    <li className="mt-2">
                      Exceptionally handles the exception and operator
                      overloading.
                    </li>
                  </ul>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Mobile App Development Frameworks
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    There are various mobile application frameworks that exist
                    and every one of them has its own abilities and
                    shortcomings. As app developers, you should reflect on the
                    project requirements before choosing the best app
                    development framework.
                  </p>
                  <img src="\images\service-img\mobileapp-19.jpg" alt="" />
                  <h1 className="font-bold text-2xl mt-3">React Native</h1>
                  <p className="mt-4 mb-4">
                    React Native is one of the main mobile app development
                    frameworks that mixes the critical pieces of native
                    development with React, which is a JavaScript library for
                    creating different UIs of cross-platform applications. One
                    can use React Native Framework in present iOS and
                    Android-based projects, or you can construct a totally new
                    application right without any preparation.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using React Native Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Further develops the work capability through reusable
                      parts.
                    </li>
                    <li className="mt-2">
                      Functions admirably even with high-load applications
                    </li>
                    <li className="mt-2">
                      Put forth a certain consistent quality and require fewer
                      attempts.
                    </li>
                    <li className="mt-2">
                      Best iOS development framework that helps SEO execution.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use React Native Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    Mobile app developers with the capability in JavaScript, and
                    there is no necessity for them to be only prepared with
                    Android-explicit Java or iOS's Swift.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Apps Built Using React Native
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2"> Facebook</li>
                    <li className="mt-2">Airbnb</li>
                    <li className="mt-2">Instagram</li>
                    <li className="mt-2">SoundCloud</li>
                    <li className="mt-2">UberEats</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Framework7</h1>
                  <p className="mt-4 mb-4">
                    Framework7 is an open-source cross-platform mobile
                    application development framework to develop various mobile
                    apps that can have a native-like look and feel. The
                    framework is a basic prototyping tool to grandstand working
                    application models rapidly. It empowers the structure of iOS
                    and Android applications.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Framework7 Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      It helps to develop quicker and more responsive mobile
                      applications..
                    </li>
                    <li className="mt-2">
                      It provides various tools and components that help the app
                      developers to enhance the development process.
                    </li>
                    <li className="mt-2">
                      Offers a practical and innovative Mobile UI to empower app
                      development projects.
                    </li>
                    <li className="mt-2">
                      More straightforward to develop mobile applications for
                      iOS and Android without completely learning them.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    WWhen to Use Framework7?
                  </h3>
                  <p className="mt-4 mb-4">
                    If you are an amateur mobile app developer who has just
                    started the development journey this is the ideal framework
                    to use for the front-end development. Apart from that, it is
                    a perfect choice for front-end developers who are more
                    attracted to application constructs.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications built with Framework7
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Cyberbrain</li>
                    <li className="mt-2">HICAPPS</li>
                    <li className="mt-2">Blokt</li>
                    <li className="mt-2">Kidoverse</li>
                    <li className="mt-2">Wappler</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Flutter</h1>
                  <p className="mt-4 mb-4">
                    Flutter is one of the most mind-blowing mobile app
                    development frameworks and is Google's UI toolkit for
                    creating striking, cross-platform applications with native
                    compilation for mobile right from a singular codebase. It is
                    the free and best open-source cross-platform app development
                    framework. Flutter's progressive elements help app
                    developers to quickly analyze, build UIs, add
                    functionalities, and fix errors. This mobile app development
                    framework's gadgets fit in all significant stage contrasts
                    to convey far-reaching native execution on both Android and
                    iOS. Additionally, it has its own realistic graphic engine
                    as Skia.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Flutter App Development Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      More fast turn of events, customizations, and mobile app
                      delivering
                    </li>
                    <li className="mt-2">
                      Simultaneous application updates on iOS and Android.
                    </li>
                    <li className="mt-2">
                      Less complex to maintain and build new functionalities.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Flutter?
                  </h3>
                  <p className="mt-4 mb-4">
                    Flutter app development offers quick development time so if
                    you need to exhibit your app development product to
                    financial backers rapidly, Flutter is great and quite
                    possibly of the best inclination.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    MMobile Applications built with Flutte
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Google Ads</li>
                    <li className="mt-2">Alibaba</li>
                    <li className="mt-2">Blokt</li>
                    <li className="mt-2">Cryptograph</li>
                    <li className="mt-2">Reflectly</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">NativeScript</h1>
                  <p className="mt-4 mb-4">
                    NativeScript is one of the best open-source mobile
                    application development frameworks that work for both
                    operating systems, iOS and Android. NativeScript uses
                    JavaScript as the base. Along with that, this framework also
                    backs up another two frameworks; Angular and Vue JavaScript.
                    Mobile applications developed using this framework are
                    mostly extensive native applications, which utilize similar
                    APIs as though they were built using Android Studio or
                    Xcode.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using NativeScript Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      It Saves development time, costs and efforts from the
                      developers by providing adaptable app development
                      solutions.
                    </li>
                    <li className="mt-2">
                      It helps app developers to provide futuristic app
                      development strategies.
                    </li>
                    <li className="mt-2">
                      Make the duties of staffing groups a lot easier
                    </li>
                    <li className="mt-2">
                      It also empowers the reuse of integrated tools
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use NativeScript Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    NativeScrpit is one of the best frameworks for when app
                    developers have to require building native applications with
                    a solitary code base for all operating systems.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications Built With NativeScript
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Workbox</li>
                    <li className="mt-2">Beachy</li>
                    <li className="mt-2">Navadra</li>
                    <li className="mt-2">Radrat</li>
                    <li className="mt-2">GeekyAnts</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Meteor</h1>
                  <p className="mt-4 mb-4">
                    Another open-source javascript mobile application framework
                    Meteor JS development is made using Node.js. Meteor JS is
                    the best JS framework for the mobile app that empowers
                    speedy prototyping and works with cross-platform code.
                    Meteor is compatible with any front-end JS mobile web
                    framework, including React, Angular Vue, Blaze and Svelte.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Meteor Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Performs amazing even with single language code usage.
                    </li>
                    <li className="mt-2">
                      Gives admittance to real-time as a matter of course.
                    </li>
                    <li className="mt-2">
                      App developers can get rich community support.
                    </li>
                    <li className="mt-2">
                      Transform web applications into mobile phone applications
                      flawlessly
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Meteor Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    Meteor JS is one of the best frameworks when it comes to
                    developing mobile apps with customized features and
                    functionalities.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Application Built With Meteor Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Hagglemate</li>
                    <li className="mt-2">Hagglemate</li>
                    <li className="mt-2">Wishpool</li>
                    <li className="mt-2">Writ</li>
                    <li className="mt-2">Telescope</li>
                    <li className="mt-2">Chaser</li>
                    <li className="mt-2">Reaction Commerce</li>
                    <li className="mt-2">Pintask</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">JQuery</h1>
                  <p className="mt-4 mb-4">
                    JQuery is a quick and fresh JavaScript Library that performs
                    really without demanding a lot of code structure. It is a
                    cross-platform JavaScript library created to facilitate the
                    elaborate client-side prearranging of HTML. Various top
                    organizations like WordPress, Google, IBM, Facebook and many
                    more are using the JQuery framework for their mobile
                    applications.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using JQuery Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      It provides a wide range of community support.
                    </li>
                    <li className="mt-2">
                      It offers effective search engine optimized results.
                    </li>
                    <li className="mt-2">
                      App developers can build the solutions that support every
                      browser and version using the jquery framework.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use JQuery Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    Used in various tasks, including the structure of big
                    business eCommerce applications and empowering presentation
                    pages. Ideal for fast prototyping and liveliness,
                    predominantly in the event that you are not adequate in
                    utilizing CSS.
                  </p>
                  ={" "}
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications Built With JQuery Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Net</li>
                    <li className="mt-2">OpenTable</li>
                    <li className="mt-2">Stanford</li>
                    <li className="mt-2">Ikea Sweden</li>
                    <li className="mt-2">Disney World</li>
                    <li className="mt-2">Dodge</li>
                    <li className="mt-2">Slideshare</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">CocoaTouch</h1>
                  <p className="mt-4 mb-4">
                    When it comes to developing mobile apps that can provide
                    extensive support for iOS, watchOS, iPadOS and tvOS cocoa
                    Touch framework is one of the best frameworks any app
                    developers can use. One of the best things about this
                    framework is that it is created using Objective - C
                    language. It provides extensive hardware and functionalities
                    support for macOS computers and iOS devices.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using CocoaTouch Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Can provide extensive support for any Apple device and
                      product.
                    </li>
                    <li className="mt-2">
                      Demands fewer efforts from the developer's
                      end.Simultaneous application updates on iOS and Android.
                    </li>
                    <li className="mt-2">
                      App developers can provide immersive animation, networking
                      and UI for the app.
                    </li>
                    <li className="mt-2">
                      It provides various ready-to-use user interface features
                      and functionalities.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Cocoatouch Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    If the app development process demands extensive usage of
                    animation and compelling features for the iOS device then it
                    is ideal to use the Cocoatouch framework.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications Built With Cocoatouch Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Telegram Messenger</li>
                    <li className="mt-2">Snapchat</li>
                    <li className="mt-2">ABA English</li>
                    <li className="mt-2">Zscaler</li>
                    <li className="mt-2">Saramin</li>
                    <li className="mt-2">Work Market</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Xamarin</h1>
                  <p className="mt-4 mb-4">
                    Another open-source and most popular app development
                    framework Xamarin expands the .NET development platform with
                    a different scope of libraries. The app developers can reuse
                    their current code and offer fundamental code across
                    different device platforms.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Xamarin Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Provides extensive support, maintenance, community support
                      and stability for the app development process.
                    </li>
                    <li className="mt-2">
                      App developers can build quick and efficient commercial
                      mobile applications that can take less time to be out in
                      the market.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Xamarin Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    If the project development requirements focus more on
                    customized user interfaces rather than code sharing then
                    Xamarin can be the best choice for that.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications Built With Xamarin Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Picturex</li>
                    <li className="mt-2">CA Mobile</li>
                    <li className="mt-2">The World Bank</li>
                    <li className="mt-2">Fareboom</li>
                    <li className="mt-2">Alaska Airlines</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Swiftic</h1>
                  <p className="mt-4 mb-4">
                    Swiftic Framework is one of the most mind-blowing no-code
                    mobile application development frameworks applied and
                    utilized solely for the iOS operating system. It is
                    straightforward in utilization and accompanies a natural
                    connection point that empowers developing, managing,
                    distributing, and marketing applications right from the
                    control panel. Swiftic is one of the best choices for a
                    speedy development process, and the framework supports 3rd
                    party integration along with modern-day analysis.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Swiftic Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Suitable for small business mobile applications.
                    </li>
                    <li className="mt-2">
                      provide end-to-end support to the small business
                      applications to get a steady posting with big-sized
                      business applications.
                    </li>
                    <li className="mt-2">
                      Connect organizations with the online marketplaces they
                      are focusing on to reach out to the target audience.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Swiftic Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    If the app development project demands development of custom
                    mobile applications ingeniously for unequivocal business
                    requests like on-demand app development for medicine
                    delivery.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Application Built Using Swiftic Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Mount Royal Bagel</li>
                    <li className="mt-2">Lakeside Fitness Center</li>
                    <li className="mt-2">Spa Cafe</li>
                    <li className="mt-2">Clubhouse</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Ionic</h1>
                  <p className="mt-4 mb-4">
                    Ionic is one of the top mobile application development
                    frameworks that offer an upgraded way to deal with creating
                    current applications at scale. It helps with developing
                    secure and powerful mobile applications in lesser time for
                    any type of operating system or platform. It empowers really
                    local and striking cross-platform mobile applications. The
                    compelling tools and processes incorporated into the Ionic
                    framework simplify it to give a pleasant mobile app usage
                    experience across Android, iOS, and Web applications with a
                    solitary codebase.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Business Benefits of the Ionic Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Offers a pocket-friendly and quick app development
                      process.
                    </li>
                    <li className="mt-2">
                      Gives a dynamic scope of helpful modules and integration
                      features.
                    </li>
                    <li className="mt-2">
                      Keep information of business and end-users secure from any
                      kind of data theft.
                    </li>
                    <li className="mt-2">
                      Provides committed help when you require a development
                      structure for android the most.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Ionic Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    If the app development project does not demand heavy
                    features and functionalities then Ionic can be the best
                    choice.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications Built Using the Ionic Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">MarketWatch</li>
                    <li className="mt-2">justWatch</li>
                    <li className="mt-2">Pacifica</li>
                    <li className="mt-2">McDonald's Turkiyeh</li>
                    <li className="mt-2">Sworkit</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Sencha Ext JS</h1>
                  <p className="mt-4 mb-4">
                    The Javascript framework, Sencha Ext JS, provides end-to-end
                    support for cross-platform development and data-intensive
                    applications that can work flawlessly with any kind of
                    device. The framework provides extensive support for
                    striking mobile applications development providing 140 plus
                    top-notch, high-performing, pre-integrated and pre-tested UI
                    components.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Sencha Ext JS Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Enhance the mobile app performance by providing
                      ready-to-use tools and widgets.
                    </li>
                    <li className="mt-2">
                      Best framework to work with for cross-platform
                      development.
                    </li>
                    <li className="mt-2">
                      Adaptable to develop mobile apps for any modern-day
                      device.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use Sencha Ext JS Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    PhoneGap UI framework is the ultimate mobile app development
                    framework, which depends on the identical open-source Apache
                    Cordova project. The mobile app development framework
                    empowers top app developers to easily develop mobile
                    applications solidly in the cloud. It uses various
                    programming technologies like CSS3, HTML5, and JavaScript.
                    Top App developers can easily develop application
                    store-ready applications without the difficulty of
                    supporting local SDKs using the Cordova UI development
                    framework.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications built using Sencha Ext JS Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Ticketmaster app</li>
                    <li className="mt-2">MilkPay</li>
                    <li className="mt-2">Governance.io app</li>
                    <li className="mt-2">EVA</li>
                    <li className="mt-2">Kaseware app</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">
                    Apache Cordova (PhoneGap)S
                  </h1>
                  <p className="mt-4 mb-4">
                    The Javascript framework, Sencha Ext JS, provides end-to-end
                    support for cross-platform development and data-intensive
                    applications that can work flawlessly with any kind of
                    device. The framework provides extensive support for
                    striking mobile applications development providing 140 plus
                    top-notch, high-performing, pre-integrated and pre-tested UI
                    components.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using PhoneGap Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Provides support for hybrid mobile application development
                      using current web development techniques.
                    </li>
                    <li className="mt-2">
                      Allows app developers to use a single code base for
                      different platforms and devices.
                    </li>
                    <li className="mt-2">
                      App developers can test and manage the mobile applications
                      using various tools developed by the PhoneGap community.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When to Use PhoneGap Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    Phone Gap can be the best choice if the app development
                    project requires the development of top-notch, feature-rich
                    enterprise-level mobile applications.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications built with PhoneGap Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Wikipedia</li>
                    <li className="mt-2">Paylution</li>
                    <li className="mt-2">HealthTap</li>
                    <li className="mt-2">The DHS Program</li>
                    <li className="mt-2">TripCase</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Onsen UI</h1>
                  <p className="mt-4 mb-4">
                    Another open-source mobile application development framework
                    that is authorized under Apache, Onsen UI is a mobile app
                    development framework that empowers the development of HTML5
                    hybrid and mobile web applications with no setup time
                    requirement. The mobile application development works with a
                    predominant variety of UI components and parts especially
                    intended for mobile applications. Using this platform can
                    help the app developers to support both iOS and Android
                    operating systems with a similar source code. The
                    applications created through Onsen UI are consistent even on
                    lower-end devices.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Onsen UI Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      The mobile app developer can develop native and hybrid
                      mobile apps using this framework.
                    </li>
                    <li className="mt-2">
                      The best hybrid application framework and profoundly
                      viable with different frameworks and technologies.
                    </li>
                    <li className="mt-2">
                      Offers fast prototyping of various features and
                      functionalities.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Onsen UI Framework
                  </h3>
                  <p className="mt-4 mb-4">
                    App developers should use the Onsen UI Framework when the
                    app development project demands cross-platform development.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications built Using Onsen UI Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Opal</li>
                    <li className="mt-2">MilkPayPopVox</li>
                    <li className="mt-2">Offcourse Golf</li>
                    <li className="mt-2">Ski Patrol</li>
                    <li className="mt-2">Ohalog</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Corona SDK</h1>
                  <p className="mt-4 mb-4">
                    Corona SDK is a cross-platform mobile application
                    development framework used for rapidly building applications
                    for all types of mobile phones. App developers around the
                    globe can contribute to the main product through
                    investigating and adding functionalities that they require.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Corona SDK Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Offers enhanced app performance and stability through auto
                      compilation at the app-building time.
                    </li>
                    <li className="mt-2">
                      Provides a wide range of support materials and resources
                      along with extensive community support.
                    </li>
                    <li className="mt-2">
                      Wide range of plugins, sound effects, music and graphical
                      assets.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Corona SDK Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    If the app development project demands a faster app
                    development process then the Corona SDK framework can be the
                    best choice for you. App developers can choose Corona SDK
                    for game development as well.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Mobile Applications built Using Corona SDK Framework
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Fun Run 2</li>
                    <li className="mt-2">Designer City</li>
                    <li className="mt-2">Mandora</li>
                    <li className="mt-2">Zip Zap</li>
                    <li className="mt-2">PKTBALL</li>
                  </ul>
                  <h1 className="font-bold text-2xl mt-3">Mobile Angular UI</h1>
                  <p className="mt-4 mb-4">
                    Mobile Angular UI Framework is a famous and precise
                    open-source web app framework that helps app developers to
                    build enterprise-size mobile applications. One of the best
                    things about this mobile app development framework is that
                    it uses Twitter Bootstrap and AngularJS which help with
                    building pleasant-looking HTML5 Hybrid mobile applications.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Benefits of Using Mobile Angular UI Framework
                  </h2>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">
                      Provides support to make appealing UIs that provide a
                      mobile-friendly user experience..
                    </li>
                    <li className="mt-2">
                      Have overlays and switches that are more straightforward
                      to communicate and engage with mobile devices.
                    </li>
                    <li className="mt-2">
                      This mobile HTML structure is direct to understand and can
                      be empowered in existing angular application projects.
                    </li>
                  </ul>
                  <h3 className="text-gray-700 font-bold mt-5">
                    When To Use Mobile Angular UI Framework?
                  </h3>
                  <p className="mt-4 mb-4">
                    You can use the Angular UI framework if you want to provide
                    eye-catching and pleasant features and functionalities for
                    your mobile applications.
                  </p>
                  <h3 className="text-gray-700 font-bold mt-5">
                    Apps built with Mobile Angular UI Frameworkk
                  </h3>
                  <ul className="list-disc ml-10">
                    <li className="mt-2">Guezz It</li>
                    <li className="mt-2">Gunks</li>
                    <li className="mt-2">iKeyBox</li>
                    <li className="mt-2">Hotelier News</li>
                    <li className="mt-2">Zaobao Mobile Website</li>
                  </ul>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Reasons Why Mobile Apps Fails
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    CIf you are wondering if investing in the mobile application
                    will take you to the top of the Google play store or Apple
                    app store then you are in denial. You should understand the
                    fact that numerous mobile applications not only fail to rank
                    well on the app stores but also lose the entire customer
                    base of the businesses. We are not stating this to boost
                    your second thought but to warn you not to make silly
                    mistakes that can be the reason for your mobile app idea
                    failure. There are certain things that you should not do
                    with your mobile application such as:
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Inappropriate App Idea
                  </h2>
                  <p className="mt-4 mb-4">
                    Most of the mobile applications, as we see them today, are
                    reproductions of a couple of famous ones. The users already
                    have an existing mobile app that offers the exact same
                    services and fulfills the exact same user requirements.
                    Users are searching for advancement and the inability to
                    think of something imaginative causes disillusionment and
                    loss of trust. You need to offer a new idea that will
                    attract more users and tackle their issues. If you have a
                    creative thought that is one of a kind, you are prepared to
                    be viable.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Unclear Familiarity With Target Audience
                  </h2>
                  <p className="mt-4 mb-4">
                    Even if it sounds like a small step, not having a clear
                    understanding of the target audience can be the down point
                    of your mobile application. You can miss out on your actual
                    user base if you have a vague understanding of the target
                    audience. There are various things you have to keep in mind
                    while figuring out your target audiences such as age,
                    locality, characteristics of the audience and various
                    others. You ought to contemplate making an application that
                    offers easy-to-use mobile app features for each age group.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Fail to Consider Different Mobile App Platform
                  </h2>
                  <p className="mt-4 mb-4">
                    If you think there are just two platforms that exist; iOS
                    and android then your mobile app idea will surely fail. Even
                    though you think you are fine with targeting one of these
                    platforms, you should seriously consider the alternate
                    platform and should have strong reasons to ignore one of
                    these platforms. The count of global android users is high
                    but the popularity of the iOS operating system is insane.
                    Along with all these, various app users out there prefer to
                    have a web application for their windows or mac system.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Mobile App Features
                  </h2>
                  <p className="mt-4 mb-4">
                    Mobile app features are one of the ways to win over the
                    hearts of app users. But it can be a turnaround if you fail
                    to offer a significant number of features. Your mobile app
                    should offer all and only necessary features; offering too
                    many or even fewer features can bore the app users and will
                    increase the abandonment rate of the mobile application.
                    While assuming you have been too specific about adding
                    features in your application, it could likewise make an
                    unfriendly difference, that of making your application
                    deficient. The number of mobile app features ought to be
                    chosen after appropriately examining the ease of use of your
                    application alongside the devices in which it will be used.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Ignorance of User Experience
                  </h2>
                  <p className="mt-4 mb-4">
                    During the time spent glorifying the user experience, mobile
                    app developers frequently make it a complex issue for app
                    users. Truly we live in a fast world, where no one has the
                    time and patience to pause for a moment or two and figure
                    out how to use your application, particularly when the world
                    is full of other easy-to-use options accessible around them.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Fail To Keep The Essence of App Idea
                  </h2>
                  <p className="mt-4 mb-4">
                    Will you choose a mobile application that allows the users
                    to communicate through texts only; no emojis, no media
                    sharing nothing else? No, right? That's what you can call
                    the essence of the mobile app. Even though you are focusing
                    on the functionalities of the mobile application, there has
                    to be some features and functionalities that you should have
                    in your mobile application. They help to enhance the
                    interaction of the users with your mobile application. If
                    you have an application that gives no method of
                    communication or feedback to the client, they will
                    unquestionably be less keen on using it.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Ignoring The Users’ Feedback
                  </h2>
                  <p className="mt-4 mb-4">
                    Your mobile application exists because of your users and
                    there is no other explanation for that. Neglecting to
                    perceive their thought process about your application can
                    convert into app failure. As your application is out there
                    in the market for public use, you constantly attempt to
                    offer it to your clients without understanding that you
                    likewise need to focus on the issues that they are
                    confronting. Fixing these issues for them is crucial for
                    keeping the users integrated into your mobile application.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Mobile App Development Cost
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Even though you have a thorough understanding of the entire
                    mobile app development process, you might not get an
                    accurate understanding of the app development cost. As the
                    mobile app development cost estimation differs based on the
                    features and functionalities of the mobile app, resources
                    used throughout the app development process and various
                    others. We can still get a bit of an idea about the
                    estimated development cost. Let's browse through it.
                  </p>
                  <img src="\images\service-img\mobileapp-20.jpg" alt="" />

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Basic Mobile App
                  </h2>
                  <p className="mt-4 mb-4">
                    Standard mobile applications like clocks, calculators and
                    small games are the least expensive applications to develop.
                    These mobile applications do not demand many features and
                    functionalities or backend development and require about a
                    month to finish. Clearly, these sorts of applications are
                    not exceptionally famous these days.
                  </p>
                  <span className="font-bold">
                    Standard mobile app development cost: $10,000 - $15,000
                  </span>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Data-driven Mobile App
                  </h2>
                  <p className="mt-4 mb-4">
                    Data-driven mobile applications are the ones that get a
                    great deal of data, examine it, and proffer it to mobile app
                    users. Mobile applications like weather apps, calendar, maps
                    and various other things fall under this category. These
                    sorts of mobile applications have been losing their worth
                    over the most recent couple of years and for the most of
                    them come in-built with mobile phones. What amount does it
                    cost to create a data-driven mobile application?
                  </p>

                  <span className="font-bold">
                    Data-driven mobile app development cost: $15,000 - $20,000
                  </span>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Authentication Mobile App
                  </h2>
                  <p className="mt-4 mb-4">
                    A mobile application like loyalty programs that demands user
                    verification process and usage of customized data falls
                    under this category. These mobile applications demand users
                    to sign in to access the features and functionalities of the
                    mobile applications. Such mobile applications use user data
                    to deliver accurate information. This is a more modern and
                    hence costly project that will require user management.
                  </p>
                  <span className="font-bold">
                    Authentication mobile app development cost: $40,000 -
                    $80,000
                  </span>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Social Networking Mobile app
                  </h2>
                  <p className="mt-4 mb-4">
                    The most popular mobile applications like Facebook,
                    Instagram, LinkedIn and so on fall under the social
                    networking mobile applications. They need to deal with a
                    large number of third-party tools and plugins and allow
                    users to share data flawlessly. All of this requires strong
                    backend support and a large amount of investment. What
                    amount does it cost to make a social networking mobile
                    application?
                  </p>
                  <span className="font-bold">
                    Social network Mobile app development cost: $40,000 -
                    $60,000
                  </span>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    {" "}
                    On-demand Service app
                  </h2>
                  <p className="mt-4 mb-4">
                    Online food delivery, cab booking, medicine delivery and
                    various other mobile applications that provide a platform to
                    connect service providers with end-users fall under this
                    category. Just like an e-commerce mobile application, the
                    development cost of an on-demand mobile app depends on the
                    different features and functionalities of the mobile app.
                  </p>
                  <span className="font-bold">
                    On-demand mobile app development cost: $30,000 - $70,000
                  </span>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Marketplace Mobile app
                  </h2>
                  <p className="mt-4 mb-4">
                    Mobile applications like Airbnb are known as marketplace
                    mobile applications they include various features and
                    functionalities of on-demand mobile apps and e-commerce
                    stores. Online marketplace development is much more crucial
                    compared to e-commerce stores.
                  </p>
                  <span className="font-bold">
                    Marketplace Mobile app development cost: $15,000 - $50,000
                  </span>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Mobile Gaming Application
                  </h2>
                  <p className="mt-4 mb-4">
                    The mobile gaming applications can be as small as Snake and
                    Ladder, Ludo, Rummy, or Poker to the latest technology-based
                    gaming solution. The cost of a mobile gaming application
                    varies based on the features and functionalities of the
                    solution.
                  </p>
                  <span className="font-bold">
                    Mobile Game app development cost: $50,000 - $200,000
                  </span>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    IoT Mobile Application
                  </h2>
                  <p className="mt-4 mb-4">
                    The mobile app connected to the IoT devices provides users
                    to control and manage their devices in a remote environment.
                    The cloud environment, accessibilities of different mobile
                    functionalities and remote management surely affect the app
                    development cost.
                  </p>
                  <span className="font-bold">
                    IoT Mobile app development cost: $50,000 - $300,000
                  </span>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    NFT Marketplace App Development
                  </h2>
                  <p className="mt-4 mb-4">
                    Authorizing and trading the digital artefacts such as domain
                    name, art, tweets, audiotrack, mems or photography as NFT
                    tokens demand top most authentication, features and
                    functionalities that can cost a bit more than the usual
                    mobile app development.
                  </p>
                  <span className="font-bold">
                    NFT Mobile app development cost: $60,000 - $300,000
                  </span>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Metaverse Development
                  </h2>
                  <p className="mt-4 mb-4">
                    Steeping a step forward in the world of AR and VR, people
                    are living in the world of Metaverse. Gaming, real estate,
                    entertainment and various other industries can enhance their
                    services through Metaverse-based mobile applications.
                  </p>
                  <span className="font-bold">
                    Metaverse Mobile app development cost: $60,000 - $300,000
                  </span>
                  <span className="font-bold">
                    Also Read: How Much Does It Cost To Build A Mobile App?
                  </span>
                </div>
              </details>

              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Mobile App Monetization Methods
                </motion.summary>
                <div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="px-4 pb-4"
                >
                  <p className="mt-4 mb-4">
                    Of course, you are not out there for charity. If you have
                    invested this much in your mobile application, you should
                    earn a bit from it. But keep in mind first, earning from the
                    mobile application should not be your only motive of yours
                    and second, no mobile application will not help you earn
                    billions starting from day one. If you use the proper
                    monetization method in your mobile application, you will be
                    able to turn your mobile application into your primary
                    source of income. Let's Explore the monetization methods you
                    can integrate into your mobile applications.
                  </p>
                  <img src="\images\service-img\mobileapp-21.jpg" alt="" />
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    In-app Purchases
                  </h2>
                  <p className="mt-4 mb-4">
                    Offering your users chances to make an in-app purchase is an
                    extraordinary method for monetizing your mobile application.
                    If your mobile application is free to download just like the
                    other 95% of mobile applications that exist on the Google
                    Play Store or Apple App Store, in-app ads offer an
                    unpretentious monetization strategy that can upgrade the
                    user experience. Most gaming applications employ this mode
                    of monetization in their mobile application.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Freemium Model
                  </h2>
                  <p className="mt-4 mb-4">
                    While setting up a freemium model for your mobile
                    application, you are not restricted to a win big or bust
                    approach. Contingent upon your application's contribution,
                    it could be more astute to set up numerous freemium models
                    with various degrees of significant worth. For instance, you
                    might need to offer free service, an essential subscription,
                    and premium assistance for various sorts of users.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Advertising
                  </h2>
                  <p className="mt-4 mb-4">
                    There are three sorts of in-app advertising models that
                    exist; Cost per Thousand Impressions (CPM), Cost per Click
                    (CPC) and Cost per Action (CPA). To keep away from normal
                    traps you additionally need to pose basic inquiries prior to
                    running in-app advertising. For instance, advertisements
                    that do not line up with your business can harm your
                    standing. Slow, wasteful advertisements can destroy the user
                    experience, disappoint your users and neglect to convey
                    pleasant conversion rates for the advertisers. Nonetheless,
                    78% of purchasers will cheerfully acknowledge mobile
                    advertisements that are applicable to their inclinations, so
                    these traps are avoidable by offering the right formats and
                    working with relevant advertisers.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Collaboration
                  </h2>
                  <p className="mt-4 mb-4">
                    Many individuals out there know this as influencer marketing
                    as well; collaboration with sponsors and associations can be
                    a viable method for the monetization of your mobile
                    application. On the off chance that you have an enormous
                    user base or have made a crowd of people in a specific
                    niche, brands might be keen on utilizing your mobile
                    application to associate with their target audience.
                  </p>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Paid Mobile Applications
                  </h2>
                  <p className="mt-4 mb-4">
                    The first and foremost monetization method that might prove
                    its worth for your mobile application is paid mobile apps.
                    But keep in mind this monetization method can not be the one
                    for various mobile app ideas. Specifically, if there is
                    already a mobile app exists that offers the exact same
                    features and functionalities for free. The paid mobile
                    application should offer extraordinary features and
                    functionalities to the users that prove the worth of
                    spending a few bucks on your mobile application. As an
                    example, we can consider PhotoPills and SunSurveyor as an
                    example. They are one of the most beneficial mobile
                    applications for the photographers that present exclusive
                    details such as sunrise, sunset time, moon phases, star
                    positions and so on to the photographers that can help them
                    take the accurate photographs.
                  </p>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Trends To Consider For Mobile App Development
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    The mobile apps have been enhancing user experience by
                    integrating various trending technologies. Even you can
                    enhance the user experience by adopting these
                    below-mentioned trends. These trends are not just will be
                    some passing by trends but the future necessity of mobile
                    apps. You can stay ahead of the competition by integrating
                    these trends into your mobile applications.
                  </p>
                  <img src="\images\service-img\mobileapp-22.jpg" alt="" />
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Blockchain
                  </h2>
                  <p className="mt-4 mb-4">
                    Blockchain has made some amazing progress since the
                    innovation of cryptocurrency. This innovation is currently
                    shaping various industries differently including securing
                    clinical data to supply chain management and logistic
                    management. It likewise plays an important role in mobile
                    applications which makes it an exceptionally impressive
                    mobile app development trend. Decentralized applications
                    (dapps) are innovation based on blockchain development that
                    allows users more command over their data by dispensing with
                    the requirement for centralized intermediaries to oversee
                    it.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Apps for Foldable Devices
                  </h2>
                  <p className="mt-4 mb-4">
                    Getting back in the game from the 00s, foldable mobile
                    devices is for sure not appear to be just a little piece of
                    the overall industry in regards to cell phones, just like
                    the last time. As per the report of Statista, worldwide
                    foldable mobile shipments are supposed to arrive at 50.1
                    million units by the end of 2022. There are feasible
                    premises for that: the improvement of convenience and
                    development of the UI, as well as the chance of involving
                    the devices as a telephone and as a little tablet
                    simultaneously. Users might cherish the way they can fold
                    the display screen as they please. This is a genuinely
                    impressive reason to remain technological savvy specifically
                    for the mobile application.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    The Introduction of 5G
                  </h2>
                  <p className="mt-4 mb-4">
                    5g connections are projected to develop to more than 40% of
                    all connections in Europe and 15% of all mobile connections
                    in the world by 2025. It would be normal if we see 47.5% of
                    all the mobile connections utilize 5G by the end of next
                    year. No big surprise then, at that point, that keeping up
                    with 5g standards is going to change the world of app
                    development, as people around th globe will expect the
                    mobile applications to work at the lighting speed.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    AR/VR Integration
                  </h2>
                  <p className="mt-4 mb-4">
                    The worldwide market for AR and VR is no more a trend but a
                    necessity of mobile application development that
                    unquestionably improves the user experience. Various
                    industries like retail, e-commerce, marketplaces, game,
                    entertainment and many more can make their mobile
                    application more feature-rich through AR/VR integration.
                    Mobile app developers can make the mobile app development
                    and design more mainstream employing this revolutionary
                    trend that can provide more enhanced user interaction and
                    user experience.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    AI/ML
                  </h2>
                  <p className="mt-4 mb-4">
                    Many organizations across various industries are currently
                    using Artificial Intelligence in the development of
                    AI-enabled mobile application features such as voice
                    translation, face detection, data automation and many more
                    to provide more customized user experience, transmissions,
                    substantially and more. When it comes to machine learning,
                    it is demonstrated power in helping the mobile application
                    development scene. For these reasons, you will see more
                    organizations exploit Artificial Intelligence and Machine
                    Learning in creating innovative applications that understand
                    user behaviour monitor the day-to-day activities of clients
                    and provide better outcomes without flowing proper
                    guidelines.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Super Apps
                  </h2>
                  <p className="mt-4 mb-4">
                    Super applications fill in as a biological system, in which
                    different exercises like work, shopping, payment, and social
                    networking might happen at the same time. The mobile
                    application works more like a platform on which users can
                    communicate with others as well as browse through their
                    profiles and check their feeds as well. The first thought of
                    the supper app was invited by WeChat. WeChat allows the
                    users to communicate with each other, make the payments and
                    socialise with each other and many more all under one
                    platform. Various other mobile applications such as
                    Facebook, Whatsapp and many more are taking slow and steady
                    steps away from the one app - one purpose approach. As we
                    can see Supper app is definitely the future of mobile app
                    development.
                  </p>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    On-Demand Apps
                  </h2>
                  <p className="mt-4 mb-4">
                    On-demand mobile application is one of the trends that we
                    utilize in daily life. The food delivery mobile apps,
                    medicine delivery mobile apps, grocery delivery apps, cab
                    booking mobile apps and various others are part of on-demand
                    mobile apps. Even though we are utilizing on-demand mobile
                    apps, the world of on-demand is going to grow more,
                    generating $335 billion by the year 2025. On-demand mobile
                    apps are going to shape all the other industries like
                    logistics, beauty, transportation, e-commerce and many more
                    with more enhanced features and functionalities to deliver a
                    better user experience.
                  </p>

                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Types of On-Demand Mobile Application
                  </h2>
                  <ol className="list-decimal">
                    <li className="mt-2 ml-10">
                      Food Delivery App Development
                    </li>
                    <li className="mt-2 ml-10">
                      Grocery Delivery App Development
                    </li>
                    <li className="mt-2 ml-10">Taxi Booking App Development</li>
                    <li className="mt-2 ml-10">Clone App Development</li>
                    <li className="mt-2 ml-10">eLearning App Development</li>
                    <li className="mt-2 ml-10">Dating App Development</li>
                    <li className="mt-2 ml-10">
                      Fleet And Logistics App Development
                    </li>
                    <li className="mt-2 ml-10">Video Streaming App</li>
                    <li className="mt-2 ml-10">
                      Medicine Delivery App Development
                    </li>
                    <li className="mt-2 ml-10">Fitness App Development</li>
                    <li className="mt-2 ml-10">Healthcare App Development</li>
                    <li className="mt-2 ml-10">
                      Appointment Booking App Development
                    </li>
                  </ol>
                </div>
              </details>
              <details>
                <motion.summary
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="py-2 outline-none cursor-pointer focus:underline font-bold text-xl"
                >
                  Who Should Be Part Of The Mobile App Development Team?
                </motion.summary>
                <div className="px-4 pb-4">
                  <p className="mt-4 mb-4">
                    Mobile app development companies always have a team of
                    experts who help their customers to bring an app idea to
                    life. Different app development companies contains different
                    personals and skilled persons to their team but most of them
                    have all the below listed people under their app development
                    team.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Product Owner
                  </h2>
                  <p className="mt-4 mb-4">
                    Every mobile app idea has a product owner. The product owner
                    can be the person who has come up with the idea, in many
                    cases it is an individual but sometimes it can be a team of
                    individuals who have come up with the idea and have helped
                    with the brainstorming process. The product owner is
                    responsible to deliver accurate information about the
                    features, functionalities and the working of the entire
                    mobile application to the app development team.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Business Analyst
                  </h2>
                  <p className="mt-4 mb-4">
                    A Business Analyst or BA is somebody who will investigate
                    the business prerequisites and assist with defining the
                    right objectives so the way to deal with development is
                    ideal for your exceptional app idea. In particular, a BA
                    will direct exposure to comprehend your app idea, spread out
                    the practical and non-useful prerequisites, get the
                    estimated project development cost, and help with
                    prototyping an intuitive interface.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Project Manager
                  </h2>
                  <p className="mt-4 mb-4">
                    A Project Manager or a PM is liable for dealing with the
                    whole mobile application development project and
                    guaranteeing it has every one of the finalized features and
                    functionalities, finished on time inside the settled upon
                    financial plan and quality. The Project manager is
                    responsible to keep the app development process smooth and
                    accurate.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    UI/UX Designer
                  </h2>
                  <p className="mt-4 mb-4">
                    A UI/UX Designer is another important part of the mobile app
                    development process. This individual is the one that will
                    make your end product instinctive, easy to use, and
                    alluring. They will design each and every function of your
                    mobile application and at the same time ensure that all that
                    inside the application is enhanced to deliver the best user
                    experience for higher user engagement.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    Mobile App Developer
                  </h2>
                  <p className="mt-4 mb-4">
                    Next up is the mobile app developer. Developers are
                    individuals who transform all the UI/UX formats into a
                    working mobile application. Consequently, they ought to be
                    knowledgeable about working with your chosen frameworks, the
                    languages, and even cross-platform 3rd party tools. The
                    mobile app developer can be a team of developers depending
                    upon your project requirements. You can hire app developers
                    team consisting of various developers such as iPhone app
                    developers, Android app developers, front-end developers,
                    back-end developers and so on based on your project
                    requirements.
                  </p>
                  <h2 className="text-gray-700 font-bold pt-5 text-2xl">
                    QA Engineer
                  </h2>
                  <p className="mt-4 mb-4">
                    Finally, a Quality Assurance Engineer or a QA Specialist,or
                    just Tester, is the one who ensures the working of your
                    mobile application. This is an expert who, as the name
                    proposes, is liable for the quality of your mobile
                    application. Consequently, a QA Engineer guarantees that
                    your application works well without any bugs, configures
                    with different devices and platforms, and by and large meets
                    every one of the necessities.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
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
                          Rytsense Technologies Provided excellent support in
                          the areas of website engineering and site
                          optimization.
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
        
      </div>
      <Technology/>
      <Footer />
    </div>
  );
}
