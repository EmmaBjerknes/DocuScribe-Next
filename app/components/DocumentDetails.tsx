import { Document } from "../interfaces";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

interface Props {
  document: Document;
}

export default function DocumentDetails({ document }: Props) {
  return (
    <div className="w-1/2">
      <p>{document.title}:</p>
      <div
        style={{ backgroundColor: document.bgColor }}
        className="flex items-start flex-col gap-1 w-full text-base p-6 rounded-xl"
      >
        <p style={{ color: document.textColor }}>{document.content}</p>
      </div>
      <div className="m-3 flex gap-1">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
}
