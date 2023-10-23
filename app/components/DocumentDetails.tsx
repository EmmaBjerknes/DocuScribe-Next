import { Document } from "../interfaces";
import parse from "html-react-parser";

interface Props {
  document: Document;
}

export default function DocumentDetails({ document }: Props) {
  const parsedContent = parse(document.content);

  return (
    <div className="w-1/2">
      <p>{document.title}:</p>
      <div
        style={{ backgroundColor: document.bgColor }}
        className="flex items-start flex-col gap-1 w-full text-base p-6 rounded-xl"
      >
        <p style={{ color: document.textColor }}>{parsedContent}</p>
      </div>
    </div>
  );
}
