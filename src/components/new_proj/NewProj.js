import React from "react";

import SearchBar from "./SearchBar";

class NewProj extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
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
