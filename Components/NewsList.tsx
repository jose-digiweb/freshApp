// Import dependencies
import ArticleCard from "./ArticleCard";

// The props type definition
type Props = {
  news: NewsResponse;
};

/**
 * This function implements the NewsList component
 */
export default function NewsList({ news }: Props) {
  // Return a list of ArticleCard
  return (
    <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.data.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
