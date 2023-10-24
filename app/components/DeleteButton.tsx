import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <DeleteIcon
      className="bg-red-200 rounded !h-auto p-1 !w-8"
      onClick={onClick}
    />
  );
};

export default DeleteButton;
