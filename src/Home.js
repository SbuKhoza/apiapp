import React from 'react';
import NewsGrid from './components/NewsGrid';
import Privacy from './components/Privacy';
import './Home.css';

function Home({ activeCategory }) {
  return (
    <div>
      <h1>Top Stories</h1>
      <NewsGrid activeCategory={activeCategory} />
      <Privacy />
    </div>
  );
}

export default Home;