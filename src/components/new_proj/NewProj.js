import React from "react";

import SearchBar from "./SearchBar";

export default class NewProj extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="ui container" style={{ marginTop: 10 }}>
        <SearchBar />
      </section>
    );
  }
}
