// Import the css global
import "../styles/globals.css";

// Import components
import Header from "../Components/Header";
import Providers from "../Components/Providers";

/**
 * This function implements the RootLayout component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900">
        <Providers>
          <Header />
          <main className="mx-auto max-w-6xl">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
