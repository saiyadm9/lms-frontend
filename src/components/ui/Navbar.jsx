"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 z-50 mx-2 md:mx-8">
      <div
        className={`navbar container mx-auto px-2 md:px-6 transition-all duration-300 ${
          scrolling
            ? "bg-[#1E40AF] shadow-lg text-white mt-5"
            : "bg-transparent text-black lg:text-white"
        }`}
        style={{ borderRadius: "0.5rem" }}
      >
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white sm:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/credit-courses"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  Credit Courses & OSSD
                </Link>
              </li>
              <li>
                <Link
                  href="/tutoring"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  Tutoring
                </Link>
                <ul className="p-2">
                  <li>
                    <Link
                      href="/tutoring/regular-tutoring"
                      className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                    >
                      Regular Tutoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tutoring/stem"
                      className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                    >
                      STEM
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/international-students"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  International Students
                </Link>
              </li>
              <li>
                <Link
                  href="/core-members"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  Core Members
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className=" text-xl font-extrabold">
            <Image
              src="/images/logo.jpg"
              width={80}
              height={50}
              alt="Academy of scholars logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f] "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/credit-courses"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                Credit Courses & OSSD
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/tutoring"
                className="flex items-center gap-1 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                Tutoring
                <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <ul className="absolute left-0 mt-[2.2rem] hidden w-52 p-2 bg-white rounded text-black shadow-lg group-hover:block">
                <li>
                  <Link
                    href="/tutoring/regular-tutoring"
                    className="hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]"
                  >
                    Regular Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutoring/stem"
                    className="hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]"
                  >
                    STEM
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/international-students"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                International Students
              </Link>
            </li>
            <li>
              <Link
                href="/core-members"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                Core Members
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          <Link
            href="/login"
            className="btn btn-accent px-3 sm:px-5 me-4 btn-sm lg:btn-md  "
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="btn btn-warning px-3 sm:px-5 me-4 btn-sm lg:btn-md hidden md:btn"
          >
            Register
          </Link>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
