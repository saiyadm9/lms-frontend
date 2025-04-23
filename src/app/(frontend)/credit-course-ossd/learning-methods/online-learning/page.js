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
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-x-6'>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold mt-6'>Online Learning System</h1>
            <p className='mt-4 text-gray-700 text-justify'>
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
              geographical barriers and making high-quality education available
              to both local and international students.
            </p>
          </div>

          <div className='md:col-span-1 flex justify-center mt-6 md:mt-0'>
            <Image
              src='/images/online-learning-image.jpg'
              alt='Online Learning Illustration'
              width={500}
              height={400}
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(OnlineLearning, {
  title: 'Online Learning',
  description: ' ',
  bgGradient: 'rgb(0 33 38 / 55%)',
})
