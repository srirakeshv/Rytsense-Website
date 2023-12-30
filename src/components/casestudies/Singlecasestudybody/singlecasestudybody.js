import React from "react";
import { useLocation } from "react-router-dom";

const SingleCaseStudyBody = () => {
  const location = useLocation();
  const passage = location.state && location.state.passage;
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <p className="text-lg text-slate-700 text-center leading-8">
          {passage}
        </p>
      </div>
    </div>
  );
};

export default SingleCaseStudyBody;
