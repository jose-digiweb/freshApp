// Import dependencies
import { env } from "../env/server.mjs";

// The response type definition
type ResponseData = { revalidated: boolean };

/**
 * Function that will call the endpoint to revalidate the cache for a specific page
 * @param string    The page path to revalidate the cache
 */
export default async function revalidatePageCache(path: string) {
  try {
    // Call the revalidate endpoint
    const response = await fetch(
      "https://fresh-news.vercel.app/api/revalidate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: env.REVALIDATE_TOKEN,
        },
        body: JSON.stringify(path),
      }
    );

    // Get the response data
    const data = (await response.json()) as ResponseData;

    // Return the response data
    return data;

    // Handle errors
  } catch (error) {
    // Log the error
    console.error("Error calling the revalidate endpoint", error);
  }
}
