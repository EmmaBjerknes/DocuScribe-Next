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
        className="flex flex-col flex-wrap w-56 p-2 gap-2 mb-4 cursor-pointer text-center bg-[#27c0e3] bg-opacity-30 rounded-xl shadow-md backdrop-blur-md border border-[rgba(167,173,234,0.41)] border-opacity-20"
      >
        <h3 className="text-xl font-bold">{document.title}</h3>
        <p>{formattedDate}</p>
      </div>
    </>
  );
}
