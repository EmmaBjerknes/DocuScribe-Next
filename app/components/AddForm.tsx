import Link from "next/link";

export default function AddForm() {
  return (
    <div className="w-full">
      <form className="flex items-start flex-col gap-1 w-full text-base p-6 bg-sky-300/50 rounded-xl">
        <label className="mt-3">Title:</label>
        <input
          type="text"
          name="title"
          className="w-full h-1/2 p-2 outline-none border-none rounded text-black"
        />
        <label>Text:</label>
        <textarea
          name="content"
          id="content"
          className="w-full p-2 outline-none border-none rounded  text-black h-48"
        ></textarea>
        <div className="flex self-center gap-4">
          <Link
            href="/"
            className="mt-2 border-none p-2 rounded bg-red-400 w-full text-center"
          >
            Exit
          </Link>
          <button
            type="submit"
            className="mt-2 border-none p-2 rounded w-full bg-green-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
