import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Welcome {user?.firstName}</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
