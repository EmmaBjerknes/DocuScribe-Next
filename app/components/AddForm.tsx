"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { createDocument } from "../interfaces";

export default function AddForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValues, setInputValues] = useState<createDocument>({
    title: "",
    content: "",
    bgColor: "white",
    textColor: "black",
    isDeleted: "false",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [value]: e.target.value,
    }));
  };

  const addDocument = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    };
    const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;
    try {
      const response = await fetch(apiURL, options);

      if (titleRef.current && contentRef.current) {
        titleRef.current.value = "";
        contentRef.current.value = "";
      }
      setShowPopup(true);
      if (!response.ok) {
        throw new Error("No data was sent");
      }
    } catch (error) {
      console.log(Error, error);
    }
  };

  return (
    <div className="w-full">
      <form className="flex items-start flex-col gap-1 w-full text-base p-6 bg-sky-300/50 rounded-xl">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="w-full h-1/2 p-2 outline-none border-none rounded text-black"
          placeholder="Title:"
          ref={titleRef}
        />
        <textarea
          name="content"
          id="content"
          onChange={handleChange}
          className="w-full p-2 outline-none border-none rounded  text-black h-48"
          placeholder="Write you thoughts here"
          ref={contentRef}
        ></textarea>
        <div className="flex self-center gap-4">
          <Link
            href="/"
            className="mt-2 border-none p-2 rounded bg-red-400 w-full text-center"
          >
            Exit
          </Link>
          <button
            type="button"
            onClick={addDocument}
            className="mt-2 border-none p-2 rounded w-full bg-green-500"
          >
            Save
          </button>
        </div>
        {showPopup && <div>New document is created</div>}
      </form>
    </div>
  );
}
