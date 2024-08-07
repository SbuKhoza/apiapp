import NewsItem from './NewsItem'

function NewsGrid({items}) {
    return (
    <div className='news-grid'>
        {items.map((item, i) => (
            <NewsItem key={i} item

        ))}


    </div>
    )
}

export default NewsGrid;