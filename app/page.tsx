import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>GeoBoost AI</h1>
      <p>Welcome to GeoBoost AI Platform</p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/sign-in">Sign In</Link>
        {" | "}
        <Link href="/sign-up">Sign Up</Link>
        {" | "}
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
