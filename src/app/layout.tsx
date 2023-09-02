import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'dummy login page',
  description: 'Dummy login page for practice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
