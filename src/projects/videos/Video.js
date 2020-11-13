import React, { useEffect, useState } from "react";
import axios from "axios";

import { YTUBE_KEY } from "../../keys";

import SearchBar from "../image_searcher/components/SearchBar";
import List from "../image_searcher/components/List";
import VideoDetail from "./components/VideoDetail";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("cthun");
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: YTUBE_KEY,
        },
      }
    );

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <main className='ui container' style={{ marginTop: 10 }}>
      <SearchBar type={"Video"} searchSubmit={onSearchSubmit} />
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
