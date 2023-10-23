"use client";
import { useEffect, useRef, useState } from "react";
import { createDocument } from "../interfaces";
import BundledEditor from "../BundledEditor";
import { Document } from "../interfaces";

export default function TinyMCEEditor({
  document,
}: {
  document: Document | undefined;
}) {
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
    if (document) {
      setDocValues({
        title: document.title,
        content: document.content,
        bgColor: "white",
        textColor: "black",
        isDeleted: "false",
      });
    }
  }, [document]);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const onEditorChange = (content: string) => {
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

  const onEdit = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...docValues,
        id: document?.id,
      }),
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
    <div>
      {docValues.content ? (
        <>
          <input
            type="text"
            name="title"
            className="w-full h-5 p-2 outline-none border-none rounded text-black"
            placeholder={docValues.title}
            ref={titleRef}
            onChange={onTitleChange}
          />
          <BundledEditor
            apiKey={process.env.TINY_MCE}
            initialValue={docValues.content}
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
            onClick={onEdit}
            className="mt-2 border-none p-2 rounded w-full bg-green-500"
          >
            Save
          </button>
          {showPopup && <div>SAVED!</div>}
        </>
      ) : (
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
      )}
    </div>
  );
}
