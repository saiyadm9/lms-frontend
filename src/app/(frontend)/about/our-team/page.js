import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Meet Our Team Members',
  description: '',
}

const teamMembers = [
  {
    name: 'Masum Mustafa',
    role: 'Founder and program director',
    education: ' P.Eng (Electrical Engineering), CSM, PMP',
    image: '/images/masum-mustofa.jpg',
    bio: 'Masum Mustafa is an Electrical Engineer with a deep passion for education. He began teaching Mathematics in 2013 at a private school and, in 2018, founded the Academy of Scholars. Currently, he serves as both the Program Director and a Math Teacher.',
    contact: 'Tel: (Domestic) 647-997-6108 | E-mail: info@academyofsinc.ca',
  },
  {
    name: 'Zannatul Moiet Hasib',
    role: 'Principal',
    education: 'P.Eng, PMP , MBA',
    image: '/images/jannatul-moet.jpg',
    bio: 'Zannatul serves as the principal of the Academy of Scholars. He holds a master’s degree in Mechanical Engineering and an MBA in Finance. With two decades of teaching experience, he has taught at various private schools and colleges in Toronto. He also previously worked as an instructor at a renowned university in Toronto. Specializing in curriculum development, Zannatul focuses on delivering high school education aligned with the Ontario curriculum (OSSD).',
    contact: 'Tel: (Domestic) 416-559-8127 | E-mail: zhasib@academyofsinc.ca',
  },
  {
    name: 'WEI (Shirley) LIU',
    role: 'Marketing Director of International Student (China)',
    education: '',
    image: '/images/shirley.png',
    bio: 'WEI (Shirley) has extensive teaching experience and holds a certified teaching qualification in the People’s Republic of China (PRC). She was a former lecturer at a prominent educational institution in China. Currently, she is working as a partner with a renowned educational institution, specializing in international student recruitment, offering precise and effective guidance and strategic solutions.',
    contact:
      'Tel: (Domestic) 647-838-8245 | Tel: (International) 86-13817004868 | E-mail: shirleyliu25@hotmail.com',
  },
]

const Team = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-6 sm:px-10'>
        <div className='container mx-auto'>
          <h1 className='text-3xl sm:text-4xl font-bold my-6 text-center'>
            About Academy of Scholars
          </h1>
          <div className='flex flex-wrap gap-8 justify-center mt-10 text-justify'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-3xl'
              >
                <div className='w-full md:w-1/3'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={750}
                    className='w-full h-full object-cover object-center'
                  />
                </div>
                <div className='w-full md:w-2/3 text-center p-4'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-800 text-left'>
                    {member.name}
                  </h3>
                  <p className='text-indigo-600 font-normal italic text-sm sm:text-base text-left'>
                    {member.education}
                  </p>
                  <p className='text-indigo-600 font-medium text-sm sm:text-base text-left'>
                    {member.role}
                  </p>
                  <p className='text-gray-600 mt-2 text-sm sm:text-base text-justify'>
                    {member.bio}
                  </p>
                  <p className='text-blue-600 font-semibold mt-2 text-sm sm:text-base text-left'>
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
  description: ' ',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
