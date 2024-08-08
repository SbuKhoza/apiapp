import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const UefaNewsGrid = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=uefa%20champions%20league&apiKey=YOUR_API_KEY')
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
                      key={article.url}
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

export default UefaNewsGrid
