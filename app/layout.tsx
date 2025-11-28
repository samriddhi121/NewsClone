import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hindustan Times - Breaking News in Hindi",
  description: "Latest Hindi News, Breaking News, Live Updates on Politics, Sports, Business, and Entertainment - Hindustan Times",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className="bg-light-gray">
        {children}
      </body>
    </html>
  );
}
