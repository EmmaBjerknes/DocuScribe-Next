export default function DocumentPage({ params }: { params: { id: number } }) {
  return <div>{params.id}</div>;
}
