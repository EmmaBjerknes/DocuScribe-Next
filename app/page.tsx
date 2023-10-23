"use client";
import { useEffect, useState } from "react";
import DocumentListItem from "./components/DocumentListItem";
import { Document } from "./interfaces";
import DocumentDetails from "./components/DocumentDetails";

export default function Home() {
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
    }
    getDocuments();
  }, []);
  const handleClick = (document: Document) => {
    setSelectedDocument(document);
  };
  return (
    <div className="flex w-full">
      <div className="p-6 w-1/5 gap-6 mb-4 justify-evenly rounded cursor-pointer">
        {data.map((document, index) => (
          <DocumentListItem
            document={document}
            key={index}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="w-4/5 flex justify-center">
        {selectedDocument ? (
          <DocumentDetails document={selectedDocument} />
        ) : (
          <p>Click on a document to view it here</p>
        )}
      </div>
    </div>
  );
}
