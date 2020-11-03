import React from "react";

import "../css/style.css";
import ImageCard from "./ImageCard";
import VideoItem from "../../videos/components/VideoItem.js";

const List = ({ media, type, onSelect }) => {
  const mediaList = media.map((med, i) =>
    type === "video" ? (
      <VideoItem key={i} video={med} onSelect={onSelect} />
    ) : (
      <ImageCard key={i} image={med} />
    )
  );

  return (
    <div
      className={type === "video" ? "ui relaxed divided list" : "media-list"}
    >
      {mediaList}
    </div>
  );
};

export default List;
