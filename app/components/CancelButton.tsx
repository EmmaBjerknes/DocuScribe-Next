import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel?")) {
      router.back();
    }
  };
  return (
    <button
      onClick={handleCancel}
      type="button"
      className="mt-2 border-none p-2 rounded w-full bg-red-500"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
