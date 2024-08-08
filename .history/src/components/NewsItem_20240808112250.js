import React from 'react';
import './NewsItem.css';

const NewsItem = ({ articles }) => {
  return (
    <div className='content'>
      <div className='news-app'>
        {articles.map((article, index) => (
          <div key={index} className='news-item'>
            <img className='news-img' src={article.urlToImage} alt={article.title} />
            <h3> 
              <a href={article.url}>{article.title}</a>
            </h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
