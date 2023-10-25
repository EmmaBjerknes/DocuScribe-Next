interface PopupProps {
  show: boolean;
}

export default function PopupMsg({ show }: PopupProps) {
  return (
    <div
      className={` p-12 text-xl bg-[#27e36c] bg-opacity-80 rounded-xl shadow-md backdrop-blur-md border border-[rgba(61,176,93,0.41)] border-opacity-20
      fixed top-1/2 left-1/2 ${show ? "animate-custom-ping" : ""}`}
    >
      SAVED!
    </div>
  );
}
