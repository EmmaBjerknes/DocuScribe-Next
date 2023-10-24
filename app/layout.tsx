import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "./components/Main";
import Header from "./components/Header";

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
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
