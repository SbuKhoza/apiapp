import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './NewsGrid.css';

const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className='s-icon' onClick={onSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

function Menu({ searchTerm, onSearchChange, onSearch, active, setActive }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setActive(category);
    setIsDropdownOpen(false); // Close dropdown after clicking
  };

  return (
    <div className="Menu">
      <div className='mennu'>
        <nav>
          <div className="logo">
            <h2 className='lgtext'>PremierPulse News</h2>
          </div>
          <div className="hamburger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={isDropdownOpen ? 'dropdown open' : 'dropdown'}>
            <li>
              <a
                href="#business"
                className={active === 'business' ? 'active' : ''}
                onClick={() => handleCategoryClick('business')}
              >
                Business
              </a>
            </li>
            <li>
              <a
                href="#entertainment"
                className={active === 'entertainment' ? 'active' : ''}
                onClick={() => handleCategoryClick('entertainment')}
              >
                Entertainment
              </a>
            </li>
            <li>
              <a
                href="#general"
                className={active === 'general' ? 'active' : ''}
                onClick={() => handleCategoryClick('general')}
              >
                General
              </a>
            </li>
            <li>
              <a
                href="#health"
                className={active === 'health' ? 'active' : ''}
                onClick={() => handleCategoryClick('health')}
              >
                Health
              </a>
            </li>
            <li>
              <a
                href="#science"
                className={active === 'science' ? 'active' : ''}
                onClick={() => handleCategoryClick('science')}
              >
                Science
              </a>
            </li>
            <li>
              <a
                href="#sports"
                className={active === 'sports' ? 'active' : ''}
                onClick={() => handleCategoryClick('sports')}
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="#technology"
                className={active === 'technology' ? 'active' : ''}
                onClick={() => handleCategoryClick('technology')}
              >
                Technology
              </a>
            </li>
          </ul>
        </nav>
        <div className="search">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
