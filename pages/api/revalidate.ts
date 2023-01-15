// Import dependencies
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import { env } from "../../env/server.mjs";

/**
 * Function to revalidate the cache for a specific page
 * @Note The cache will only be revalidated if the page
 *       have been loaded more then 5 times
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

    // Get the pagesLoadCount record
    const pagesLoadCount = await fs.readFile("./pagesLoadCount.json", "utf-8");

    // Parse the pagesLoadCount data to a javascript object
    const loadCountObject = JSON.parse(pagesLoadCount) as PageLoadCount;

    // Check if the load count for the current page is greater then 5
    if (+loadCountObject[path] > 5) {
      // Reset the loadCount to 0
      loadCountObject[path] = "0";

      // Update the pagesLoadCount record
      await fs.writeFile(
        "./pagesLoadCount.json",
        JSON.stringify(loadCountObject)
      );

      // Revalidate the page cache
      await res.revalidate(path);

      // Send the response
      return res.status(200).json({ revalidated: true });
    }

    // Increase the loadCount value for the current page
    // @ts-expect-error (typescript does not like this)
    +loadCountObject[path]++;

    // Update the pagesLoadCount record
    await fs.writeFile(
      "./pagesLoadCount.json",
      JSON.stringify(loadCountObject)
    );

    // Send the response
    res.status(200).json({ revalidated: false });

    // Handle error
  } catch (error) {
    // Log the error
    console.error(error);

    // Send the response
    // Next.js will continue to show the last successfully generated page
    res.status(500).send("Error revalidating");
  }
}
