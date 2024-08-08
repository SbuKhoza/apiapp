import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import './NewsGrid.css'


const A = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=arsenal&apiKey=1dc3148b53ff4513bf5681d1fb034771')
            console.log(response);
            console.log(response.data.articles);
            setArticles(response.data.articles)
        }

        getArticles()
       
        },[])
    
  return (
    <div>
        {articles.map(article => {
            return (
                <NewsItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                />
            )
        })}
    </div>
  )
}

export default Arsenal
