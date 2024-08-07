function NewsItem({ item }) {
    const websiteUrl = item.url; // Fixed typo here
    const website = websiteUrl.split('//').pop().split('/')[0]; 
    const date = item.publishedAt;
    const formatDate = date.replace('T', ' ').replace('Z', ''); 

    return (
        <a href={item.url} className="article"> 
            <div className="article-image">
                <img src={item.urlToImage} alt="article" /> 
            <div className="article-content">
                <div className="article-source">
                    <img src={item.source.logo} alt={website} /> 
                    <span>{website}</span>
                    <span>{formatDate}</span>
                </div>
                <h2>{item.title}</h2> 
                <p>{item.description}</p> 
            </div>
        </a>
    );
}

export default NewsItem;
