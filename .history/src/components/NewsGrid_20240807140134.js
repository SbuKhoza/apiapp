// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const NewsGrid = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
       .then(response => {
            setArticles(response.data.articles)
        })
       .catch(error => {
            console.log(error)
        })
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default NewsGrid
