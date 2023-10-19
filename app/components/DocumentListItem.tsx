import Link from "next/link";
import { Document } from "../interfaces";

interface Props {
  document: Document;
}

export default function DocumentListItem({ document }: Props) {
  return (
    <Link href={`/${document.id}`}>
      <div className="flex bg-sky-300/50 p-2 gap-2 mb-4 justify-evenly rounded">
        <h3>{document.title}</h3>
        <p>{document.date}</p>
      </div>
    </Link>
  );
}
