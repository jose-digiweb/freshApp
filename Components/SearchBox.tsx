// This should be a client component
"use client";

// Import dependencies
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * This function implements the SearchBox component
 */
export default function SearchBox() {
  // Initialize the query state
  const [query, setQuery] = useState("");

  // Get the router
  const router = useRouter();

  // A function to handle the submit event
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    // Prevent default browser behavior
    e.preventDefault();

    // Make sure we have a query
    if (!query) return;

    // Redirect the user to the search results page
    router.push(`/search?query=${query}`);

    // Empty the query
    setQuery("");
  };

  // Return the searchBox component
  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        type="text"
        placeholder="Search news..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="h-10 w-full flex-1 rounded-sm bg-transparent outline-none dark:text-orange-400"
      />

      <button
        type="submit"
        disabled={!query}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
