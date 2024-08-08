import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className='news-app'>
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage}/>
            <h3> 
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    </div> 
  )
}

const NewsList = ({ newsItems }) => {
  return (
    <div className='content'>
      {newsItems.map((news, index) => (
        <NewsItem key={index} {...news} />
      ))}
    </div>
  )
}

export default NewsItem
