import withHero from '@/components/hoc/withHero'

export const metadata = {
  title: 'Description',
  description: '',
}

const description = () => {
  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
        Ontario Secondary School Diploma Requirements
      </h1>

      {/* Introduction Section */}
      <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
        <p className='text-lg text-gray-700'>
          What you need to earn an Ontario Secondary School Diploma depends on
          the year you started Grade 9.
        </p>
      </div>

      {/* Requirements for 2023 or Prior */}
      <div className='bg-blue-50 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          If you started Grade 9 in 2023 or in prior years:
        </h2>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>Earn 18 compulsory credits</li>
          <li>Earn 12 optional credits</li>
          <li>
            Successful completion of Ontario Secondary School Literacy Test
            (OSSLT)
          </li>
          <li>Earn at least two online learning credits</li>
          <li>
            Complete a minimum of 40 hours of community involvement activities
          </li>
        </ul>
      </div>

      {/* Requirements for 2024 or Later */}
      <div className='bg-green-50 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          If you started Grade 9 in 2024 or in later years:
        </h2>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>Earn 17 compulsory credits</li>
          <li>Earn 13 optional credits</li>
          <li>Pass the literacy requirement</li>
          <li>Earn at least two online learning credits</li>
          <li>
            Complete a minimum of 40 hours of community involvement activities
          </li>
        </ul>
      </div>

      {/* English Language Learners Note */}
      <div className='bg-yellow-50 p-6 rounded-lg shadow-md mb-8'>
        <p className='text-gray-700'>
          Students who are English language learners may count up to three
          credits in OSSLT towards the four compulsory credits in English. It
          does not matter what year you started Grade 9. The fourth credit must
          be a Grade 12 compulsory English course.
        </p>
      </div>

      {/* Compulsory Credits - 2023 or Before */}
      <div className='bg-purple-50 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Compulsory Credits - 2023 or before:
        </h2>
        <p className='text-gray-700 mb-4'>
          Students who started Grade 9 in 2023 or earlier must earn the
          following 18 compulsory credits to get their Ontario Secondary School
          Diploma:
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>4 credits in English (1 credit per grade)</li>
          <li>
            3 credits in mathematics (at least 1 credit in Grade 11 or 12)
          </li>
          <li>
            3 credits for group 1, 2, and 3 courses (1 credit in each group)
          </li>
          <li>2 credits in science</li>
          <li>1 credit in Canadian history (Grade 10)</li>
          <li>1 credit in Canadian geography (Grade 9)</li>
          <li>1 credit in the arts</li>
          <li>1 credit in health and physical education</li>
          <li>1 credit in French as a second language</li>
          <li>0.5 credit in career studies</li>
          <li>0.5 credit in civics and citizenship</li>
        </ul>
        <p className='text-gray-700 mt-4'>
          The Grade 11 English: Understanding Contemporary First Nations, Métis
          and Inuit Voices course may be used to meet the Grade 11 English
          compulsory credit requirement. The Grade 9 Expressions of First
          Nations, Métis, and Inuit Cultures course may be used to meet the
          compulsory credit requirement in the arts.
        </p>
      </div>

      {/* Compulsory Credits - 2024 or After */}
      <div className='bg-pink-50 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Compulsory Credits - 2024 or after:
        </h2>
        <p className='text-gray-700 mb-4'>
          Students who started Grade 9 in 2024 or later years must earn the
          following 17 compulsory credits to get their Ontario Secondary School
          Diploma:
        </p>
        <ul className='list-disc list-inside space-y-2 text-gray-700'>
          <li>4 credits in English (1 credit per grade)</li>
          <li>
            3 credits in mathematics (Grade 9, Grade 10, and 1 credit in Grade
            11 or 12)
          </li>
          <li>2 credits in science</li>
          <li>1 credit in technological education (Grade 9 or Grade 10)</li>
          <li>1 credit in Canadian history (Grade 10)</li>
          <li>1 credit in Canadian geography (Grade 9)</li>
          <li>1 credit in the arts</li>
          <li>1 credit in health and physical education</li>
          <li>1 credit in French as a second language</li>
          <li>0.5 credit in career studies</li>
          <li>0.5 credit in civics and citizenship</li>
          <li>1 credit from the STEM-related course group</li>
        </ul>
        <p className='text-gray-700 mt-4'>
          Starting in September 2025, students must earn a new financial
          literacy graduation requirement as part of their compulsory Grade 10
          mathematics course. Students will need to achieve a mark of 70% or
          higher to pass this new requirement and earn their high school
          diploma. More information will be provided as soon as it is available.
        </p>
      </div>
    </div>
  )
}

export default withHero(description, {
  title: 'Description',
  description: ' ',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})
