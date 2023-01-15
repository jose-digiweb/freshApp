// Import dependencies
import fetchNewsData from "../../utils/fetchNewsData";
import NewsList from "../../Components/NewsList";

// The props type definition
type Props = {
  searchParams?: { query: string };
};

// This page should be dynamic
export const dynamic = "force-dynamic";

/**
 * This function implements the SearchPage component
 */
export default async function SearchPage({ searchParams }: Props) {
  // Fetch the news data based on the search query
  const news = (await fetchNewsData(
    "general",
    searchParams?.query
  )) as NewsResponse;

  // Return the page component
  return (
    <div>
      <h1 className="header-title">Results:</h1>
      <NewsList news={news} />
    </div>
  );
}
