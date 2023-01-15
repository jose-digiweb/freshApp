// Import dependencies
import { env } from "../env/server.mjs";

/**
 * Function that will call the endpoint to revalidate the cache for a specific page
 * @param string    The page path to revalidate the cache
 */
export default async function revalidatePageCache(path: Path) {
  try {
    // Call the revalidate endpoint
    await fetch("http://127.0.0.1:3000/api/revalidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: env.REVALIDATE_TOKEN,
      },
      body: JSON.stringify(path),
    });

    // Handle errors
  } catch (error) {
    // Log the error
    console.error("Error calling the revalidate endpoint", error);
  }
}
