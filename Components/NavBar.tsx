// This should be a client component
"use client";

// Import dependencies
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { categories } from "../utils/constants";

/**
 * This function implements the NavBar component
 */
export default function NavBar() {
  // Get the current pathname
  const pathname = usePathname();

  // A function to check if the link is active
  const isActive = (path: string): boolean => {
    return pathname?.split("/").pop() === path;
  };

  // Return a list of nav links
  return (
    <nav className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 border-b pb-5 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}
