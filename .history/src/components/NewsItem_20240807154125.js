import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, url, urlToImage}) => {
  return (
    <div className='news-app'>
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage} ></img>
            <h3> 
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
     </div> 
    </div>
  )

}

export default NewsItem