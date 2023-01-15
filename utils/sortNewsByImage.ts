/**
 * This function sorts the news data and gets only the ones with image
 */
export default function sortNewsByImage(news: NewsResponse) {
  // Get only the news with image
  const newsWithImage = news.data.filter((item) => item.image !== null);

  // Construct the output
  const sortedNews = {
    pagination: news.pagination,
    data: [...newsWithImage],
  };

  // Output the sorted news
  return sortedNews;
}
