"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stock Search App",
  description: "Search and view stock details with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <QueryClientProvider client={queryClient}>
          <header className="p-4 bg-blue-600 text-white">
            <nav className="flex space-x-4">
              <a href="/search" className="hover:underline">
                Search
              </a>
            </nav>
          </header>
          <main className="p-6">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
