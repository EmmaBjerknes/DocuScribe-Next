"use client";
import { useEffect, useState } from "react";
import DocumentListItem from "./components/DocumentListItem";
import { Document } from "./interfaces";
import DocumentDetails from "./components/DocumentDetails";
import DeleteButton from "./components/Buttons/DeleteButton";
import EditLinkButton from "./components/Buttons/EditLinkButton";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  useEffect(() => {
    async function getDocuments() {
      const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;
      const response = await fetch(apiURL);
      const res = await response.json();
      setData(res.results);
      setLoading(false);
    }
    getDocuments();
  }, []);

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

  const handleClick = (document: Document) => {
    setSelectedDocument(document);
  };

  const nonDeletedDocs = data.filter(
    (document) => document.isDeleted === "false"
  );
  const sortedDocuments = nonDeletedDocs.reverse();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No document data found</p>;
  return (
    <div className="flex w-full gap-8 flex-row flex-wrap justify-evenly mt-8">
      <div className="p-6 rounded">
        <fieldset className="w-auto p-4">
          <legend className="text-lg">Your documents:</legend>
          {sortedDocuments.map((document, index) => (
            <DocumentListItem
              document={document}
              key={index}
              onClick={handleClick}
            />
          ))}
        </fieldset>
      </div>

      <div className="p-6 rounded w-1/2">
        {selectedDocument ? (
          <>
            <fieldset className=" flex justify-center w-auto p-4 flex-col gap-3">
              <legend className="text-lg">{selectedDocument.title}</legend>
              <DocumentDetails document={selectedDocument} />
              <div className="flex justify-end max-w-screen-md gap-8">
                <DeleteButton onClick={handleDelete} />
                <EditLinkButton href={`/${selectedDocument.id}`} />
              </div>
            </fieldset>
          </>
        ) : (
          <fieldset className=" flex justify-center w-auto p-4 ">
            <legend className="text-lg">
              Click on a document to view it here
            </legend>
          </fieldset>
        )}
      </div>
    </div>
  );
}
