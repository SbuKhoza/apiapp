import React from 'react'
import NewsGrid from './components/NewsGrid'
import './Home.css'

function Home() {
  return (
    <div>
      
      <div className='banner'>
        <img src='epl.jpg' alt='epl'></img>
      </div>
      <h1> PremierPulse Sport</h1>
      <NewsGrid/>
    </div>
  )
}

export default Home