import React from 'react'

const HeroSection = ({ title, description, bgImage, bgColor, bgGradient }) => {
  const backgroundStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : bgGradient
    ? { background: bgGradient }
    : bgColor
    ? { backgroundColor: bgColor }
    : {
        backgroundImage:
          'url(https://educrat-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.86c9aca0.png&w=1920&q=75)',
      }

  return (
    <div
      className='hero bg-cover bg-center min-h-[70vh]'
      style={backgroundStyle}
    >
      <div className='hero-content text-neutral-content text-center'>
        <div className='max-w-xl'>
          <div className='mb-5 text-5xl font-bold'>
            {title || 'Hello there'}
          </div>
          <p className='mb-5 w-full'>
            {description ||
              'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
