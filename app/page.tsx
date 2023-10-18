import DocumentListItem from "./components/DocumentListItem";

export default function Home() {
  const documents = [
    {
      id: 1,
      title: "First post",
      content: "herpa derpa merpa",
      bgColor: "red",
      textColor: "white",
      date: "2023-10-18",
      isDeleted: false,
    },
    {
      id: 2,
      title: "Second post",
      content: "merpa herpa derpa ",
      bgColor: "blue",
      textColor: "green",
      date: "2023-10-10",
      isDeleted: false,
    },
  ];
  return (
    <div className="flex flex-col p-6">
      {documents.map((document) => (
        <DocumentListItem document={document} key={document.id} />
      ))}
    </div>
  );
}
