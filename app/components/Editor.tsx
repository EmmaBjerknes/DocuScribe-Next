"use client";
import { useEffect, useRef, useState } from "react";
import { createDocument } from "../interfaces";
import BundledEditor from "../BundledEditor";

export default function TinyMCEEditor() {
  const titleRef = useRef<HTMLInputElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [docValues, setDocValues] = useState<createDocument>({
    title: "",
    content: "",
    bgColor: "white",
    textColor: "black",
    isDeleted: "false",
  });

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const onEditorChange = (content: string, editor: any) => {
    setDocValues((prevState) => ({
      ...prevState,
      content: content,
    }));
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocValues((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const onSubmit = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(docValues),
    };
    const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;

    try {
      const response = await fetch(apiURL, options);
      setShowPopup(true);
      window.location.reload();
      if (!response.ok) {
        throw new Error("No data was sent");
      }
    } catch (error) {
      console.log(Error, error);
    }
  };

  return (
    <>
      <input
        type="text"
        name="title"
        className="w-full h-5 p-2 outline-none border-none rounded text-black"
        placeholder="Title:"
        ref={titleRef}
        onChange={onTitleChange}
      />
      <BundledEditor
        apiKey={process.env.TINY_MCE}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "anchor",
            "searchreplace",
            "table",
            "wordcount",
          ],
          toolbar:
            "undo redo" +
            "bold italic forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat ",
        }}
        onEditorChange={onEditorChange}
      />
      <button
        type="button"
        onClick={onSubmit}
        disabled={titleRef.current?.value !== "" ? true : false}
        className="mt-2 border-none p-2 rounded w-full bg-green-500"
      >
        Save
      </button>
      {showPopup && <div>New document is created</div>}
    </>
  );
}
