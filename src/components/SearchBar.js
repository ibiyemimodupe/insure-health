import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import './searchbar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-form-group">
        <FontAwesomeIcon icon={faSearch} className="search-form-icon" onClick={handleSubmit} />
        <input type="text" value={searchTerm} onChange={handleChange} className="search-input" placeholder="Search..." />
      </div>
    </form>
  );
}

export default SearchBar;

// how to use filter for search 