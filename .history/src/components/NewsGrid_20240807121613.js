import NewsItem from './NewsItem'

function NewsGrid({items}) {
    return (
    <div className='news-grid'>
        {items.map((item, i) => (
            <NewsItem 

        ))}


    </div>
    )
}

export default NewsGrid;