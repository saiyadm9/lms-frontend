'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import Image from 'next/image'
import '../ui/ui.css'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut } from '@/redux/slices/userSlice'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signout',
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

  return (
    <div className='fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-lg'>
      <div className='navbar w-full px-2 md:px-6 transition-all duration-300 text-black'>
        <div className='navbar-start'>
          <Link href='/' className=' text-xl font-extrabold'>
            <Image
              src='/images/academy-of-scholars.png'
              width={120}
              height={50}
              alt='Academy of scholars logo'
            />
          </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li className='group relative'>
              <Link href='/about' className='flex items-center gap-1'>
                About us{' '}
                <FaAngleDown className='transition-transform duration-300 group-hover:rotate-180' />
              </Link>
              <ul className='absolute left-0 mt-2 hidden w-52 p-2 bg-white rounded text-black shadow-lg group-hover:block'>
                <li>
                  <Link href='/about/our-story'>Our story</Link>
                </li>
                <li>
                  <Link href='/about/university-success-story'>
                    University success story
                  </Link>
                </li>
                <li>
                  <Link href='/about/our-team'>Our team</Link>
                </li>
                <li>
                  <Link href='/about/contact-us'>Contact us</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/credit-course-ossd'>Credit Course and OSSD</Link>
            </li>
            <li>
              <Link href='/international-students-ossd'>
                International Students for OSSD
              </Link>
            </li>
            <li>
              <Link href='/tutoring'>Tutoring</Link>
            </li>
          </ul>
        </div>

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
                className='menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow'
              >
                <li key='name' className='mx-3 font-semibold'>
                  {currentUser?.name}
                </li>
                <li key='email' className='mx-3 text-sm text-gray-600'>
                  {currentUser?.email}
                </li>
                <hr className='my-3' />
                {currentUser?.role === 'admin' && (
                  <li key='/admin'>
                    <Link href='/admin'>Admin Dashboard</Link>
                  </li>
                )}
                <li key='/profile'>
                  <Link href='/profile'>Profile</Link>
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
