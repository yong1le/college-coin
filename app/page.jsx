export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">College Coin</h1>
      <a
        className="rounded-xl bg-slate-200 px-3 py-2 transition-all hover:scale-110"
        href="/login"
      >
        Login/Sign Up
      </a>
    </div>
  );
}
