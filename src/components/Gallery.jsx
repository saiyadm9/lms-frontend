import React from 'react'
import Image from 'next/image'

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
              className='overflow-hidden rounded-lg shadow-lg group'
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
    </div>
  )
}

export default Gallery
