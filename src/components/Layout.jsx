export default function Layout({ children }) {
  return (
    <div>
      <div className="min-h-screen bg-black text-white">
        <main className="max-w-4xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
