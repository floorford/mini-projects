import React, { useEffect, useState } from "react";

import SearchBar from "../image_searcher/components/SearchBar";
import List from "../image_searcher/components/List";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // custom hook: returns array [list of videos, search function for videos];
  const [videos, search] = useVideos("cthun");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <main className='ui container' style={{ marginTop: 10 }}>
      <SearchBar type={"Video"} searchSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <List media={videos} type='video' onSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Video;
