"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex items-center justify-around h-20 text-black">
      <Link href="/">
        <h1 className="text-4xl">DocuScribe Next</h1>
      </Link>
      <nav>
        {pathname === "/" && (
          <Link
            href="/addDocument"
            className="flex mt-2 border-none p-2 rounded bg-green-400 w-full text-center"
          >
            <PostAddIcon />
          </Link>
        )}
      </nav>
    </header>
  );
}
