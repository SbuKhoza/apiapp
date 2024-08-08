import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './NewsGrid.css';

const NewsGrid = ({ activeCategory }) => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState(activeCategory);

    useEffect(() => {
        setCategory(activeCategory);
    }, [activeCategory]);

    useEffect(() => {
        const getArticles = async () => {
            let attempts = 0;
            const maxAttempts = 3;

            // Try to fetch from local storage first
            const localStorageArticles = localStorage.getItem(`articles_${category}`);
            if (localStorageArticles) {
                setArticles(JSON.parse(localStorageArticles));
            }

            while (attempts < maxAttempts) {
                try {
                    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=za&category=${category}&apiKey=ec918d2a77294e37ace93278fc20934b`);
                    setArticles(response.data.articles);

                    // Save articles to local storage
                    localStorage.setItem(`articles_${category}`, JSON.stringify(response.data.articles));

                    break; // Break out of the loop if the request is successful
                } catch (error) {
                    if (error.response && error.response.status === 429) {
                        // Too many requests, wait and retry
                        attempts++;
                        const waitTime = Math.pow(2, attempts) * 1000;
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                    } else {
                        // Handle other errors or rethrow
                        console.error(error);
                        break;
                    }
                }
            }
        };

        getArticles();
    }, [category]);

    return (
        <div className='newsframe'>
            {articles.map(article => (
                <NewsItem
                    key={article.url}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            ))}
        </div>
    );
};

export default NewsGrid;
