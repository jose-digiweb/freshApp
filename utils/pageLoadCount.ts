// Import dependencies
import fs from "fs";

/**
 * This function implements the logic to keep tracking
 * of the load count for a specific page
 * @param string    The page path
 * @returns number  The current load count
 */
export default function pageLoadCount(path: Path) {
  // Get the pagesLoadCount record
  const pagesLoadCount = fs.readFileSync("./pagesLoadCount.json", "utf-8");

  // Parse the pagesLoadCount data to a javascript object
  const loadCountObject = JSON.parse(pagesLoadCount) as PageLoadCount;

  // Get the current page load count
  let count = +loadCountObject[path];

  // Check if the load count for the current page is greater then 5
  if (count > 5) {
    // Reset the page load count
    loadCountObject[path] = "0";

    // Update the pagesLoadCount record
    fs.writeFileSync("./pagesLoadCount.json", JSON.stringify(loadCountObject));

    // Otherwise
  } else {
    // Increase the loadCount value for the current page
    loadCountObject[path] = `${++count}`;

    // Update the pagesLoadCount record
    fs.writeFileSync("./pagesLoadCount.json", JSON.stringify(loadCountObject));
  }

  // Return the count
  return count;
}
