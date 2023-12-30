import React from "react";

const ResourcesContactHead = () => {
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            <p className="mt-7 text-3xl font-bold sm:text-5xl sm:mt-10">
              Contact Us
            </p>
            <h1
              className="text-5xl font-bold top-0 sm:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              contact
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesContactHead;
