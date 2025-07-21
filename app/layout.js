"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
