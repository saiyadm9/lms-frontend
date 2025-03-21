import Image from 'next/image'

export default function UniversitiesLogo() {
  const logos = [
    {
      src: '/images/toronto-university-logo.png',
      alt: 'Toronto University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/trent-university-logo.png',
      alt: 'Trent University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/university-of-waterloo-logo.png',
      alt: 'University of Waterloo',
      width: 100,
      height: 50,
    },
    {
      src: '/images/totonto-metropolitan-university-logo.png',
      alt: 'Toronto Metropolitan University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/mcmaster-university-logo.png',
      alt: 'McMaster University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/wildfrid-laurier-university.jpeg',
      alt: 'Wildfrid Laurier University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/laurentian-university.png',
      alt: 'Laurentian University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/uwindsor-university.svg',
      alt: 'Windsor University',
      width: 100,
      height: 50,
    },
    // Updated Logos
    {
      src: '/images/university-of-alberta-logo.png',
      alt: 'University of Alberta',
      width: 100,
      height: 50,
    },
    {
      src: '/images/university-of-calgary-logo.png',
      alt: 'University of Calgary',
      width: 100,
      height: 50,
    },
    {
      src: '/images/mount-royal-university-logo.png',
      alt: 'Mount Royal University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/mcgill-university-logo.png',
      alt: 'McGill University',
      width: 100,
      height: 50,
    },
    {
      src: '/images/university-of-montreal-logo.png',
      alt: 'University of Montreal',
      width: 100,
      height: 50,
    },
    {
      src: '/images/concordia-university-logo.png',
      alt: 'Concordia University',
      width: 100,
      height: 50,
    },
  ]

  return (
    <section className='bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-center text-gray-900 mb-8'>
          Universities Where Our Students Were Accepted
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center align-items-center'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='flex justify-center items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24'
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                objectFit='contain'
                className='w-full h-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
