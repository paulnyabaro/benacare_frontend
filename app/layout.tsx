import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affordable Clinical and Supportive Care - Home Care Services",
  description: "Looking for the best affordable home care services in Kenya? Look no further than Benacare. We are dedicated to providing top-quality clinical and supportive care to those in need, all from the comfort of their own homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
