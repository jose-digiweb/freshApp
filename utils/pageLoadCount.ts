// Import dependencies
import fs from "fs";
import { env } from "../env/server.mjs";
import { loadCountMockData } from "./constants";

/**
 * This function implements the logic to keep tracking
 * of the load count for a specific page
 * @param string    The page path
 * @returns number  The current load count
 */
export default function pageLoadCount(pagePath: Path) {
  // Get the path to the page count record
  const recordFilePath =
    env.NODE_ENV === "production"
      ? "/tmp/pagesLoadCount.json"
      : "./pagesLoadCount.json";

  // Create the file if it doesn't exist'
  if (!fs.existsSync(recordFilePath)) {
    fs.writeFileSync(recordFilePath, JSON.stringify(loadCountMockData));
  }

  // Get the pagesLoadCount record
  const pagesLoadCount = fs.readFileSync(recordFilePath, "utf-8");

  // Parse the pagesLoadCount data to a javascript object
  const loadCountObject = JSON.parse(pagesLoadCount) as PageLoadCount;

  // Get the current page load count
  let count = +loadCountObject[pagePath];

  // Check if the load count for the current page is greater then 5
  if (count > 5) {
    // Reset the page load count
    loadCountObject[pagePath] = "0";

    // Update the pagesLoadCount record
    fs.writeFileSync(recordFilePath, JSON.stringify(loadCountObject));

    // Otherwise
  } else {
    // Increase the loadCount value for the current page
    loadCountObject[pagePath] = `${++count}`;

    // Update the pagesLoadCount record
    fs.writeFileSync(recordFilePath, JSON.stringify(loadCountObject));
  }

  // Return the count
  return count;
}
