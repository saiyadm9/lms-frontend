'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    id: 1,
    image: '/images/students-group-study.jpg',
    title: 'Learn Anytime, Anywhere',
    description: 'Access top-quality courses and expand your knowledge.',
    buttonText: 'Explore Courses',
    buttonLink: '/about',
  },
  {
    id: 2,
    image: '/images/studying-together.jpg',
    title: 'Boost Your Career',
    description: 'Enhance your skills with expert-led courses.',
    buttonText: 'Get Started',
    buttonLink: '/login',
  },
  {
    id: 3,
    image: '/images/students-together.jpg',
    title: 'For Canadian & International Students',
    description: 'Learn from anywhere with flexible online courses.',
    buttonText: 'Join Now',
    buttonLink: '/about',
  },
]

export default function HeroSlides() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress)
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  return (
    <section className='relative w-full h-[70vh] pt-28'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='w-full h-full'
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='relative'
            style={{ pointerEvents: 'auto' }}
          >
            <div
              className='absolute inset-0 bg-cover'
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-justify px-6'>
              <div className='text-3xl md:text-6xl font-bold text-white mb-4'>
                {slide.title}
              </div>
              <p className='text-lg md:text-xl text-gray-200 mb-6'>
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
