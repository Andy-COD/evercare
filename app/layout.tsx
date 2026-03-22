import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ever Care",
  description: "Ever Care is a home care agency that provides care to the elderly and the disabled.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png?v=20260322",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.png?v=20260322",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon-light.png?v=20260322",
    apple: "/images/favicon-light.png?v=20260322",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
