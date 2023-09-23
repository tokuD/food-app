import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'React Meals',
  description: 'React Meals is web app to order delicious food.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
