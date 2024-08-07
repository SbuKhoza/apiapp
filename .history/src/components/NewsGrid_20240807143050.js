// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const NewsGrid = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=za&category=sports&apiKey=1dc3148b53ff4513bf5681d1fb034771')
            console.log(response)
            set
        }

        getArticles()
       
        },[])
    
  return (
    <div>
      
    </div>
  )
}

export default NewsGrid
