import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const loginProtectedRoutes = ["/login"];
const logoutProtectedRoutes = ["/profile"];
const adminRoutes = ["/admin", "/register"];

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;
  const path = req.nextUrl.pathname;

  // If logged in and visiting login page, redirect to home
  if (token && loginProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  // If not logged in and visiting profile page, redirect to home
  if (!token && logoutProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  // Only allow admins to access /admin and /register
  if (adminRoutes.includes(path)) {
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
        return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
      }
    } catch (error) {
      console.error("Admin verification error:", error);
      return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/admin/:path*", "/profile"],
};
