import React from "react";
import { useNavigate } from "react-router-dom";

const IndustriesHead = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div className="flex">
          <p className="flex gap-1 text-lg ml-auto font-normal">
            <span
              className="text-indigo-800 hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-slate-500">/</span>
            <span className={`text-slate-500 hover:cursor-pointer `}>
              Industry
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHead;
