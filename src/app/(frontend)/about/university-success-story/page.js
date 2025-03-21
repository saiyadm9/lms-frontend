import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'University Success Story',
  description: '',
}

const OurStory = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold mt-6'>
              University Success Story
            </h1>
            <p className='mt-4 text-gray-700'>
              Academy of Scholars takes great pride in the outstanding
              achievements of our students, many of whom have been admitted to
              top programs at leading universities across Canada. Our commitment
              to academic excellence, personalized support, and a strong Ontario
              curriculum foundation has helped students secure placements in
              competitive fields such as Engineering, Business, Health Sciences,
              and Computer Science at institutions like the University of
              Toronto, Trent University, University of Waterloo, Western
              University and many more. These success stories reflect our
              dedication to preparing students for higher education and future
              careers. We are happy to share more details upon request!
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/convocation.jpg'
              alt='convocation'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(OurStory, {
  title: 'Success Story',
  description: ' ',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
