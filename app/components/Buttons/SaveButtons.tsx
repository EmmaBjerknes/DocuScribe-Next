interface SaveEditButtonProps {
  onEdit: () => void;
}
interface SaveNewButtonProps {
  onSubmit: () => void;
  content: string;
  disabled: boolean;
}

export const SaveEditButton = ({ onEdit }: SaveEditButtonProps) => {
  return (
    <button
      type="button"
      onClick={onEdit}
      className="inline-block font-medium px-2 py-1 border border-green-500  text-black mx-0.3 my-0.3 rounded-full text-center transition-all duration-200 bg-green-500 shadow-md backdrop-blur-md hover:bg-green-400"
    >
      Save
    </button>
  );
};

export const SaveNewButton = ({
  onSubmit,
  content,
  disabled,
}: SaveNewButtonProps) => {
  const buttonClass = disabled
    ? "bg-gray-400 border-grey-400"
    : "bg-green-500 border-green-500 hover:bg-green-400";
  return (
    <button
      type="button"
      onClick={onSubmit}
      disabled={content === ""}
      className={`inline-block font-medium px-2 py-1 border ${buttonClass} text-black mx-0.3 my-0.3 rounded-full text-center border-[rgba(167,173,234,0.41)] border-opacity-20 transition-all duration-200 shadow-md backdrop-blur-md `}
    >
      Save
    </button>
  );
};
