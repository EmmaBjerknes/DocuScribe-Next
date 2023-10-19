"use client";
import { useEffect, useState } from "react";
import DocumentListItem from "./components/DocumentListItem";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getDocuments() {
      const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;
      const response = await fetch(apiURL);
      const res = await response.json();
      console.log(res);
      setData(res.results);
    }
    getDocuments();
  }, []);
  return (
    <div className="flex flex-col p-6">
      {data.map((document) => (
        <DocumentListItem document={document} key={document} />
      ))}
    </div>
  );
}
