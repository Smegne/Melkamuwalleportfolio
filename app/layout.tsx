import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Melkamu Wale | Graphics Designer & Video Editor",
  description:
    "Creative portfolio of Melkamu Wale - Graphics Designer & Video Editor specializing in branding, motion graphics, and visual storytelling.",
  openGraph: {
    title: "Melkamu Wale | Graphics Designer & Video Editor",
    description: "Creative portfolio of Melkamu Wale - Graphics Designer & Video Editor",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-body antialiased`}>{children}</body>
    </html>
  )
}
