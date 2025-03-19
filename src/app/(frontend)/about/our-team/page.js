import withHero from '@/components/hoc/withHero'
import UniversitiesLogo from '@/components/UniversitiesLogo'
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
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold my-6 text-center'>Meet Our Team</h1>
          <div className='flex flex-wrap gap-8 justify-center mt-10'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className='rounded-xl shadow-lg overflow-hidden flex w-full max-w-3xl'
              >
                <div className='w-1/3'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={750}
                    className='w-full h-full object-cover object-center'
                  />
                </div>
                <div className='w-2/3 text-center p-4 flex-grow'>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {member.name}
                  </h3>
                  <p className='text-indigo-600 font-medium'>{member.role}</p>
                  <p className='text-gray-600 mt-2'>{member.bio}</p>
                  <p className='text-blue-600 font-semibold mt-2'>
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniversitiesLogo />
    </div>
  )
}

export default withHero(Team, {
  title: 'Meet The Team',
  description: ' ',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
