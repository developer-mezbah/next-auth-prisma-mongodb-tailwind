import Link from "next/link"
import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Sign Up - AuthApp",
}

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h1>

          <AuthForm mode="signup" />

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
