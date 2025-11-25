import Link from "next/link"
import { MdArrowForward } from "react-icons/md"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to AuthApp</h1>
          <p className="text-xl text-gray-600 mb-8">A secure and modern authentication system built with Next.js</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Get Started
              <MdArrowForward />
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
