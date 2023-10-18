import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-around h-20">
      <Link href="/">
        <h1 className="text-4xl">DocuScribe Next</h1>
      </Link>
      <nav>
        <Link href="/addDocument" className="border rounded p-2">
          ADD
        </Link>
      </nav>
    </header>
  );
}
