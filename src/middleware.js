import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname, searchParams } = request.nextUrl;
  const method = request.method;

  // -----------------------------
  // 1️⃣ PROTECTED PAGES
  // -----------------------------
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // -----------------------------
  // 2️⃣ AUTH PAGES SHOULD NOT BE AVAILABLE WHEN LOGGED IN
  // -----------------------------
  if (pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // -----------------------------
  // 3️⃣ PROTECTED API ROUTES (METHOD LEVEL)
  // -----------------------------
  const protectedRoutes = [
    {
      path: "/api/products",
      methods: ["POST", "PUT", "DELETE"], // only these methods need auth
    },
    {
      path: "/api/admin",
      methods: ["GET", "POST", "PUT", "DELETE"], // fully protected
    },
    {
      path: "/api/test",
      methods: ["GET"], // fully protected
    },
  ];

  for (const route of protectedRoutes) {
    if (pathname.startsWith(route.path) && route.methods.includes(method)) {
      if (!token) {
        return NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/:path*",
    "/api/:path*", // Important: include API routes for method filtering
  ],
};
