import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParticleBg from "../particle/Particlebg";
import Cpp from "../../../calendly";

class HomeBanner extends Component {
  getColorClass(index) {
    const colorClasses = [
      "text-pink1",
      "text-cyan-400",
      "text-yellow-500",
      "text-black",
      "text-violet-900",
    ];

    return colorClasses[index % colorClasses.length] || colorClasses[0];
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    const details = [
      {
        heading: "Web",
        subheading: "Development Company",
        number: "#1",
        ranktext: "Ranked as",
        spantext: "#1 Top Web Development",
        companytext: "company in USA and India",
      },
      {
        heading: "Mobile App",
        subheading: "Development Company",
        number: "#1",
        ranktext: "Ranked as",
        spantext: "#1 Top Mobile Development",
        companytext: "company in USA and India",
      },
      {
        heading: "Blockchain",
        subheading: "Development Company",
        number: "#1",
        ranktext: "Ranked as",
        spantext: "#1 Top Blockchain Development",
        companytext: "company in USA and India",
      },
      {
        heading: "Artificial",
        heading2: " Intelligence (AI)",
        subheading: "Development Company",
        number: "#1",
        ranktext: "Ranked as",
        spantext: "#1 Top AI Development",
        companytext: "company in USA and India",
      },
      {
        heading: "MetaVerse",
        subheading: "Development Company",
        number: "#1",
        ranktext: "Ranked as",
        spantext: "#1 Top Metaverse",
        companytext: "company in USA and India",
      },
    ];

    return (
      <div className="relative">
        <ParticleBg />
        <div>
          <Slider {...settings}>
            {details.map((detail, index) => (
              <div className="pl-5 flex">
                <div
                  className="pl-5 pt-5 justify-self-end flex flex-col gap-2 md:flex-row"
                  key={index}
                >
                  <div className="grow flex flex-col gap-1.5 justify-center ss:gap-3">
                    <h1
                      className={`text-4xl font-bold ${this.getColorClass(
                        index
                      )} ss:text-6xl`}
                    >
                      {detail.heading}
                    </h1>
                    <h1
                      className={`text-4xl font-bold ${this.getColorClass(
                        index
                      )} ss:text-6xl`}
                    >
                      {detail.heading2}
                    </h1>
                    <h3 className="text-3xl font-medium ss:text-4xl">
                      {detail.subheading}
                    </h3>
                    <div className="my-5 flex">
                      <h1
                        className="text-2xl font-bold pr-4 border-r-2 border-slate-300 ss:text-4xl"
                        style={{ color: "#B02C2C" }}
                      >
                        {detail.number}
                      </h1>
                      <div className="flex flex-col ml-4 text-base text-slate-600 ss:text-xl">
                        <p>
                          {detail.ranktext}{" "}
                          <span className="font-medium text-black">
                            {detail.spantext}
                          </span>
                        </p>
                        <p>{detail.companytext} </p>
                      </div>
                    </div>
                    <button className="p-4 bg-blue1 rounded-md capitalize text-white self-start flex gap-1 items-center">
                      <Cpp buttonText="Book A Call" />{" "}
                      <i class="fa-solid fa-arrow-right ml-2.5"></i>
                    </button>
                  </div>
                  <div className="grow flex">
                    <div className="w-full">
                      <svg
                        width="100%"
                        height="auto"
                        viewBox="0 0 629 590"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_95_15710)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M361.186 575.493C504.161 564.967 617.024 440.322 617.024 288.106C617.024 128.99 493.695 0 341.562 0C189.428 0 66.0996 128.99 66.0996 288.106C66.0996 305.473 67.5687 322.48 70.384 339H68.9994V576.094H333.587C336.236 576.173 338.895 576.213 341.562 576.213C344.229 576.213 346.887 576.173 349.536 576.094H361.186V575.493Z"
                            fill="url(#paint0_linear_95_15710)"
                            fill-opacity="0.78"
                            shape-rendering="crispEdges"
                          />
                        </g>
                        <g filter="url(#filter1_d_95_15710)">
                          <path
                            d="M10 121.33C10 110.284 18.9543 101.33 30 101.33H421.933C432.979 101.33 441.933 110.284 441.933 121.33V424.998H10V121.33Z"
                            fill="white"
                          />
                        </g>
                        <path
                          d="M31.8789 135.014C31.8789 129.491 36.3561 125.014 41.8789 125.014H410.732C416.254 125.014 420.732 129.491 420.732 135.014V165.478H31.8789V135.014Z"
                          fill="#4E5489"
                        />
                        <rect
                          x="158.577"
                          y="165.277"
                          width="261.641"
                          height="236.83"
                          fill="url(#paint1_linear_95_15710)"
                        />
                        <g filter="url(#filter2_d_95_15710)">
                          <rect
                            x="31.4277"
                            y="164.486"
                            width="127.437"
                            height="237.958"
                            fill="#F2F1F1"
                            fill-opacity="0.19"
                            shape-rendering="crispEdges"
                          />
                        </g>
                        <circle
                          cx="91.6508"
                          cy="205.084"
                          r="23.4575"
                          fill="url(#paint2_linear_95_15710)"
                          fill-opacity="0.87"
                        />
                        <path
                          d="M91.6504 198.457C95.3721 198.457 98.417 202.42 98.417 207.303C98.417 212.187 95.3721 216.15 91.6504 216.15C87.9288 216.15 84.8839 212.187 84.8839 207.303C84.8839 202.42 87.9288 198.457 91.6504 198.457ZM98.7215 216.15C102.308 216.327 105.184 219.405 105.184 223.227V226.766H78.1173V223.227C78.1173 219.405 80.9592 216.327 84.5794 216.15C86.4063 218.309 88.91 219.689 91.6504 219.689C94.3909 219.689 96.8945 218.309 98.7215 216.15Z"
                          fill="white"
                        />
                        <rect
                          x="57.3652"
                          y="247.939"
                          width="68.7935"
                          height="13.5332"
                          fill="url(#paint3_linear_95_15710)"
                        />
                        <rect
                          x="57.3652"
                          y="265.984"
                          width="68.7935"
                          height="13.5332"
                          fill="url(#paint4_linear_95_15710)"
                        />
                        <rect
                          x="57.3652"
                          y="284.027"
                          width="68.7935"
                          height="13.5332"
                          fill="url(#paint5_linear_95_15710)"
                        />
                        <rect
                          x="57.3652"
                          y="302.072"
                          width="68.7935"
                          height="13.5332"
                          fill="url(#paint6_linear_95_15710)"
                        />
                        <rect
                          x="57.3652"
                          y="320.115"
                          width="68.7935"
                          height="13.5332"
                          fill="url(#paint7_linear_95_15710)"
                        />
                        <circle
                          cx="6.2027"
                          cy="6.2027"
                          r="6.2027"
                          transform="matrix(1 0 0 -1 56.2383 154.334)"
                          fill="white"
                        />
                        <ellipse
                          cx="6.76658"
                          cy="6.2027"
                          rx="6.76658"
                          ry="6.2027"
                          transform="matrix(1 0 0 -1 77.666 154.334)"
                          fill="white"
                        />
                        <ellipse
                          cx="6.76658"
                          cy="6.2027"
                          rx="6.76658"
                          ry="6.2027"
                          transform="matrix(1 0 0 -1 100.221 154.334)"
                          fill="white"
                        />
                        <circle
                          cx="202.847"
                          cy="199.445"
                          r="18.0442"
                          fill="white"
                        />
                        <circle
                          cx="202.847"
                          cy="247.939"
                          r="18.0442"
                          fill="white"
                        />
                        <circle
                          cx="202.847"
                          cy="296.433"
                          r="18.0442"
                          fill="white"
                        />
                        <circle
                          cx="202.847"
                          cy="344.927"
                          r="18.0442"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="187.039"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="235.533"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="284.027"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="332.521"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="197.189"
                          width="21.4275"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="245.684"
                          width="21.4275"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="294.178"
                          width="21.4275"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="342.672"
                          width="21.4275"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="207.34"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="255.834"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="304.328"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="229.914"
                          y="352.82"
                          width="54.1326"
                          height="5.63881"
                          rx="2.81941"
                          fill="white"
                        />
                        <rect
                          x="307.729"
                          y="192.68"
                          width="86.8378"
                          height="94.7321"
                          rx="10"
                          fill="white"
                        />
                        <defs>
                          <filter
                            id="filter0_d_95_15710"
                            x="52.5996"
                            y="-11.5"
                            width="575.924"
                            height="601.213"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="-1" dy="1" />
                            <feGaussianBlur stdDeviation="6.25" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_95_15710"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_95_15710"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter1_d_95_15710"
                            x="0.7"
                            y="93.0301"
                            width="452.534"
                            height="344.268"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="1" dy="2" />
                            <feGaussianBlur stdDeviation="5.15" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_95_15710"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_95_15710"
                              result="shape"
                            />
                          </filter>
                          <filter
                            id="filter2_d_95_15710"
                            x="19.0277"
                            y="152.086"
                            width="152.237"
                            height="262.757"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="6.2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_95_15710"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_95_15710"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_95_15710"
                            x1="486.179"
                            y1="68.4252"
                            x2="-103.32"
                            y2="550.071"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#DE4848" />
                            <stop offset="0.92809" stop-color="#C64CAB" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_95_15710"
                            x1="212.534"
                            y1="197.944"
                            x2="364.69"
                            y2="371.074"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#8356A7" />
                            <stop
                              offset="1"
                              stop-color="#A63DA9"
                              stop-opacity="0.95"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_95_15710"
                            x1="91.6508"
                            y1="181.627"
                            x2="91.6508"
                            y2="228.542"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0397159" stop-color="#894B9E" />
                            <stop offset="0.852264" stop-color="#AE42B0" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_95_15710"
                            x1="91.762"
                            y1="247.939"
                            x2="91.762"
                            y2="266.435"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9F61AE" />
                            <stop
                              offset="1"
                              stop-color="#AE6EA4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_95_15710"
                            x1="91.762"
                            y1="265.984"
                            x2="91.762"
                            y2="284.48"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9F61AE" />
                            <stop
                              offset="1"
                              stop-color="#AE6EA4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_95_15710"
                            x1="91.762"
                            y1="284.027"
                            x2="91.762"
                            y2="302.523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9F61AE" />
                            <stop
                              offset="1"
                              stop-color="#AE6EA4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_95_15710"
                            x1="91.762"
                            y1="302.072"
                            x2="91.762"
                            y2="320.568"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9F61AE" />
                            <stop
                              offset="1"
                              stop-color="#AE6EA4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_95_15710"
                            x1="91.762"
                            y1="320.115"
                            x2="91.762"
                            y2="338.611"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#9F61AE" />
                            <stop
                              offset="1"
                              stop-color="#AE6EA4"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
