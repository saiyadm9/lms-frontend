import Image from 'next/image'

export default function AfterHero() {
  return (
    <section className='bg-white py-12 px-6 md:px-12'>
      <div className='container mx-auto text-center max-w-3xl'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Distinguised Private School in Ontario
        </h1>
        <p className='text-gray-700 text-lg leading-relaxed'>
          Academy of Scholars is a private school accredited by the Ontario
          Ministry of Education (MoE) to grant high school credits. We strictly
          follow MoE standards and consistently pass inspections, ensuring
          high-quality education and full compliance.
        </p>
        <div className='flex justify-center mt-8'>
          <Image
            src='/images/languages-canada-logo.png'
            alt='languages canada'
            width={200}
            height={50}
            className='mx-4'
          />
          <Image
            src='/images/ontario-inspected-school-logo.png'
            alt='ontario inspected school'
            width={200}
            height={50}
            className='mx-4'
          />
        </div>
      </div>
    </section>
  )
}
