import { currentUser } from "@clerk/nextjs";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Welcome {user?.firstName}</p>
    </main>
  );
}
