// Import dependencies
import Link from "next/link";

// Import icons
import { NewspaperIcon } from "@heroicons/react/24/solid";

// Import components
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

/**
 * This function implements the Header component
 */
export default function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between py-10 px-5">
        {/* The logo icon */}
        <NewspaperIcon className="h-8 w-8 cursor-pointer" />

        {/* The site name */}
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl">Fresh News</h1>
        </Link>

        {/* The dark mode button */}
        <DarkModeButton />
      </div>

      {/* The nav bar */}
      <NavBar />

      {/* The search box */}
      <SearchBox />
    </header>
  );
}
