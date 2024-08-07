import React, { useState, useEffect } from 'react';
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import './App.css';

function App() {
  const [items, setItems] = useState([]) //state variables
  const [active, setActive] = useState(1)
  

  return (
    <div className="App">
      <h1 className='title'>Latest Sports News</h1>
      <Menu />
      <NewsGrid />
      
    </div>
  );
}

export default App;
