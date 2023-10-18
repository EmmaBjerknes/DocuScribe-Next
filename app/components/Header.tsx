"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex items-center justify-around h-20 text-black">
      <Link href="/">
        <h1 className="text-4xl">DocuScribe Next</h1>
      </Link>
      <nav>
        {pathname !== "/addDocument" && (
          <Link
            href="/addDocument"
            className="mt-2 border-none p-2 rounded bg-green-400 w-full text-center"
          >
            ADD
          </Link>
        )}
      </nav>
    </header>
  );
}
