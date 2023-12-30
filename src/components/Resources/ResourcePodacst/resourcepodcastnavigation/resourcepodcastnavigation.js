import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resourcesarray } from "../../../../resourcesarray";

const ResourcePodcastNavigation = () => {
  const navigate = useNavigate();
  const nav4 = resourcesarray[6].topic;

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
              onClick={() =>
                navigate(`/resources/${nav4}`, {
                  state: {
                    navbar: resourcesarray[6].navbar,
                    heading: resourcesarray[6].heading,
                    bgtext: resourcesarray[6].bgtext,
                    boxarray: resourcesarray[6].boxarray,
                    podcast: resourcesarray[6].podcast,
                    blogs: resourcesarray[6].blogs,
                    simage: resourcesarray[6].simage,
                    passage2: resourcesarray[6].passage2,
                  },
                })
              }
            >
              Podcast
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcePodcastNavigation;
