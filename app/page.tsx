import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 GeoBoost AI</h1>
      <p>Phase 1 running successfully.</p>

      <div style={{ marginTop: 20 }}>
        <Link href="/sign-in">Sign In</Link>
        {" | "}
        <Link href="/sign-up">Sign Up</Link>
        {" | "}
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
