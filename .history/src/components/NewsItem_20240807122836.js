

function NewsItem({item}) {
    const webiteUrl = item.url
    const = website websiteUrl.split('https//').toUpperCase().split('/')[0]
    const date = item.publishedAt
    const formDate = date.replace('T,' '')
    const formatTime = formatDate.replace('Z', '')

    return (
        <a href="" className="article">
            <div className="article-image">
                <img
            </div>
        </a>
    )

}

export default NewsItem;