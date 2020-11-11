import React from "react";

import youtube from "./api/youtube";
import { YTUBE_KEY } from "../../keys";

import SearchBar from "../image_searcher/components/SearchBar";
import List from "../image_searcher/components/List";
import VideoDetail from "./components/VideoDetail";

class Video extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("cthun");
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: YTUBE_KEY,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <main className='ui container' style={{ marginTop: 10 }}>
        <SearchBar type={"Video"} searchSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='five wide column'>
              <List media={videos} type='video' onSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Video;
