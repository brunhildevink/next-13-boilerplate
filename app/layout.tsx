import './globals.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container m-auto">
        <div className="navbar bg-base-100">
          <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link href="/ships" className="btn btn-ghost normal-case text-xl">Ships</Link>
          <Link href="/rockets" className="btn btn-ghost normal-case text-xl">Rockets</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
