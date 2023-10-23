"use client";
import { useState, useEffect } from "react";
import { Document } from "../interfaces";
import Editor from "../components/Editor";

interface OneDoc {
  results: Document[] | null;
}

export default function DocumentPage({ params }: { params: { id: number } }) {
  const [data, setData] = useState<Document>();

  useEffect(() => {
    async function getDocuments() {
      const apiURL = `${process.env.NEXT_PUBLIC_URL}/api/documents`;
      const response = await fetch(apiURL);
      const res: OneDoc = await response.json();

      if (res && res.results) {
        const param = Number(params.id);
        const x = res.results.find((doc) => doc.id === param);
        setData(x);
      }
    }
    getDocuments();
  }, [params.id]);

  return (
    <div>
      <Editor document={data} />
    </div>
  );
}
