// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Toshel Construction",
  description: "Building Your Dreams, One Project at a Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20"> {/* ⬅️ Push main content below the fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
