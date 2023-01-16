// Import dependencies
import fetchNewsData from "../../utils/fetchNewsData";
import NewsList from "../../Components/NewsList";
import { categories } from "../../utils/constants";

// The props type definition
type Props = {
  params: { category: string };
};

// Revalidate the cache in every 20 seconds
export const revalidate = 20;

/**
 * This function implements the CategoryPage component
 * @Note We also revalidate the cache if this page has been loaded more then 5 times
 * @Note See the middleware file for more details
 */
export default async function CategoryPage({ params: { category } }: Props) {
  // Get the news data
  const news = (await fetchNewsData("general", category)) as NewsResponse;

  // Return the page component
  return (
    <div>
      <h1 className="header-title">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

// We want to pre-build all the categories pages
export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
