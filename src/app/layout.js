import "./globals.css"
import { Navbar } from "@/components/navbar"
import SessionProvider from "@/components/session-provider"

export const metadata = {
  title: "AuthApp - Secure Authentication",
  description: "A modern authentication system built with Next.js, Prisma, and NextAuth.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
