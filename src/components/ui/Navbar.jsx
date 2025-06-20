"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "../ui/ui.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "@/redux/slices/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menu items data for consistency
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
      subItems: [
        { name: "Our Story", href: "/about/our-story" },
        {
          name: "University Success Story",
          href: "/about/university-success-story",
        },
        { name: "Our Team", href: "/about/our-team" },
        { name: "Contact Us", href: "/about/contact-us" },
      ],
    },
    {
      name: "Credit Courses and OSSD",
      href: "/credit-course-ossd/ossd-requirement",
      subItems: [
        {
          name: "OSSD Requirement",
          href: "/credit-course-ossd/ossd-requirement",
        },
        {
          name: "Available Courses",
          href: "/credit-course-ossd/available-courses",
          subItems: [
            {
              name: "Grade 9",
              href: "/credit-course-ossd/available-courses/grade-9",
            },
            {
              name: "Grade 10",
              href: "/credit-course-ossd/available-courses/grade-10",
            },
            {
              name: "Grade 11",
              href: "/credit-course-ossd/available-courses/grade-11",
            },
            {
              name: "Grade 12",
              href: "/credit-course-ossd/available-courses/grade-12",
            },
          ],
        },
        {
          name: "Learning Methods",
          href: "/credit-course-ossd/learning-methods",
          subItems: [
            {
              name: "Virtual Learning",
              href: "/credit-course-ossd/learning-methods/virtual-learning",
            },
            {
              name: "Online Learning",
              href: "/credit-course-ossd/learning-methods/online-learning",
            },
          ],
        },
        {
          name: "Admission Process",
          href: "/credit-course-ossd/admission-process",
        },
      ],
    },
    {
      name: "International Students for OSSD",
      href: "/international-students-ossd",
    },
    {
      name: "Tutoring",
      href: "/tutoring",
      subItems: [
        { name: "Regular Tutoring", href: "/tutoring/regular-tutoring" },
        { name: "STEM", href: "/tutoring/stem" },
      ],
    },
    {
      name: "PLC Training",
      href: "/plc-training",
      subItems: [
        {
          name: "PLC Allen Bradley Studio",
          href: "/plc-training/plc-allen-bradley-studio",
        },
        { name: "Delta PLC", href: "/plc-training/delta-plc" },
      ],
    },
    {
      name: "Tuition Fees",
      href: "/tution-fees",
    },
  ];

  // Render menu items recursively
  const renderMenuItems = (items, isMobile = false, depth = 0) => {
	return items.map((item) => (
		<MenuItem
			key={item.href}
			item={item}
			isMobile={isMobile}
			depth={depth}
		/>
	));
};

// Separate MenuItem component to handle hover state
const MenuItem = ({ item, isMobile, depth }) => {
	const [isOpen, setIsOpen] = useState(false);

	if (isMobile) {
		return (
			<li key={item.href}>
				<Link
					href={item.href}
					className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
					onClick={() => {
						setIsOpen(false); // close dropdown on click
					}}
				>
					{item.name}
				</Link>
				{item.subItems && (
					<ul className="p-2">
						{renderMenuItems(item.subItems, isMobile, depth + 1)}
					</ul>
				)}
			</li>
		);
	}
	return (
		<li
			className="relative group"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<Link
				href={item.href}
				className={`flex items-center gap-1 px-3 py-2 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f] ${
					depth > 0 ? "justify-between w-full" : ""
				}`}
			>
				{item.name}
				{item.subItems && (
					<FaAngleDown
						className={`transition-transform duration-300 ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				)}
			</Link>

			{item.subItems && (
				<ul
					className={`absolute z-50 min-w-[11rem] bg-white shadow-lg rounded-md text-black p-2 transition-all duration-200 ${
						isOpen ? "block" : "hidden"
					} ${depth === 0 ? "top-full left-0" : "top-0 left-full ml-0"}`}
				>
					{renderMenuItems(item.subItems, false, depth + 1)}
				</ul>
			)}
		</li>
	);
};


  return (
    <div className="fixed left-0 right-0 z-50">
      <div
        className={`navbar px-2 md:px-6 transition-all duration-300 ${
          scrolling
            ? "bg-white shadow-lg text-black lg:text-black"
            : "bg-white text-black lg:text-black"
        }`}
      >
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black sm:text-black"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
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
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[100vw] mx-auto p-2 shadow ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              {renderMenuItems(menuItems, true)}
            </ul>
          </div>

          <Link href="/" className="text-xl font-extrabold">
            <Image
              src="/images/academy-of-scholars-logo.png"
              width={140}
              height={50}
              alt="Academy of scholars logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {renderMenuItems(menuItems)}
          </ul>
        </div>

        <div className="navbar-end ">
          {currentUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src="/images/Profile_avatar_placeholder_large.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                <li key="name" className="mx-3 font-semibold">
                  {currentUser?.name}
                </li>
                <li key="email" className="mx-3 text-sm text-gray-600">
                  {currentUser?.email}
                </li>
                <hr className="my-3" />
                {currentUser && currentUser?.role === "admin" ? (
                  <li key="/admin">
                    <Link href="/admin/users" className="justify-between">
                      Admin Dashboard
                    </Link>
                  </li>
                ) : (
                  <li key="/student">
                    <Link href="/student/dashboard" className="justify-between">
                      Student Dashboard
                    </Link>
                  </li>
                )}

                <li key="/profile">
                  <Link href="/profile" className="justify-between">
                    Profile <span className="badge">New</span>
                  </Link>
                </li>
                <li key="/settings">
                  <Link href="/settings">Settings</Link>
                </li>
                <li key="/logout">
                  <button onClick={handleLogOut} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-white px-3 sm:px-5 me-4   "
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
