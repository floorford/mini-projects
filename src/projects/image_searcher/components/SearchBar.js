import React, { useState } from "react";

const SearchBar = ({ type, searchSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    searchSubmit(term);
  };

  return (
    <section className='search-bar ui segment'>
      <form onSubmit={(e) => handleSearch(e)} className='ui form'>
        <section className='field'>
          <label htmlFor='search'>{type} Search</label>
          <input
            value={term}
            name='search'
            id='search'
            type='search'
            placeholder='Enter a term to search...'
            onChange={(e) => setTerm(e.target.value)}
          />
        </section>
      </form>
    </section>
  );
};

export default SearchBar;
