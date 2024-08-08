import React, { useState } from 'react';
import './Menu.css';

const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

function Menu({ searchTerm, onSearchChange, onSearch }) {
  return (
    <div className="Menu">
      <nav>
        <div className="logo"> </div>
        
        <ul>
          <li><a href="arsenal">Arsenal</a></li>
          <li><a href="chelsea">Chelsea</a></li>
          <li><a href="">Liverpool</a></li>
          <li><a href="#">Man City</a></li>
          <li><a href="#">Uefa Champions League</a></li>
        </ul>

        <div className="search">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onSearch={onSearch}
          />
        </div>

      </nav>
    </div>
  );
}

export default Menu