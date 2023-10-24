export default function PopupMsg() {
  return (
    <div className="relative inline-block cursor-pointer select-none">
      <button className="invisible w-40 text-white text-center rounded-md absolute -ml-20 p-1 z-10 bottom-2 left-2 bg-red-300">
        Saved
      </button>
    </div>
  );
}
