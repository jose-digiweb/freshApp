// This should be a client component
"use client";

// Import dependencies
import Link from "next/link";

// The props type definition
type Props = {
  category: string;
  isActive: boolean;
};

/**
 * This function implements the NavLink component
 */
export default function NavLink({ category, isActive }: Props) {
  // Return the link component
  return (
    <Link
      href={`/${category}`}
      className={`nav-link ${
        isActive
          ? "text-lg font-bold underline decoration-orange-400 underline-offset-4"
          : ""
      }`}
    >
      {category}
    </Link>
  );
}
