import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const loginProtectedRoutes = ["/login", "/register"];
const logoutProtectedRoutes = ["/profile"];
const adminRoutes = ["/admin"];

export async function middleware(req) {
  // Await the cookies() function
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const path = req.nextUrl.pathname;

  if (token && loginProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  if (!token && logoutProtectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  if (adminRoutes.includes(path)) {
    if (!token) {
      console.error("No token found for admin route");
      return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
    }

    const response = await fetch(
      new URL(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-admin`,
        req.nextUrl.origin
      ),
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
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/admin/:path*", "/profile"],
};
