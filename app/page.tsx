"use client";
import { useEffect, useState } from "react";
import DocumentListItem from "./components/DocumentListItem";
import { Document } from "./interfaces";
import DocumentDetails from "./components/DocumentDetails";
import Link from "next/link";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteButton from "./components/DeleteButton";

export default function Home() {
  const [data, setData] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  const handleDelete = () => {
    if (selectedDocument) {
      if (window.confirm("Are you sure you want to delete this document?")) {
        selectedDocument.isDeleted = "true";
        setSelectedDocument({ ...selectedDocument });
        deleteDocument();
      }
    }
  };

  const deleteDocument = async () => {
    if (selectedDocument) {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...selectedDocument,
          isDeleted: "true",
          id: selectedDocument.id,
        }),
      };
      const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;

      try {
        const response = await fetch(apiURL, options);
        window.location.reload();

        if (!response.ok) {
          throw new Error("No data was sent");
        }
      } catch (error) {
        console.log(Error, error);
      }
    }
  };

  useEffect(() => {
    async function getDocuments() {
      const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;
      const response = await fetch(apiURL);
      const res = await response.json();
      setData(res.results);
    }
    getDocuments();
  }, []);

  const handleClick = (document: Document) => {
    setSelectedDocument(document);
  };

  const nonDeletedDocs = data.filter(
    (document) => document.isDeleted === "false"
  );

  return (
    <div className="flex w-full gap-8 flex-row flex-wrap justify-evenly">
      <div className="p-6 rounded cursor-pointer">
        <fieldset className="w-auto p-4 border-solid border">
          <legend>Your documents:</legend>
          {nonDeletedDocs.map((document, index) => (
            <DocumentListItem
              document={document}
              key={index}
              onClick={handleClick}
            />
          ))}
        </fieldset>
      </div>

      <div className="p-6 rounded cursor-pointer w-1/2">
        {selectedDocument ? (
          <>
            <fieldset className=" flex justify-center w-auto p-4 border-solid border flex-col gap-3">
              <legend>{selectedDocument.title}</legend>
              <DocumentDetails document={selectedDocument} />
              <div className="flex justify-end gap-8">
                <Link
                  href={`/${selectedDocument.id}`}
                  className="bg-green-200 w-8 rounded p-1"
                >
                  <EditNoteIcon />
                </Link>
                <DeleteButton onClick={handleDelete} />
              </div>
            </fieldset>
          </>
        ) : (
          <fieldset className=" flex justify-center w-auto p-4 border-solid border">
            <legend>Click on a document to view it here</legend>
          </fieldset>
        )}
      </div>
    </div>
  );
}
