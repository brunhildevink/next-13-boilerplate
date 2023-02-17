import "./globals.css";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col container m-auto h-screen">
        <Navbar />
        <main className="flex flex-col grow space-x-4">{children}</main>
      </body>
    </html>
  );
}
