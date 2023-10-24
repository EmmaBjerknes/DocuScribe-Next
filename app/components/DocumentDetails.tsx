import { Document } from "../interfaces";
import parse from "html-react-parser";

interface Props {
  document: Document;
}

export default function DocumentDetails({ document }: Props) {
  const parsedContent = parse(document.content);

  return (
    <div className="max-w-screen-md bg-slate-100">
      <div className="flex items-start flex-col gap-1 w-2/4 text-base p-6 rounded-xl">
        <div>{parsedContent}</div>
      </div>
    </div>
  );
}
