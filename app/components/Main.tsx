export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full min-h-[calc(100vh-5rem-2.5rem)] w-screen flex justify-center">
      <>{children}</>
    </main>
  );
}
