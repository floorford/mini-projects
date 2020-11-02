import React from "react";

import youtube from "./api/youtube";
import SearchBar from "../image_searcher/components/SearchBar";

const KEY = "AIzaSyDYYXnUMSmA6ZIGfnYHtWobSADVZ0M1Za4";

class Video extends React.Component {
  onSearchSubmit = async (term) => {
    await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return <SearchBar type={"Video"} searchSubmit={this.onSearchSubmit} />;
  }
}

export default Video;
