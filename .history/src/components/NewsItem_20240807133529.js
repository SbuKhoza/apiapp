function NewsItem({ item }) {
    const websiteUrl = item.url; // Fixed typo here
    const website = websiteUrl.split('//').pop().split('/')[0]; // Corrected URL parsing
    const date = item.publishedAt;
    const formatDate = date.replace('T', ' ').replace('Z', ''); // Combined date formatting

    return (
        <a href={item.url} className="article"> {/* Added href value */}
            <div className="article-image">
                <img src={item.urlToImage} alt="article" /> {/* Added src and alt values */}
            </div>
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
