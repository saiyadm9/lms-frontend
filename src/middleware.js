import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const loginProtectedRoutes = ["/login"];
const logoutProtectedRoutes = ["/profile"];
const adminOnlyRoutes = ["/admin", "/register"]; // explicitly list only admin-protected routes

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;
  const path = req.nextUrl.pathname;

  // Redirect logged-in users away from login page
  if (token && loginProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  // Redirect unauthenticated users away from protected logout-only routes
  if (!token && logoutProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  // Check if this route is strictly for admins (exact match)
  if (adminOnlyRoutes.includes(path) || path.startsWith("/admin")) {
    if (!token) {
      console.error("No token found for admin route");
      return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-admin`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error("JWT Verification Failed");
        return NextResponse.redirect(
          new URL("/", req.nextUrl.origin).toString()
        );
      }
    } catch (error) {
      console.error("Admin verification error:", error);
      return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
    }
  }

  return NextResponse.next();
}

// 🧠 Match admin routes, register, login, and profile
export const config = {
  matcher: ["/login", "/register", "/admin/:path*", "/profile"],
};
