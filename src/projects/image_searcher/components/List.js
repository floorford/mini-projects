import React from "react";

import "../css/style.css";
import ImageCard from "./ImageCard";
import VideoCard from "../../videos/components/VideoCard.js";

const List = ({ media, type }) => {
  const mediaList = media.map((med) =>
    type === "video" ? (
      <VideoCard key={med.id} image={med} />
    ) : (
      <ImageCard key={med.id} image={med} />
    )
  );

  return <div className='media-list'>{mediaList}</div>;
};

export default List;
