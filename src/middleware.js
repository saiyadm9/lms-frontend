import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const loginProtectedRoutes = ["/login"];
const logoutProtectedRoutes = ["/profile"];

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;
  const path = req.nextUrl.pathname;

  // If logged in and visiting login page, redirect to home
  if (token && loginProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // If not logged in and visiting profile page, redirect to home
  if (!token && logoutProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // Check if route is an admin route
  const isAdminRoute = path.startsWith("/admin");

  if (isAdminRoute) {
    if (!token) {
      console.error("No token found for admin route");
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
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
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
      }
    } catch (error) {
      console.error("Admin verification error:", error);
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*", "/profile"],
};
