import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <footer className="footer grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 1st Column: Logo, Description, Social Links */}
          <aside className="space-y-4">
            <Image
              src="/images/academy-of-scholars-logo.png"
              width={100}
              height={100}
              alt="Academy of scholars logo"
            />
            <p className="text-sm">
              <b>ACADEMY OF SCHOLARS</b> is dedicated to providing quality
              education and fostering academic excellence.
            </p>
            <nav className="flex gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </aside>

          {/* 2nd Column: Course Categories */}
          <nav>
            <h6 className="footer-title">Course Categories</h6>
            <Link
              href="/credit-course-ossd/available-courses/grade-9"
              className="link link-hover"
            >
              Grade 9
            </Link>
            <Link
              href="/credit-course-ossd/available-courses/grade-10"
              className="link link-hover"
            >
              Grade 10
            </Link>
            <Link
              href="/credit-course-ossd/available-courses/grade-11"
              className="link link-hover"
            >
              Grade 11
            </Link>
            <Link
              href="/credit-course-ossd/available-courses/grade-12"
              className="link link-hover"
            >
              Grade 12
            </Link>
          </nav>

          {/* 3rd Column: credit courses and Other Links */}
          <nav>
            <h6 className="footer-title">credit courses</h6>
            <Link href="/credit-course-ossd" className="link link-hover">
              Credit Courses & OSSD
            </Link>
            <Link
              href="/international-students-ossd"
              className="link link-hover"
            >
              International Students
            </Link>
            <Link
              href="/credit-course-ossd/admission-process"
              className="link link-hover"
            >
              Admission Process
            </Link>
            <Link
              href="/credit-course-ossd/tuition-fees"
              className="link link-hover"
            >
              Tuition & Fees
            </Link>
          </nav>

          {/* 4th Column: About Us and Related Links */}
          <nav>
            <h6 className="footer-title">About Us</h6>
            <Link href="/about/our-story" className="link link-hover">
              Our Story
            </Link>
            <Link href="/about/our-team" className="link link-hover">
              Our Team
            </Link>
            <Link href="/about/contact-us" className="link link-hover">
              Contact Us
            </Link>
            <Link
              href="/about/university-success-story"
              className="link link-hover"
            >
              University Success Story
            </Link>
          </nav>
        </footer>

        {/* Divider and Copyright Section */}
        <div className="divider divider-neutral"></div>
        <footer className="footer">
          <aside className="items-center">
            <p>
              <b>ACADEMY OF SCHOLARS</b> © {new Date().getFullYear()} - All
              right reserved
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
