"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Hide Breadcrumbs on Home Page
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-sm text-gray-600 mb-5 px-4 container mx-auto mt-[-40px] overflow-x-auto">
      <ul className="flex items-center space-x-2 whitespace-nowrap overflow-x-auto">
        <li>
          <Link href="/" className="hover:text-blue-600 flex items-center">
            <FaHome className="mr-1" /> Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="me-1">/</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold capitalize">
                  {decodeURIComponent(segment.replace(/-/g, " "))}
                </span>
              ) : (
                <Link href={path} className="hover:text-blue-600 capitalize">
                  {decodeURIComponent(segment.replace(/-/g, " "))}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
