import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();

    this.props.searchSubmit(this.state.term);
  }

  render() {
    return (
      <section className='search-bar ui segment'>
        <form onSubmit={this.handleSearch} className='ui form'>
          <section className='field'>
            <label htmlFor='search'>{this.props.type} Search</label>
            <input
              value={this.state.term}
              name='search'
              id='search'
              type='search'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </section>
        </form>
      </section>
    );
  }
}

export default SearchBar;
