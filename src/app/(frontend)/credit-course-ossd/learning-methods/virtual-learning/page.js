import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Virtual Learning System of Academy of Scholars',
  description: '',
}

const VirtualLearning = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Academy of Scholar&apos;s Virtual Learning System
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, virtual learning provides an engaging,
            real-time learning experience where students can interact directly
            with instructors and peers through video conferencing and online
            platforms. One of the key advantages of virtual learning is its
            ability to offer immediate feedback and foster dynamic discussions,
            allowing students to better understand the material. It promotes
            collaboration by enabling students to participate in group projects
            and discussions, even if they are geographically distant. Virtual
            learning also offers flexibility, allowing students to attend
            classes from anywhere and maintain a better work-life balance.
            Moreover, it helps students develop important digital literacy and
            communication skills, preparing them for future academic and
            professional environments. The sense of community created through
            live interactions keeps students motivated and more accountable for
            their learning.
          </p>
        </div>
      </section>
    </div>
  )
}

export default withHero(VirtualLearning, {
  title: 'Virtual Learning',
  description: 'Virtual Learning System of Academy of Scholars',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
