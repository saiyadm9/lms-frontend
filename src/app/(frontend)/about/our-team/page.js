import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Meet Our Team Members',
  description: '',
}

const teamMembers = [
  {
    name: 'Masum Mustafa',
    role: 'Founder & Program Director',
    image: '/images/masum-mustofa.jpg',
    bio: 'Masum Mustafa is an Electrical Engineer with a deep passion for education. He began teaching Mathematics in 2013 at a private school and, in 2018, founded the Academy of Scholars. Currently, he serves as both the Program Director and a Math Teacher.',
    contact: 'Tel: (Domestic) 647-997-6108 | E-mail: info@academyofsin.ca',
  },
  {
    name: 'Zannatul Moiet Hasib',
    role: 'Principal & Program Director',
    image: '/images/jannatul-moet.jpg',
    bio: 'Zannatul serves as the principal of the Academy of Scholars. He holds a master’s degree in Mechanical Engineering and an MBA in Finance. With two decades of teaching experience, he has taught at various private schools and colleges in Toronto. He also previously worked as an instructor at a renowned university in Toronto. Specializing in curriculum development, Zannatul focuses on delivering high school education aligned with the Ontario curriculum (OSSD).',
    contact: 'Tel: (Domestic) 416-559-8127 | E-mail: zhasib@academyofsin.ca',
  },
  {
    name: 'WEI (Shirley) LIU',
    role: 'Marketing Director of International Student (China)',
    image: '/images/shirley.jpg',
    bio: 'WEI (Shirley) has extensive teaching experience and holds a certified teaching qualification in the People’s Republic of China (PRC). She was a former lecturer at a prominent educational institution in China. Currently, she is working as a partner with a renowned educational institution, specializing in international student recruitment, offering precise and effective guidance and strategic solutions.',
    contact:
      'Tel: (Domestic) 647-838-2245 | Tel: (International) 86-13817004888 | E-mail: shirleyliu25@hotmail.com',
  },
]

const Team = () => {
  return (
    <div>
      {/* Team Section */}
      <section className='bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto'>
          {/* Heading */}
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
            Meet Our Team
          </h1>

          {/* Team Members Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'
              >
                {/* Image */}
                <div className='w-full h-64 relative'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout='fill'
                    objectFit='cover'
                    className='w-full h-full'
                  />
                </div>

                {/* Content */}
                <div className='p-6 text-center'>
                  <h3 className='text-2xl font-bold text-gray-800'>
                    {member.name}
                  </h3>
                  <p className='text-indigo-600 font-medium mt-2'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 mt-4'>{member.bio}</p>
                  <p className='text-blue-600 font-semibold mt-4'>
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(Team, {
  title: 'Meet The Team',
  description: 'The Team Will Guide & Teach You',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
