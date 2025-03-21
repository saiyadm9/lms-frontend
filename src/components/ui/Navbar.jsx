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
    <div className='fixed left-0 right-0 top-0 z-50'>
      <div
        className={`navbar h-32 px-2 md:px-6 transition-all duration-300 ${
          scrolling ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        {/* Mobile Menu */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden text-black'
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
              className={`menu menu-sm dropdown-content mt-20 bg-base-100 rounded-box z-[1] w-[100vw] h-[calc(100vh-5rem)] p-2 shadow ${
                isMobileMenuOpen ? 'block' : 'hidden'
              }`}
            >
              {/* Mobile Menu Links */}
              <li>
                <Link href='/' onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' onClick={toggleMobileMenu}>
                  About Us
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link href='/about/our-story' onClick={toggleMobileMenu}>
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about/university-success-story'
                      onClick={toggleMobileMenu}
                    >
                      University Success Story
                    </Link>
                  </li>
                  <li>
                    <Link href='/about/our-team' onClick={toggleMobileMenu}>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href='/about/contact-us' onClick={toggleMobileMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/credit-course-ossd' onClick={toggleMobileMenu}>
                  Credit Course and OSSD
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link
                      href='/credit-course-ossd/description'
                      onClick={toggleMobileMenu}
                    >
                      Description
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/available-course'
                      onClick={toggleMobileMenu}
                    >
                      Available Course
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/learning-methods'
                      onClick={toggleMobileMenu}
                    >
                      Learning Methods
                    </Link>
                    <ul className='p-2'>
                      <li>
                        <Link
                          href='/credit-course-ossd/learning-methods/virtual-learning'
                          onClick={toggleMobileMenu}
                        >
                          Virtual Learning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/credit-course-ossd/learning-methods/online-learning'
                          onClick={toggleMobileMenu}
                        >
                          Online Learning
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/credit-course-ossd-admission-process'
                      onClick={toggleMobileMenu}
                    >
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/credit-course-ossd/tuition-fees'
                      onClick={toggleMobileMenu}
                    >
                      Tuition & Fees
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/international-students-ossd'
                  onClick={toggleMobileMenu}
                >
                  International Students for OSSD
                </Link>
              </li>
              <li>
                <Link href='/tutoring' onClick={toggleMobileMenu}>
                  Tutoring
                </Link>
                <ul className='p-2'>
                  <li>
                    <Link
                      href='/tutoring/regular-tutoring'
                      onClick={toggleMobileMenu}
                    >
                      Regular Tutoring
                    </Link>
                  </li>
                  <li>
                    <Link href='/tutoring/stem' onClick={toggleMobileMenu}>
                      STEM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/tutoring/fees-admission'
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
              <Link href='/'>Home</Link>
            </li>
            <li className='group relative'>
              <Link href='/about' className='flex items-center gap-1'>
                About Us
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-10 hidden w-52 p-2 bg-white rounded shadow-lg group-hover:block'>
                <li>
                  <Link href='/about/our-story'>Our Story</Link>
                </li>
                <li>
                  <Link href='/about/university-success-story'>
                    University Success Story
                  </Link>
                </li>
                <li>
                  <Link href='/about/our-team'>Our Team</Link>
                </li>
                <li>
                  <Link href='/about/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </li>
            <li className='group relative'>
              <Link
                href='/credit-course-ossd'
                className='flex items-center gap-1'
              >
                Credit Course and OSSD
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-10 hidden w-52 p-2 bg-white rounded shadow-lg group-hover:block'>
                <li>
                  <Link href='/credit-course-ossd/description'>
                    Description
                  </Link>
                </li>
                <li>
                  <Link href='/credit-course-ossd/available-course'>
                    Available Course
                  </Link>
                </li>
                <li>
                  <Link href='/credit-course-ossd/learning-methods'>
                    Learning Methods
                  </Link>
                  <ul className='p-2'>
                    <li>
                      <Link href='/credit-course-ossd/learning-methods/virtual-learning'>
                        Virtual Learning
                      </Link>
                    </li>
                    <li>
                      <Link href='/credit-course-ossd/learning-methods/online-learning'>
                        Online Learning
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/credit-course-ossd/credit-course-ossd-admission-process'>
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link href='/credit-course-ossd/tuition-fees'>
                    Tuition & Fees
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/international-students-ossd'>
                International Students for OSSD
              </Link>
            </li>
            <li className='group relative'>
              <Link href='/tutoring' className='flex items-center gap-1'>
                Tutoring
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-10 hidden w-52 p-2 bg-white rounded shadow-lg group-hover:block'>
                <li>
                  <Link href='/tutoring/regular-tutoring'>
                    Regular Tutoring
                  </Link>
                </li>
                <li>
                  <Link href='/tutoring/stem'>STEM</Link>
                </li>
                <li>
                  <Link href='/tutoring/fees-admission'>Fees & Admission</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Profile Dropdown */}
        <div className='navbar-end'>
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
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
              >
                <li>
                  <Link href='/profile'>Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href='/login' className='btn btn-white px-3 sm:px-5 me-4'>
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
