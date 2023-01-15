// The props type definition
type Props = {
  article: Article;
};

/**
 * This function implements the ArticleCard component
 */
export default function ArticleCard({ article }: Props) {
  return (
    <div className="article-container">
      {/* eslint-disable */}
      {/* ESLint wants us to use the new Image component */}
      {/* Witch requires image source to be whitelisted */}
      {/* But we don't control the image source for this api */}
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
        />
      )}
      {/* eslint-enable  */}

      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-serif font-bold line-clamp-2">{article.title}</h2>

        <div className="mt-2 flex-1">
          <p className="line-clamp-5">{article.description}</p>
        </div>

        <div className="ml-auto flex space-x-1 pt-5 text-right text-xs italic text-gray-400">
          <p>{article.source} -</p>
          <p>{article.published_at.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
}
