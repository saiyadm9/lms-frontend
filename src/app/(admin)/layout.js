"use client";

import { useState } from "react";
import { userSignOut } from "@/redux/slices/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  LogOut,
  Home,
  Users,
  BookOpen,
  LayoutDashboard,
  Menu,
  ChevronLeft,
} from "lucide-react";
import Head from "next/head";

export default function AdminLayout({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        dispatch(userSignOut());
        router.push("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`${
            collapsed ? "w-20" : "w-72"
          } bg-gray-900 text-white p-4 flex flex-col shadow-lg transition-all duration-300 h-screen`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-4">
            {!collapsed && <h2 className="text-xl font-bold">Admin Panel</h2>}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-700 transition"
            >
              {collapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
            </button>
          </div>

          {/* Navigation - Scrollable */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            <nav className="flex flex-col gap-2">
              {[
                // { href: "/admin", label: "Dashboard", icon: LayoutDashboard },

                { href: "/admin/users", label: "Manage Users", icon: Users },
                // {
                //   href: "/admin/courses",
                //   label: "Manage Courses",
                //   icon: BookOpen,
                // },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <Icon size={20} />
                  {!collapsed && <span>{label}</span>}
                </Link>
              ))}
            </nav>
          </div>

          {/* User Info & Actions - Fixed at Bottom */}
          <div className="border-t border-gray-700 pt-4">
            {!collapsed && currentUser && (
              <div className="mb-4 bg-gray-800 p-3 rounded-lg text-center">
                <p className="font-semibold text-lg">{currentUser.name}</p>
                <p className="text-sm text-gray-400">{currentUser.email}</p>
              </div>
            )}

            <div className="space-y-2">
              <button
                onClick={handleLogOut}
                className="flex items-center justify-center gap-2 bg-red-600 p-3 rounded-lg hover:bg-red-700 transition w-full"
              >
                <LogOut size={20} />
                {!collapsed && <span>Logout</span>}
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition"
              >
                <Home size={20} />
                {!collapsed && <span>Browse as User</span>}
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </>
  );
}
