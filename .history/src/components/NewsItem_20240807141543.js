function NewsItem({ item }) {
    const websiteUrl = item.url; // Fixed typo here
    const website = websiteUrl.split('//').pop().split('/')[0]; // Corrected URL parsing
    const date = item.publishedAt;
    const formatDate = date.replace('T', ' ').replace('Z', ''); // Combined date formatting

    return (
        
    );
}

export default NewsItem;
