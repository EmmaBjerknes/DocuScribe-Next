/* Working on it

"use client";
import React, { createContext, useState, useEffect } from "react";

interface ContextValue {
  documents: Document[];
}

interface Document {
  id: number;
  title: string;
  content: string;
  bgColor: string;
  textColor: string;
  date: string;
  isDeleted: string;
}

interface Props {
  children: React.ReactNode;
}

export const DocumentContext = createContext<ContextValue>({
  documents: [],
});

export default function DocumentProvider({ children }: Props) {
  const [documents, setDocuments] = useState<Document[]>([]);

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}
*/
