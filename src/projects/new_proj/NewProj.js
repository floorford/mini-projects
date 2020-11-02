import React from "react";

import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class NewProj extends React.Component {
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
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </section>
    );
  }
}

export default NewProj;
