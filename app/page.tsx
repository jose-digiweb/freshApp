// Import dependencies
import NewsList from "../Components/NewsList";
import { categories } from "../utils/constants";
import fetchNewsData from "../utils/fetchNewsData";

// Revalidate the cache in every 20 seconds
export const revalidate = 20;

/**
 * This function implements the HomePage component
 * @Note We also revalidate the cache if this page has been loaded more then 5 times
 * @Note See the middleware file for more details
 */
export default async function HomePage() {
  // Fetch the news data
  const news = (await fetchNewsData(categories.join(","))) as NewsResponse;

  // Return the NewsList component
  return <NewsList news={news} />;
}
