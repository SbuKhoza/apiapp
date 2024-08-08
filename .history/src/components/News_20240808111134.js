import React from 'react'

function News() {
  return (
    <div>
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

export default News

