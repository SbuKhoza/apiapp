import React from 'react'
import NewsGrid from './components/NewsGrid'
import './Home.css'

function Home() {
  return (
    <div>
      <h1> PremierPulse Sport</h1>
      <div className='banner'>
        <img src='epl.jpg' alt='epl'></img>
      </div>
      <NewsGrid/>
    </div>
  )
}

export default Home