// import dependencies
import revalidatePageCache from "./utils/revalidatePageCache";

/**
 * This is a middleware function that will intercept all the requests
 * for the routes specified in the config.matcher bellow
 */
export default async function middleware(req: MyNextApiRequest) {
  // Get the current path
  const path = req.nextUrl.pathname;

  /**
   * Call the revalidate endpoint
   * @Note The revalidated endpoint will keep tracking how many time
   *       the current page as been loaded and it will revalidate the cache
   *       only when the page as been loaded more then 5 times
   */
  const res = await revalidatePageCache(path);

  console.log("Res revalidating here: ", res);
}

// Only intercept the requests for the following routes
export const config = {
  matcher: [
    "/",
    "/general",
    "/business",
    "/entertainment",
    "/technology",
    "/sports",
    "/science",
    "/health",
  ],
};
