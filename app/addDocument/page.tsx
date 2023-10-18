import AddForm from "../components/AddForm";

//new url for adding a document
export default function addDocument() {
  return (
    <div className="w-3/4 flex flex-col gap-4 m-4">
      <h2>Create a new document:</h2>
      <AddForm />
    </div>
  );
}
