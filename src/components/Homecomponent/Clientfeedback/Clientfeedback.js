import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients";
import profile from "../Clientfeedback/image-removebg-preview.png";

class Clientfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      appendDots: (dots) => (
        <div
          style={{
            padding: "0px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "10px",
            height: "10px",
            margin: "0 5px",
            background:
              i === this.state.currentSlide
                ? "blue"
                : "rgba(128, 128, 128, 0.5)",
            borderRadius: "50%",
          }}
        ></div>
      ),
      afterChange: (currentSlide) => {
        this.setState({ currentSlide });
      },
      responsive: [
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    const details = [
      {
        message:
          '"Thoughtfully integrating consumer feedback to improve the UX/UI, Rytsense Technology has developed a series of consistently improved mobile app iterations. Their competitive pricing structure pairs value with cost savings. The project manager was exceptionally skilled and communicative."',
        profile: "/images/homepageimages/ebuljufoolpf3cnvdt1c.webp",
        name: "Sujai Soy",
        companyname: "Skkyn Technologies - Owner",
        counrty: "Dubai, UAE",
        flagimage: "/images/homepageimages/download (2).png",
      },
      {
        message:
          '"Rytsense Technology was diligent and responsive in solving any issues that came up throughout the development process and still provides excellent support when they are needed. The client feels that Rytsense has really gone above and beyond with their service."',
        profile: "/images/homepageimages/requirement-jincky1.png",
        name: "Omar Boyd",
        companyname: "CoFounder, Oanz Holdings",
        counrty: "Canada",
        flagimage: "/images/homepageimages/download (3).png",
      },
      {
        message:
          '"The founder of Rytsense Technology and the rest of his project team have placed customer service through responsiveness and proper communication above all else, leading to a strong initial product and the opportunity to continue the partnership through multiple iterations and enhancements."',
        profile: "/images/homepageimages/overview.png",
        name: "Brendan Buchholz",
        companyname: "Founder, Cool Charm Friends",
        counrty: "Brisbane, Australia",
        flagimage: "/images/homepageimages/australia flag.png",
      },
      {
        message:
          '"Users have reviewed the app positively. Rytsense Technology was responsive and provided excellent support. Their follow-up is particularly noteworthy."',
        profile: "/images/homepageimages/021-food.png",
        name: "Owner",
        companyname: "Food Ordering App",
        counrty: "United Arab Emirates",
        flagimage: "/images/homepageimages/download (2).png",
      },
    ];
    return (
      <div className="bg-slate-50">
        <div className="max-w-7xl py-5 mx-auto">
          <motion.div
            variants={fadeIn("top", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="px-5 flex flex-col gap-3"
          >
            <div className="relative">
              <h1 className="mt-7 text-3xl font-bold sm:text-5xl sm:mt-10">
                What Our Clients Say
              </h1>
              <h1
                className="text-5xl font-bold top-0 sm:text-7xl"
                style={{
                  WebkitTextStroke: "2px",
                  WebkitTextStrokeColor: "#F0F0F0",
                  color: "white",
                  position: "absolute",
                  zIndex: "-1",
                }}
              >
                Clients
              </h1>
            </div>
            <p className="mt-3">
              Here,We make almost every genre of application.You name it and we
              build it.
            </p>
          </motion.div>
          <div className="my-10">
            <Slider {...settings}>
              {details.map((detail, index) => (
                <div className="p-5 flex justify-center">
                  <div
                    className="p-5 pl-12 flex flex-col gap-28 bg-white justify-between"
                    key={index}
                    style={{ minHeight: "450px" }}
                  >
                    <p className="text-lg" key={index}>
                      {detail.message}
                    </p>
                    <div className="flex gap-5">
                      <div>
                        <img
                          className="w-32 rounded-xl"
                          src={detail.profile}
                          alt="profile"
                        ></img>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h3 className="text-base font-semibold">
                          {detail.name}
                        </h3>
                        <p>{detail.companyname}</p>
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-5 h-3 rounded-sm"
                            src={detail.flagimage}
                          ></img>
                          <p className="font-semibold">{detail.counrty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Clientfeedback;
