

function NewsItem({item}) {
    const webiteUrl = item.url
    const website = item.Url.split('https//').pop().split('/')[0]
    const date = item.publishedAt
    const formatDate = date.replace('T', '')
    const formatTime = formatDate.replace('Z', '')

    return (
        <a href="" className="article">
            <div className="article-image">
                <img src='' alt='article'></img>
            </div>
            <div className="article-content">
                <div className="article-source">
                <img src='' alt='articles'></img>

            </div>
            </div>
        </a>
    )

}

export default NewsItem;