import axios, { type AxiosResponse } from "axios";
import { env } from "../env/server.mjs";
import sortNewsByImage from "../utils/sortNewsByImage";

/**
 * This function fetches the news data
 */
export default async function fetchNewsData(
  categories?: Category | string,
  keywords?: string
) {
  try {
    // Fetch the news data
    const res: AxiosResponse<NewsResponse> = await axios.get(
      "http://api.mediastack.com/v1/news",
      {
        params: {
          access_key: env.MEDIA_STACK_API_KEY,
          categories,
          keywords,
          countries: "nl",
          sort: "published_desc",
          limit: "20",
        },
      }
    );

    // Sort the data by images
    const sortedNews = sortNewsByImage(res.data);

    // Output the news data
    return sortedNews;

    // Handle errors
  } catch (error) {
    // Log the error
    console.error(error);
  }
}
