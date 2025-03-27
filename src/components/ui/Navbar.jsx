'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaAngleDown, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import '../ui/ui.css'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut } from '@/redux/slices/userSlice'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentUser } = useSelector((state) => state.user)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signout`,
        {},
        { withCredentials: true }
      )

      if (response.status === 200) {
        dispatch(userSignOut())
        router.push('/')
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className='fixed left-0 right-0 z-50'>
      <div
        className={`navbar px-2 md:px-6 transition-all duration-300 ${
          scrolling
            ? 'bg-white shadow-lg text-black lg:text-black'
            : 'bg-white text-black lg:text-black'
        }`}
      >
        <div className='navbar-start'>
          {/* Mobile Menu */}
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden text-black sm:text-black'
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className='h-5 w-5' />
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[100vw] mx-auto p-2 shadow ${
                isMobileMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  href='/'
                  className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              {/* About Us */}
              <li>
                <Link
                  href='/about'
                  className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link
                      href='/about/our-story'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about/university-success-story'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      University Success Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about/our-team'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about/contact-us'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              {/* credit courses and OSSD */}
              <li>
                <Link
                  href='/credit-course-ossd/ossd-requirement'
                  className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                  onClick={toggleMobileMenu}
                >
                  Credit Courses and OSSD
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link
                      href='/credit-course-ossd/ossd-requirement'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      OSSD Requirement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/available-course'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Available Course
                    </Link>
                    <ul className='p-2'>
                      <li>
                        <Link
                          href='/credit-course-ossd/available-course/grade-9'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Grade 9
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/credit-course-ossd/available-course/grade-10'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Grade 10
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/credit-course-ossd/available-course/grade-11'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Grade 11
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/credit-course-ossd/available-course/grade-12'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Grade 12
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/learning-methods'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Learning Methods
                    </Link>
                    <ul className='p-2'>
                      <li>
                        <Link
                          href='/credit-course-ossd/learning-methods/virtual-learning'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Virtual Learning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/credit-course-ossd/learning-methods/online-learning'
                          className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                          onClick={toggleMobileMenu}
                        >
                          Online Learning
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/admission-process'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/tuition-fees'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Tuition & Fees
                    </Link>
                  </li>
                </ul>
              </li>
              {/* International Students for OSSD */}
              <li>
                <Link
                  href='/international-students-ossd'
                  className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                  onClick={toggleMobileMenu}
                >
                  International Students for OSSD
                </Link>
              </li>
              {/* Tutoring */}
              <li>
                <Link
                  href='/tutoring'
                  className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                  onClick={toggleMobileMenu}
                >
                  Tutoring
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link
                      href='/tutoring/regular-tutoring'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Regular Tutoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/tutoring/stem'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      STEM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/tutoring/fees-admission'
                      className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
                      onClick={toggleMobileMenu}
                    >
                      Fees & Admission
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <Link href='/' className='text-xl font-extrabold'>
            <Image
              src='/images/academy-of-scholars.png'
              width={140}
              height={50}
              alt='Academy of scholars logo'
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link
                href='/'
                className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f] '
              >
                Home
              </Link>
            </li>
            {/* About Us */}
            <li className='group relative'>
              <Link
                href='/about'
                className='flex items-center gap-1 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
              >
                About Us
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-[2.2rem] hidden w-52 p-2 bg-white rounded text-black shadow-lg group-hover:block'>
                <li>
                  <Link
                    href='/about/our-story'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about/university-success-story'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    University Success Story
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about/our-team'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about/contact-us'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
            {/* credit courses and OSSD */}
            <li className='group relative'>
              <Link
                href='/credit-course-ossd/ossd-requirement'
                className='flex items-center gap-1 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
              >
                Credit courses and OSSD
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-[2.2rem] hidden w-52 p-2 bg-white rounded text-black shadow-lg group-hover:block'>
                <li>
                  <Link
                    href='/credit-course-ossd/ossd-requirement'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    OSSD Requirement
                  </Link>
                </li>
                <li className='navArrow relative'>
                  <Link
                    href='/credit-course-ossd/available-course'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Available Course
                    <FaAngleDown className='transition-transform duration-300 navArrow-rotate' />
                  </Link>
                  <ul className='absolute left-[90%] hidden credit-course-dropdown w-52 p-2 bg-white rounded text-black'>
                    <li>
                      <Link
                        href='/credit-course-ossd/available-course/grade-9'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Grade 9
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/credit-course-ossd/available-course/grade-10'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Grade 10
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/credit-course-ossd/available-course/grade-11'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Grade 11
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/credit-course-ossd/available-course/grade-12'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Grade 12
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='navArrow relative'>
                  <Link
                    href='/credit-course-ossd/learning-methods'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Learning Methods
                    <FaAngleDown className='transition-transform duration-300 navArrow-rotate' />
                  </Link>
                  <ul className='absolute left-[90%] hidden credit-course-dropdown w-52 p-2 bg-white rounded text-black'>
                    <li>
                      <Link
                        href='/credit-course-ossd/learning-methods/virtual-learning'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Virtual Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/credit-course-ossd/learning-methods/online-learning'
                        className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                      >
                        Online Learning
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href='/credit-course-ossd/admission-process'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link
                    href='/credit-course-ossd/tuition-fees'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Tuition & Fees
                  </Link>
                </li>
              </ul>
            </li>
            {/* International Students for OSSD */}
            <li>
              <Link
                href='/international-students-ossd'
                className='hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
              >
                International Students for OSSD
              </Link>
            </li>
            {/* Tutoring */}
            <li className='group relative'>
              <Link
                href='/tutoring'
                className='flex items-center gap-1 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]'
              >
                Tutoring
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-[2.2rem] hidden w-52 p-2 bg-white rounded text-black shadow-lg group-hover:block'>
                <li>
                  <Link
                    href='/tutoring/regular-tutoring'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Regular Tutoring
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tutoring/stem'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    STEM
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tutoring/fees-admission'
                    className='hover:text-red-500 focus:text-red-500 focus:bg-[#0000001f]'
                  >
                    Fees & Admission
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className='navbar-end '>
          {currentUser ? (
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='User Profile'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow'
                style={{ maxHeight: '200px', overflowY: 'auto' }}
              >
                <li key='name' className='mx-3 font-semibold'>
                  {currentUser?.name}
                </li>
                <li key='email' className='mx-3 text-sm text-gray-600'>
                  {currentUser?.email}
                </li>
                <hr className='my-3' />
                {currentUser && currentUser?.role === 'admin' && (
                  <li key='/admin'>
                    <Link href='/admin/users' className='justify-between'>
                      Admin Dashboard
                    </Link>
                  </li>
                )}

                <li key='/profile'>
                  <Link href='/profile' className='justify-between'>
                    Profile <span className='badge'>New</span>
                  </Link>
                </li>
                <li key='/settings'>
                  <Link href='/settings'>Settings</Link>
                </li>
                <li key='/logout'>
                  <button onClick={handleLogOut} className='text-red-500'>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href='/login'
                className='btn btn-white px-3 sm:px-5 me-4   '
              >
                Log in
              </Link>
              <Link
                href='/register'
                className='btn btn-warning px-3 sm:px-5 me-4 hidden md:btn'
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
