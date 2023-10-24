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
      className="inline-block font-medium px-2 py-1 text-black mx-0.3 my-0.3 rounded-full text-center transition-all duration-200 bg-red-500 shadow-md backdrop-blur-md hover:bg-red-400"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
