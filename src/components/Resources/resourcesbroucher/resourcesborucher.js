import React from "react";
import { useLocation } from "react-router-dom";

const ResourcesBroucher = () => {
  const location = useLocation();
  const simage = location.state && location.state.simage;
  const passage2 = location.state && location.state.passage2;
  return (
    simage &&
    passage2 && (
      <div className="my-5">
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex flex-col gap-3 items-center ll:flex-row">
            <img
              style={{ height: "300px", width: "600px" }}
              src={simage}
              alt="bgimage"
            ></img>
            <p className="text-xl leading-8">{passage2}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ResourcesBroucher;
