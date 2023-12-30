import React from "react";
import { useLocation } from "react-router-dom";
import OurPodcast from "../../Homecomponent/our Podcast/ourpodcast";

const ResourcePodcast = () => {
  const location = useLocation();
  const podcast = location.state && location.state.podcast;
  return (
    podcast && (
      <div>
        <OurPodcast />
      </div>
    )
  );
};

export default ResourcePodcast;
