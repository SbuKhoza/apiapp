import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './NewsGrid.css';

const ArsenalGrid = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=manchester%20city%20fc&apiKey=1dc3148b53ff4513bf5681d1fb034771');
                console.log(response);
                console.log(response.data.articles);
                setArticles(response.data.articles);
            } catch (error) {
                console.error("Error fetching the articles: ", error);
            }
        };

        getArticles();
    }, []);

    return (
        <div className="news-grid">
            {articles.map((article, index) => (
                <NewsItem
                    key={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            ))}
        </div>
    );
}

export default ArsenalGrid;
