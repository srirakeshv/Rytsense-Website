import React from "react";

const Partnercompany = () => {
  return (
    <div
      style={{ background: "linear-gradient(to right, #3D5AA4E5, #3F3DA4)" }}
    >
      <div className="max-w-7xl px-5 py-10 mx-auto flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex-1 p-5 flex items-center">
          <p className="text-3xl text-white leading-tight w-full md:w-4/5 lg:w-3/4 md:text-4xl">
            Strategic PartnerShip to Unlock Greater Business value
          </p>
        </div>
        <div className="pr-5 flex-1 flex flex-col justify-center gap-6 items-center flex-wrap md:items-end md:justify-between">
          <div className="flex gap-6">
            <div className="p-5 w-32 h-32 bg-white flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform">
              <img
                src="/images/2560px-Amazon_Web_Services_Logo.svg.png"
                alt="logo"
              ></img>
            </div>
            <div className="p-5 w-32 h-32 bg-white flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform">
              <img src="/images/Google-Cloud-Logo.png" alt="logo"></img>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-5 w-32 h-32 bg-white flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform">
              <img src="/images/MongoDB_Logo.svg.png" alt="logo"></img>
            </div>
            <div className="p-5 w-32 h-32 bg-white flex justify-center items-center rounded-lg hover:transform hover:scale-110 transition-transform">
              <img src="/images/IBM_logo.svg.png" alt="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnercompany;
