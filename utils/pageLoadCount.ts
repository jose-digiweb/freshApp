// Import dependencies
import fs from "fs";
// import path from "path";

/**
 * This function implements the logic to keep tracking
 * of the load count for a specific page
 * @param string    The page path
 * @returns number  The current load count
 */
export default function pageLoadCount(pagePath: Path) {
  // Get the path to the file
  //   const pp = path.resolve("pagesLoadCount.json");
  const pp = "/tmp/pagesLoadCount.json";

  fs.writeFileSync(
    pp,
    JSON.stringify({
      "/": "4",
      "/general": "3",
      "/business": "2",
      "/entertainment": "2",
      "/technology": "4",
      "/sports": "4",
      "/science": "4",
      "/health": "5",
    })
  );

  // Get the pagesLoadCount record
  const pagesLoadCount = fs.readFileSync(pp, "utf-8");

  // Parse the pagesLoadCount data to a javascript object
  const loadCountObject = JSON.parse(pagesLoadCount) as PageLoadCount;

  // Get the current page load count
  let count = +loadCountObject[pagePath];

  // Check if the load count for the current page is greater then 5
  if (count > 5) {
    // Reset the page load count
    loadCountObject[pagePath] = "0";

    // Update the pagesLoadCount record
    fs.writeFileSync(pp, JSON.stringify(loadCountObject));

    // Otherwise
  } else {
    // Increase the loadCount value for the current page
    loadCountObject[pagePath] = `${++count}`;

    // Update the pagesLoadCount record
    fs.writeFileSync(pp, JSON.stringify(loadCountObject));
  }

  // Return the count
  return count;
}
