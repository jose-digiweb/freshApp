// This should be a client component
"use client";

// Import dependencies
import { ThemeProvider } from "next-themes";

/**
 * This function implements the theme provider component
 * @Note This patter allows us to include any client render providers
 *       such as (redux, or other state management) including the "ThemeProvider" in this case
 *       and use them in our "RootLayout" which is a server component by default.
 *       This is something that might change in the future when these providers
 *       update their code to use the new next.js 13 directives.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
