import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class NewProj extends React.Component {
  onSearchSubmit = (term) => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID -f-xWkmfLsII02rsfr_IJNSAswufGeXkp3oI5rCBLss",
      },
    });
  };

  render() {
    return (
      <section className='ui container' style={{ marginTop: 10 }}>
        <SearchBar searchSubmit={this.onSearchSubmit} />
      </section>
    );
  }
}

export default NewProj;
