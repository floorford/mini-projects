import React from "react";

import youtube from "./api/youtube";
import SearchBar from "../image_searcher/components/SearchBar";
import YTUBE_KEY from "../../keys";

class Video extends React.Component {
  onSearchSubmit = async (term) => {
    await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: YTUBE_KEY,
      },
    });
  };

  render() {
    return <SearchBar type={"Video"} searchSubmit={this.onSearchSubmit} />;
  }
}

export default Video;
