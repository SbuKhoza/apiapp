// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const NewsGrid = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const getArticles = () =>

        axios.get('https://newsapi.org/v2/top-headlines?country=za&category=sports&apiKey=1dc3148b53ff4513bf5681d1fb034771')
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
