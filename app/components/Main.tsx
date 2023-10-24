"use client";
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full min-h-[calc(100vh-5rem)] flex justify-center text-black">
      <>{children}</>
    </main>
  );
}
