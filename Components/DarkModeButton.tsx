// This should be a client component
"use client";

// Import dependencies
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

/**
 * This function implements the DarkModeButton component
 */
export default function DarkModeButton() {
  // Initialize state
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // The useEffect will help us know
  // when this component is mounted on the page
  useEffect(() => {
    setMounted(true);
  }, []);

  // Make sure the component is mounted
  // Otherwise might have inconsistencies with the server
  if (!mounted) return null;

  // Get the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Return the component
  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-8 w-8 cursor-pointer text-yellow-500"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-8 w-8 cursor-pointer text-gray-900"
        />
      )}
    </div>
  );
}
