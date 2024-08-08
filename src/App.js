import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './Home';
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearch = () => {
    console.log('Search:', searchTerm);
  };

  return (
    <Router>
      <div className='App'>
        <div className='app-cont'>
          <header>
            <Menu
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onSearch={handleSearch}
              active={activeCategory}
              setActive={setActiveCategory}
            />
          </header>
          <Routes>
            <Route path="/" element={<Home activeCategory={activeCategory} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
