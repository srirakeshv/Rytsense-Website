import React from "react";
import { useLocation } from "react-router-dom";
import LatestBlogs from "../../Homecomponent/Latestblogs/latestblog";

const ResourceBlogs = () => {
  const location = useLocation();
  const blogs = location.state && location.state.blogs;
  return (
    blogs && (
      <div>
        <LatestBlogs centerTitle={true} />
      </div>
    )
  );
};

export default ResourceBlogs;
