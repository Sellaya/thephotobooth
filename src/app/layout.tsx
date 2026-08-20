import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Photo Booth Company | Vintage Photo Booth Rentals",
  description:
    "The Photo Booth Company: vintage-style photo booth rentals for weddings, brand activations, and parties, serving all across Pakistan and the UAE. Book your date today.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper-50 text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
