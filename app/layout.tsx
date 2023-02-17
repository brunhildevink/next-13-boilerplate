import "./globals.css";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-8 py-4 flex flex-col container m-auto h-screen">
        <Navbar />
        <main className="py-4 flex flex-col grow space-x-4">{children}</main>
      </body>
    </html>
  );
}
