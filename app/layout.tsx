import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocuScribe Next",
  description: "A document management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* header */}
      {/* main */}
      <body className={inter.className}>{children}</body>
      {/* footer */}
    </html>
  );
}
