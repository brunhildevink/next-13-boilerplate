import './globals.css';
import { Navbar } from '@/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-8 py-4 flex flex-col container m-auto h-screen">
        <Navbar />
        <main className="py-4 flex flex-col grow space-x-4">{children}</main>
        <footer className="flex flex-col align-center justify-center">
          <a href="https://github.com/brunhildevink" className="link link-hover text-center">
            My Github
          </a>
        </footer>
      </body>
    </html>
  );
}
