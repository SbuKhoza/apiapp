

function NewsItem({item}) {
    const webiteUrl = item.url
    const = website websiteUrl.split('https//').toUpperCase().split('/')[0]
    const date = item.publishedAt
    const formDate = date.replace('T,' '')
    const formatTime = formatDate.replace('Z', '')

    return (
        <a h
    )

}

export default NewsItem;