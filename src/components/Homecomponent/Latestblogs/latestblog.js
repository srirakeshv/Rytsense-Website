import React from "react";
import resourceblogseparatecontent from "../../../resourceblogseparatecontent";
import { resourcesarray } from "../../../resourcesarray";
import { useNavigate } from "react-router-dom";

const LatestBlogs = ({ centerTitle }) => {
  const navigate = useNavigate();
  const blogs = [
    {
      heading: "Blogs",
      bgimage:
        "/images/homepageimages/mobile-app-development-company-8379091_1280.png",
      passage: "How to Create a Food Delivery App Like EatClub",
      date: "15 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[0].nav}`,
      state: {
        title: resourceblogseparatecontent[0].title,
        heading: resourceblogseparatecontent[0].heading,
        paraarray: resourceblogseparatecontent[0].paraarray,
        paraarray2: resourceblogseparatecontent[0].paraarray2,
        image: resourceblogseparatecontent[0].image,
      },
    },
    {
      heading: "Blogs",
      bgimage:
        "/images/homepageimages/How-To-Develop-A-Transportation-Logistics-Mobile-App.webp",
      passage: "How to Create a Transportation App Like Transit",
      date: "10 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[1].nav}`,
      state: {
        title: resourceblogseparatecontent[1].title,
        heading: resourceblogseparatecontent[1].heading,
        paraarray: resourceblogseparatecontent[1].paraarray,
        paraarray2: resourceblogseparatecontent[1].paraarray2,
        image: resourceblogseparatecontent[1].image,
      },
    },
    {
      heading: "Blogs",
      bgimage: "/images/homepageimages/general.png",
      passage: "Best Kotlin Tips for Android App Developers",
      date: "06 / 11 / 2023",
      path: `/blogs/${resourcesarray[0].boxarray[2].nav}`,
      state: {
        title: resourceblogseparatecontent[2].title,
        heading: resourceblogseparatecontent[2].heading,
        paraarray: resourceblogseparatecontent[2].paraarray,
        paraarray2: resourceblogseparatecontent[2].paraarray2,
        image: resourceblogseparatecontent[2].image,
      },
    },
  ];
  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div
          className={`flex flex-col gap-3 ${centerTitle ? "items-center" : ""}`}
        >
          <div className="relative">
            <h1 className="mt-7 text-3xl font-bold md:text-5xl md:mt-10">
              Latest blogs
            </h1>
            <h1
              className="text-5xl font-bold top-0 md:text-7xl"
              style={{
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "white",
                position: "absolute",
                zIndex: "-1",
                left: centerTitle ? "50%" : "0",
                transform: centerTitle ? "translateX(-50%)" : "none",
              }}
            >
              Blogs
            </h1>
          </div>
          <p>Explore the Latest Blogs on Trends and Technology.</p>
        </div>
        <div className="mt-7 py-5 flex gap-5 flex-wrap justify-center lg:justify-between">
          {blogs.map((blog, index) => (
            <div
              className="flex-0 basis-80 shadow-lg lg:flex-1 rounded-xl hover:cursor-pointer"
              key={index}
              onClick={() => navigate(blog.path, { state: blog.state })}
            >
              <img
                className="w-full h-52 rounded-t-xl"
                src={blog.bgimage}
              ></img>
              <p className="p-5 text-lg font-semibold hover:text-blue1">
                {blog.passage}
              </p>
              <p className="px-5 pb-5 text-base text-slate-800">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
