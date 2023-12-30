import React from "react";
import "./Header.css";

const Topbar = () => {
  return (
    <div className="bg-slate-50 hidden xl:block">
      <div className="max-w-7xl mx-auto px-5 py-2.5 flex justify-between items-center">
        <div className="flex gap-3">
          <div className="flex gap-1 items-center hover:cursor-pointer">
            <img
              className="w-6 h-4 rounded-sm"
              src="/images/India Flag.png"
              alt="India Flag"
            ></img>

            <div className="flex gap-1">
              <span>+91</span>
              <span>70100</span>
              <span>44153</span>
            </div>
          </div>
          <div className="flex gap-1 items-center hover:cursor-pointer">
            <img
              className="w-6 h-4 rounded-sm"
              src="/images/Usa Flag.png"
              alt="USA Flag"
            ></img>

            <div className="flex gap-1">
              <span>+1</span>
              <span>650</span>
              <span>681</span>
              <span>0090</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="py-2.5 px-4 font-normal rounded-full border">
            Press Release
          </button>
          <button className="py-2.5 px-4 font-normal rounded-full border">
            Our Fresh Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
