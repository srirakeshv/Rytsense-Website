import React from "react";
import { useLocation } from "react-router-dom";

const SingleCaseStudyPic = () => {
  const location = useLocation();
  const imagearray = location.state && location.state.imagearray;
  return (
    <div>
      {imagearray ? (
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex gap-4 justify-center flex-wrap">
            {imagearray.map((image) => (
              <img
                src={image}
                alt="sampleimages"
                style={{ width: "250px" }}
              ></img>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleCaseStudyPic;
