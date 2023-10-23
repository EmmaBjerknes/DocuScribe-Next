import { Document } from "../interfaces";

interface Props {
  document: Document;
  onClick: (document: Document) => void;
}

export default function DocumentListItem({ document, onClick }: Props) {
  const date = new Date(document.date);
  const formattedDate = date.toDateString();

  const handleClick = () => {
    onClick(document);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex bg-sky-300/50 p-2 gap-2 mb-4 justify-evenly rounded cursor-pointer"
      >
        <p>{formattedDate}</p>
        <h3>{document.title}</h3>
      </div>
    </>
  );
}
