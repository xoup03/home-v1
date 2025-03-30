import { DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adjust weights as needed
});

export const metadata = {
  title: "Xoup",
  description: "Restaurant Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-dm-sans antialiased">{children}</body>
    </html>
  );
}
