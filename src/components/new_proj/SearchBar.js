import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    e.preventDefault();
  }

  render() {
    return (
      <section className="ui segment">
        <form onSubmit={this.handleSearch} className="ui form">
          <section className="field">
            <label htmlFor="search">Image Search</label>
            <input
              value={this.state.input}
              name="search"
              id="search"
              type="search"
              onChange={(e) => this.setState({ input: e.target.value })}
            />
          </section>
        </form>
      </section>
    );
  }
}
