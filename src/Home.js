import React from 'react';
import NewsGrid from './components/NewsGrid';
import './Home.css';

function Home({ activeCategory }) {
  return (
    <div>
      <h1>Top Stories</h1>
      <NewsGrid activeCategory={activeCategory} />
    </div>
  );
}

export default Home;
