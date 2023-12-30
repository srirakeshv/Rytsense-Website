import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import resourceblogseparatecontent from "../../../resourceblogseparatecontent";
import { resourcemediaarray } from "../../../resourcemediaarray";
import { resourcetechnewsarray } from "../../../resourcetechnewsarray";
import { resourcepodcastarray } from "../../../resourcepodcastarray";

const ResourceBoxes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const boxarray = location.state && location.state.boxarray;
  const navbar = location.state && location.state.navbar;
  if (!boxarray) {
    // You can add some fallback UI or return null
    return null;
  }
  const handleBlogClick = (index, box) => {
    // Assuming you have a route like "/blogs/:blogId", replace it accordingly
    if (navbar === "Blog") {
      navigate(`/blogs/${box.nav}`, {
        state: {
          title: resourceblogseparatecontent[index].title,
          heading: resourceblogseparatecontent[index].heading,
          paraarray: resourceblogseparatecontent[index].paraarray,
          paraarray2: resourceblogseparatecontent[index].paraarray2,
          image: resourceblogseparatecontent[index].image,
        },
      });
    }
    if (navbar === "Media Coverage") {
      navigate(`/mediacoverage/${box.nav}`, {
        state: {
          title: resourcemediaarray[index].title,
        },
      });
    }
    if (navbar === "Tech News") {
      navigate(`/technews/${box.nav}`, {
        state: {
          title: resourcetechnewsarray[index].title,
          para: resourcetechnewsarray[index].para,
          image: resourcetechnewsarray[index].image,
        },
      });
    }
    // if (navbar === "Popdcast") {
    //   navigate(`/podcast/${box.nav}`, {
    //     state: {
    //       title: resourcepodcastarray[index].title,
    //       title1: resourcepodcastarray[index].title1,
    //       array: resourcepodcastarray[index].array,
    //       image: resourcepodcastarray[index].image,
    //       heading: resourcepodcastarray[index].heading,
    //     },
    //   });
    // }
  };

  const handleClick = (box, index) => {
    if (navbar === "Popdcast") {
      navigate(`/podcast/${box.nav}`, {
        state: {
          title: resourcepodcastarray[index].title,
          title1: resourcepodcastarray[index].title1,
          array: resourcepodcastarray[index].array,
          image: resourcepodcastarray[index].image,
          heading: resourcepodcastarray[index].heading,
        },
      });
    }
    if (navbar === "Research") {
      if (index === 0) {
        navigate("/research/guide-on-how-ai-is-transforming-businesses");
      } else if (index == 1) {
        navigate("/research/hire-php-developers");
      }
    }
  };
  return (
    boxarray && (
      <div>
        <div className="max-w-7xl p-5 mx-auto">
          <div className="flex gap-9 flex-wrap justify-center xl:justify-start">
            {boxarray.map((box, index) => (
              <div
                className="basis-96 flex flex-col gap-3 rounded-xl shadow-lg pb-5 justify-between hover:cursor-pointer"
                key={index}
                onClick={() => handleBlogClick(index, box)}
              >
                {box.image && (
                  <img
                    src={box.image}
                    alt="bgimage"
                    className="rounded-t-xl h-56"
                  ></img>
                )}
                {box.heading && (
                  <h1 className="text-xl font-medium px-5 text-blue1">
                    {box.heading}
                  </h1>
                )}
                {box.para && (
                  <p className="text-2xl font-semibold px-5 hover:cursor-pointer hover:text-blue1">
                    {box.para}
                  </p>
                )}
                {box.date && <p className="px-5 text-slate-700">{box.date}</p>}
                {box.passage && (
                  <p className="px-5 text-slate-900 text-lg">{box.passage}</p>
                )}
                {box.buttontext && (
                  <button
                    className="self-start mx-5 p-5 bg-blue1 text-white flex gap-2 items-center"
                    onClick={() => handleClick(box, index)}
                  >
                    {box.buttontext}
                    <svg
                      width="35"
                      height="16"
                      viewBox="0 0 35 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928932C27.9526 0.538408 27.3195 0.538408 26.9289 0.928932C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM0 9L34 9V7L0 7L0 9Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ResourceBoxes;
