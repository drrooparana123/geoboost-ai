import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "GeoBoost AI",
  description: "AI powered platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
