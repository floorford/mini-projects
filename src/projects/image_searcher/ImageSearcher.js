import React from "react";

import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

class ImageSearcher extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <section className='ui container' style={{ marginTop: 10 }}>
        <SearchBar type={"Image"} searchSubmit={this.onSearchSubmit} />
        <List media={this.state.images} />
      </section>
    );
  }
}

export default ImageSearcher;
