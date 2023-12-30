import React from "react";
import { useNavigate } from "react-router-dom";

const ResourceMediaNavigation = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // Use the goBack function to navigate back
    navigate(-1);
  };
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
            <span
              className={`text-indigo-800 hover:cursor-pointer `}
              onClick={goBack}
            >
              Media Coverage
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceMediaNavigation;
