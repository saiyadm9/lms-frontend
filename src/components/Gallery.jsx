'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Gallery = () => {
  const images = [
    { src: '/images/staff.jpg', alt: 'Staff' },
    {
      src: '/images/eating-in-the-classroom.jpg',
      alt: 'Eating in the Classroom',
    },
    { src: '/images/students-with-food.jpg', alt: 'Students with Food' },
    { src: '/images/pizza--party.jpg', alt: 'Pizza Party' },
    {
      src: '/images/students-experimenting-with-elements.jpg',
      alt: 'Students Experimenting with Elements',
    },
    {
      src: '/images/students-inside-classroom.jpg',
      alt: 'Students at Classroom',
    },
    { src: '/images/student-group-study.jpg', alt: 'Students Group Study' },
    { src: '/images/picnic.jpg', alt: 'Picnic' },
  ]

  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className='py-12 bg-[#E4DBD0]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-10'>
          Our Gallery
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {images.map((img, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-lg shadow-lg group cursor-pointer'
              onClick={() => setSelectedIndex(index)}
            >
              <figure className='relative w-full h-64'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout='fill'
                  objectFit='cover'
                  className='group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <span className='text-white text-lg font-semibold'>
                    {img.alt}
                  </span>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Dialog
          open={true}
          onClose={() => setSelectedIndex(null)}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
        >
          <div className='relative bg-white p-4 rounded-lg max-w-3xl mx-auto flex items-center justify-center'>
            <button
              className='absolute top-4 right-4 text-gray-800 text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg'
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
            <button
              className='absolute left-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2'
              onClick={handlePrev}
            >
              <FaChevronLeft className='w-6 h-6' />
            </button>
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={800}
              height={600}
              className='rounded-lg'
            />
            <button
              className='absolute right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2'
              onClick={handleNext}
            >
              <FaChevronRight className='w-6 h-6' />
            </button>
          </div>
        </Dialog>
      )}
    </div>
  )
}

export default Gallery
