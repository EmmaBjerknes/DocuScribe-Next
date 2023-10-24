interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button
      className="inline-block font-medium px-2 py-1 border border-[#374fc7] border-opacity-10 text-black mx-0.3 my-0.3 rounded-full text-center transition-all duration-200 bg-[#374fc7] bg-opacity-10 shadow-md backdrop-blur-md hover:bg-red-500"
      onClick={onClick}
    >
      DELETE
    </button>
  );
};

export default DeleteButton;
