"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createDocument } from "../interfaces";
import { Document } from "../interfaces";
import BundledEditor from "../BundledEditor";
import PopupMsg from "./PopupMsg";
import CancelButton from "./Buttons/CancelButton";
import { SaveEditButton, SaveNewButton } from "./Buttons/SaveButtons";

export default function TinyMCEEditor({
  document,
}: {
  document?: Document | undefined;
}) {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [docValues, setDocValues] = useState<createDocument>({
    title: "",
    content: "",
    isDeleted: "false",
  });

  useEffect(() => {
    if (document) {
      setDocValues({
        title: document.title,
        content: document.content.toString(),
        isDeleted: "false",
      });
    }
  }, [document]);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        router.back();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [router, showPopup]);

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

      if (!response.ok) {
        throw new Error("No data was sent");
      }
    } catch (error) {
      console.log(Error, error);
    }
  };

  return (
    <div className="p-4 text-center bg-[#374fc7] bg-opacity-10 rounded-xl shadow-md backdrop-blur-md border border-[rgba(167,173,234,0.41)] border-opacity-20">
      {document ? (
        <>
          <input
            type="text"
            name="title"
            className="w-full h-5 p-2 outline-none border-none rounded text-black mb-4
            "
            placeholder={docValues.title}
            ref={titleRef}
            onChange={onTitleChange}
          />
          <BundledEditor
            apiKey={process.env.TINY_MCE}
            value={docValues.content}
            init={{
              height: 500,
              menubar: true,
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
                "undo redo | blocks | " +
                "bold italic forecolor backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat ",
            }}
            onEditorChange={onEditorChange}
          />
          <div className="flex gap-16 justify-center mt-8">
            <CancelButton />
            <SaveEditButton onEdit={onEdit} />
          </div>
          {showPopup && <PopupMsg show={showPopup} />}
        </>
      ) : (
        <>
          <input
            type="text"
            name="title"
            className="w-full h-5 p-2 outline-none border-none rounded text-black mb-4
            "
            placeholder="Title:"
            ref={titleRef}
            onChange={onTitleChange}
          />
          <BundledEditor
            apiKey={process.env.TINY_MCE}
            initialValue=""
            init={{
              height: 500,
              menubar: true,
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
                "undo redo | blocks | " +
                "bold italic forecolor backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat ",
            }}
            onEditorChange={onEditorChange}
          />
          <div className="flex gap-16 justify-center mt-8">
            <CancelButton />
            <SaveNewButton
              onSubmit={onSubmit}
              content={docValues.content}
              disabled={docValues.content === ""}
            />
          </div>
          {showPopup && <PopupMsg show={showPopup} />}
        </>
      )}
    </div>
  );
}
