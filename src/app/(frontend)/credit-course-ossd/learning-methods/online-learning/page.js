import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Online Learning System of Academy of Scholars',
  description: '',
}

const OnlineLearning = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='flex-1 text-center md:text-left'>
              <h1 className='text-4xl font-bold mt-6'>
                Online Learning System
              </h1>
              <p className='mt-4 text-gray-700'>
                At Academy of Scholars, online learning is designed to provide
                students with a flexible, engaging, and highly supportive
                educational experience. With 24/7 access to course materials,
                students can learn at their own pace, allowing them to manage
                their time effectively and balance other commitments. The
                interactive nature of the online platform enhances student
                engagement through multimedia resources, quizzes, and live
                sessions, catering to various learning styles. One of the key
                advantages of online learning at Academy of Scholars is the
                continuous support provided by experienced instructors, ensuring
                that students receive personalized guidance and feedback. This
                method also encourages independent learning, helping students
                develop strong time management and self-discipline skills.
                Furthermore, the accessibility of online learning means that
                students can attend classes from anywhere, breaking down
                geographical barriers and making high-quality education
                available to both local and international students.
              </p>
            </div>

            <div className='flex-1 flex justify-center md:justify-end'>
              <Image
                src='/images/online-learning-image.jpg'
                alt='Online Learning Illustration'
                width={500}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(OnlineLearning, {
  title: 'Online Learning',
  description: ' ',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
