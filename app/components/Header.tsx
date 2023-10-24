"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PostAddIcon from "@mui/icons-material/PostAdd";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex justify-between items-center z-10 px-4 h-20 text-black bg-white bg-opacity-20 shadow-md backdrop-blur-md">
      <Link href="/">
        <h1 className="text-4xl">DocuScribe Next</h1>
      </Link>
      <nav>
        {pathname === "/" && (
          <Link
            href="/addDocument"
            className="flex mt-2 border-none p-2 rounded bg-yellow-200 w-full text-center"
          >
            <span className="pr-1">Add new</span>
            <PostAddIcon />
          </Link>
        )}
      </nav>
    </header>
  );
}
