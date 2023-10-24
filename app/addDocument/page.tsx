import Editor from "../components/Editor";

export default function addDocument() {
  return (
    <div className="w-3/4 flex flex-col gap-4 mt-6">
      <h2>Create a new document:</h2>
      <Editor />
    </div>
  );
}
