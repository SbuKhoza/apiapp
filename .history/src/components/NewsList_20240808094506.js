import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

const NewsList = ({ news }) => {
  return (
    <div className="news-app">
      {news.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          urlToImage={item.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
