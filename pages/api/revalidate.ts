// Import dependencies
import type { NextApiRequest, NextApiResponse } from "next";
import pageLoadCount from "../../utils/pageLoadCount";
import { env } from "../../env/server.mjs";

/**
 * Function to revalidate the cache for a specific page
 * @Note The cache will only be revalidated if the page
 *       has been loaded more then 5 times
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get the page path
    const path = req.body as Path;

    // Get the revalidation token
    const token = req.headers.authorization;

    // Make sure that a path is provided
    if (!path) {
      return res.status(401).json({ message: "The path was not provided" });
    }

    // Make sure that a valid token is provided
    if (token !== env.REVALIDATE_TOKEN) {
      return res.status(401).json({ message: "Invalid revalidation token" });
    }

    // Get the page load count
    const count = pageLoadCount(path);

    // Check if the page load count is greater then 5
    // Revalidate the page cache
    if (count > 5) await res.revalidate(path);

    console.log({ path, count, revalidated: count > 5 });

    // Send the response
    res.status(200).json({ revalidated: count > 5 });

    // Handle error
  } catch (error) {
    // Log the error
    console.error(" my error: ", error);

    // Send the response
    // Next.js will continue to show the last successfully generated page
    res.status(500).send("Error revalidating");
  }
}
