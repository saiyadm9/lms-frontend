import withHero from '@/components/hoc/withHero'

export const metadata = {
  title: 'Earn Your OSSD from Anywhere in the World!',
  description: '',
}

const InterNationalStudents = () => {
  return (
    <div>
      <section className='py-12 px-6 md:px-10'>
        <div className='container mx-auto'>
          <div className='w-full'>
            <h2 className='text-4xl font-bold mt-6'>
						Get the credits you deserve with our trusted online school.
            </h2>
            <p className='mt-6 text-gray-800 text-justify'>
							Ontario eSecondary School is authorized to grant equivalency credits* for many individuals including students who were previously enrolled in high school outside of Canada (or other provinces), students who received homeschooling, and adults who left highschool and continued their learning in various ways.
            </p>
            <p className='mt-4 text-gray-700'>
							*What is an equivalency credit? An equivalency credit is a high school credit that is granted when all the standards of achievement for a course are met in another way. It involves the assessment of credentials from other jurisdictions.
            </p>
						<p className='mt-6 font-bold '>
							Thinking about PLAR? 	
						</p>
						<p className='mt-4 text-gray-700'>
							1. Are you a mature student who has worked since leaving high school? Did you know your work experience may actually be equivalent to high school credits!
            </p>
						<p className='mt-4 text-gray-700'>
							2. Did you homeschool your child and now wish to have them receive their high school credits from an inspected Ontario secondary school? Speak to our guidance team about the transition!
            </p>
						<p className='mt-4 text-gray-700'>
							3. Are you located outside of Canada and wish to have your previous high school credits evaluated towards receiving the OSSD?
            </p>
						<p className='mt-4 font-bold '>
							Book a guidance call with us today to learn more!
						</p>
						<p className='mt-4 text-gray-700'>
							PLAR for Regular Day School Students in <span className='font-bold'>Ontario</span>:
            </p>
						<p className='mt-4 text-gray-700'>
							Because young people benefit in many ways from the learning experiences offered in secondary school, PLAR has a specific, limited function in the Ontario secondary school program. For regular day school students, a maximum of 4 credits may be granted through the challenge process for Grade 10, 11, and 12 courses; or for Levels 1, 2, and 3 in classical languages courses; for Levels 2, 3, and 4 in international languages courses; and for Levels 3, 4, and 5 in Native languages courses. No more than 2 of these credits may be granted in one discipline.
            </p>
						<p className='mt-4 text-gray-700'>
							PLAR for <span className='font-bold'>Home Schoolers and International Students:</span>:
            </p>
						<p className='mt-4 text-gray-700'>
							For students who are transferring from home schooling, a non-inspected private school, or a school outside Ontario, principals will grant equivalency credits for placement purposes based on their evaluation of the student’s previous learning (see section 4.3.2 and Appendix 2 in OS).
            </p>
						<p className='mt-4 font-bold '>
							PLAR for Mature Students:{' '}
							<a 
								href='www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-132' target='_blank' 
								rel='' 
								className='text-blue-600 hover:text-blue-800 transition-colors duration-200'
							>
								Ministry Memoranda Link
							</a>
						</p>
						<p className='mt-4 text-gray-700'>
							As of February 1, 2022 the newly revised mandatory PLAR requirements set out in this memorandum will come into effect, and will apply to mature students as defined as:
						</p>
						<ul className='list-disc ml-6 mt-4'>
							<li>
								a mature student is a student who is at least 18 years of age on or after January 1 of the current school year and who is enrolled in a program for the purpose of obtaining an Ontario Secondary School Diploma (OSSD)
							</li>
						</ul>
						<p className='mt-4 text-gray-700'>
							Prior Learning Assessment and Recognition (PLAR) for mature students is the formal evaluation and credit-granting process whereby mature students may obtain credits for prior learning. Prior learning includes the knowledge and skills that students have acquired, in both formal and informal ways, outside secondary school. Students may have their knowledge and skills evaluated against the expectations outlined in provincial curriculum in order to earn credits towards the OSSD.
						</p>
						<p className='mt-4 text-gray-700'>
							All credits granted through the PLAR process must represent the same standards of achievement as credits granted to students who have taken the courses.
						</p>
						<p className='mt-4 text-gray-700'>
							After a review of the students’ existing documentation and evidence of prior learning, principals will determine the number of credits, including compulsory credits, that a mature student needs in order to meet diploma requirements, and determine how the PLAR process can best be applied.
						</p>
						<p className='mt-4 text-gray-700'>
							Because of the broader life experience of mature students, the requirements concerning the application of PLAR procedures are different for them than for regular day school students. Principals will determine the number of credits, including compulsory credits, that a mature student needs in order to meet the credit requirements for the Ontario Secondary School Diploma (OSSD). At the discretion of the principal, up to <span className='font-bold'>16 Grade 9 and 10 equivalency credits may be granted to a mature student following an individual assessment.</span>
						</p>
						<p className='mt-4 font-bold '>
							Grade 9 and 10 credits
						</p>
						<p className='mt-4 text-gray-700'>
							For Grade 9 or 10 credits the equivalency process is as follows:
						</p>
						<ul className='list-disc ml-6 mt-4'>
							<li>
								students participate in individual assessment consisting of four subject based assessments, as needed, for the purpose of granting Grade 9 or 10 credits
							</li>
							<li>
								up to 16 Grade 9 and 10 credits may be granted through the Grade 9 or 10 equivalency process at the discretion of the principal following individual assessment
							</li>
						</ul>
						<p className='mt-4 text-gray-700'>
							There is no challenge process for Grade 9 and 10 credits.
						</p>
						<p className='mt-4 text-gray-700'>
							This will consist of assessment in English, mathematics, science, and Canadian history and Canadian geography.
						</p>
						<p className='mt-4 text-gray-700'>
							The principal has the authority to defer assessment on Grade 9 and 10 Canadian geography and Canadian history until the student has had sufficient time to develop language skills at a Grade 11 or 12 level and, for students new to Canada, to become more familiar with Canadian culture. Before granting an OSSD, however, the principal will ensure that the student has successfully completed the assessment on Grade 9 and 10 Canadian geography and history.
						</p>
						<p className='mt-4 font-bold'>
							Grade 11 and 12 Credits
						</p>
						<p className='mt-4 text-gray-700'>
							For Grade 11 or 12 credits both the equivalency process and the challenge process are as follows:
						</p>
						<ul className='list-disc ml-6 mt-4'>
							<li>
								through the equivalency process, students participate in an evaluation of their credentials, other appropriate documentation and evidence from jurisdictions within and outside Ontario for the purpose of granting credit for Grade 11 or 12 courses developed from the most recent Ontario curriculum
							</li>
							<li>
								through the challenge process, students’ prior learning is evaluated using assessments for the purpose of granting credit for Grade 11 or 12 courses developed from the most recent Ontario curriculum
							</li>
							<li>
								up to 10 of 14 Grade 11 and 12 credits may be granted through either the equivalency or challenge process.
							</li>
							<li>
								a minimum of four Grade 11 and 12 credits must be earned by taking the necessary courses, with the following exception: at the discretion of the principal, mature students who present evidence of a completed postsecondary diploma and/or degree from an accredited Canadian postsecondary institution may qualify for the OSSD under Ontario Schools by completing a minimum of one Grade 11 or Grade 12 credit
							</li>
						</ul>
						<p className='mt-4 text-gray-700'>
							Mature students who have previously accumulated 26 or more credits towards the diploma (excluding those with postsecondary credentials as noted above) must successfully complete the required number of courses to bring their total number of credits up to 30 before they will be eligible to receive the OSSD.
						</p>
						<p className='mt-4 text-gray-700'>
							Following the equivalency or challenge process, any remaining required credits may be earned by taking the required courses.
						</p>
						<p className='mt-4 text-gray-700'>
							The following types of credentials and other documentation may be accepted for the purpose of determining whether to grant Grade 11 and 12 equivalent credits:
						</p>
						<ul className='list-disc ml-6 mt-4'>
							<li>
								formal transcripts issued by a recognized educational or training institution or a government ministry in Ontario or outside Ontario (e.g., a secondary school, a provincial college of applied arts and technology, a university, a ministry of education or training)
							</li>
							<li>
								Certificates of Apprenticeship and Certificates of Qualification for apprenticeships granted by or recognized by the Ontario Ministry of Training, Colleges and Universities
							</li>
							<li>
								other appropriate documentation of learning gained from other programs, courses, or work experiences
							</li>
						</ul>
						<p className='mt-4 text-gray-700'>
							In all these cases, the principal is responsible for ensuring that equivalent credits are granted to mature students only if their transcripts or other documents show evidence of learning that relates directly to the Ontario curriculum expectations for specific courses.
						</p>
						<p className='mt-4 text-gray-700'>
							Mature students must earn a <span className='font-bold'>minimum of 4 Grade 11 and 12 credits</span> by taking the course at a secondary school (or through any of the options outlined in section 10). Mature students who have previously accumulated 26 or more credits towards the diploma must successfully complete the required number of courses to bring their total number of credits up to 30 before they will be eligible to receive the OSSD. Mature students working towards the OSSD under OS/OSS must also satisfy the diploma requirements with regard to the <span className='font-bold'>provincial secondary school literacy requirement.</span> Principals will determine the number of hours of community involvement activities that a mature student will have to complete (40 Hours).
						</p>
						<p className='mt-4 font-bold '>
							<i>English,</i> Grade 11 and 12
						</p>
						<p className='mt-4 text-gray-700'>
							To obtain a Grade 11 credit in English that meets the compulsory credit requirement, a mature student must successfully complete English, Grade 11, College Preparation (ENG3C) or English, Grade 11, Workplace Preparation (ENG3E) or English, Grade 11, University Preparation (ENG3U); or challenge for credit for one of the above Grade 11 English courses successfully; or provide a formal transcript so that the principal can determine whether an equivalent credit can be granted for one of these three Grade 11 English courses. No substitution is permitted.
						</p>
						<p className='mt-4 text-gray-700'>
							To obtain a Grade 12 credit in English that meets the compulsory credit requirement, a mature student must successfully complete English, Grade 12, College Preparation (ENG4C) or English, Grade 12, Workplace Preparation (ENG4E) or English, Grade 12, University Preparation (ENG4U). <i>The student must take the course. No substitution is permitted.</i>
						</p>
						<p className='mt-4 text-gray-700'>
							<i>Note:</i> If a mature student takes and successfully completes ESL 4 or 5 to meet one English compulsory credit requirement, he or she must also successfully complete one of the Grade 11 or 12 English courses listed above. 
							<i>The student must take the Grade 11 or 12 English course.</i> No substitution is permitted.
						</p>
						<p className='mt-4 font-bold '>
							<i>Mathematics,</i> Grade 11 and 12
						</p>
						<p className='mt-4 text-gray-700'>
							To obtain a Grade 11 or 12 credit in mathematics that meets the compulsory credit requirement, a mature student must successfully complete the course, challenge successfully for credit for the course, or provide a formal transcript so that the principal can determine whether an equivalent credit can be granted for the course.
						</p>
						<p className='mt-4 text-gray-700'>
							<i>Note:</i> Instead of taking the Grade 11 or 12 mathematics course, a mature student may ask to be allowed to substitute any Grade 9, 10, 11, or 12 course that is from one of the Ontario curriculum policy documents published in 1999 or later and that meets a compulsory credit requirement for the OSSD.
						</p>
						<p className='mt-4 font-bold'>
							<i>Science,</i> Grade 11 or 12, <span className='font-normal'>OR</span> Technological Education, Grade 9, 10, 11, or 12
						</p>
						<p className='mt-4 text-gray-700'>
							To obtain a Grade 11 or 12 credit in science or a Grade 9, 10, 11, or 12 credit in technological education that meets the compulsory credit requirement, a mature student must (1) successfully complete the course, (2) challenge successfully for credit for the course, or (3) provide a formal transcript so that the principal can determine whether an equivalent credit can be granted for a Grade 11 or 12 science course or for a technological education course in Grade 9, 10, 11, or 12 that is in one of the Ontario curriculum policy documents published in 1999 or later and that meets a compulsory credit requirement for the OSSD.
						</p>
						<p className='mt-4 text-gray-700'>
							<i>Note:</i> Instead of taking the science or technology education course, a mature student may ask to be allowed to substitute any Grade 9, 10, 11, or 12 course that is from one of the Ontario curriculum policy documents published in 1999 or later and that meets a compulsory credit requirement for the OSSD.
						</p>
						<p className='mt-4 text-gray-700'>
							Regular day school students who transfer to an Ontario secondary school from a school outside Ontario or from a non-inspected private school may be granted equivalent credits through the PLAR equivalency process for regular day school students based on the principal’s evaluation of their previous learning. The total number of equivalent credits and the corresponding number of compulsory credits are recorded on the OST. The equivalent credits should be entered as a total, and the required items of information should appear as follows: “Equivalent Credits” should be entered in the “Course Title” column; “PLE” in the “Course Code” column; “EQV” in the “Percentage Grade” column; the total number of credits in the “Credit” column; and the total number of compulsory credits in the “Compulsory” column.
						</p>
						<p className='mt-4 font-bold'>
							Equivalent Credit Assessment
						</p>
						<p className='mt-4 text-gray-700'>
							For regular day school students transferring from home-schooling, a non-inspected private school, or a school outside Ontario, the OES Principal will grant equivalency credits for placement purposes through the Prior Learning Assessment and Recognition (PLAR) process. Determining equivalency involves the assessment of the student credentials from other jurisdictions, as shown on their transcripts and/or report cards.
						</p>
						<p className='mt-4 text-gray-700'>
							The Principal of OES will determine the total credit equivalency, as well as the number of compulsory and optional credits remaining to be completed in accordance with Ontario Schools, Appendix 2, Guide to Determining Diploma Requirements for Students Transferring into Ontario Secondary Schools.
						</p>
						<p className='mt-4 text-gray-700'>
							If opted for, the fee for an equivalent credit assessment will be $150. If there are no courses to be taken and only electives to be granted there will be a charge of $150 per credit assigned.
						</p>
						<p className='mt-4 text-gray-700'>
							The Principal or staff of OES, who will determine if an equivalency (EQV) is granted under the Prior Learning Assessment and Recognition (PLAR) procedures, will review the admission academic documents. PLAR is the formal evaluation and credit granting process whereby students may obtain credits for prior learning. Prior learning includes knowledge and skills that students have acquired in both formal and informal ways, in and outside of secondary school. This includes college, apprenticeships and work place experiences. PLAR is outlined in the document: http://www.edu.gov.on.ca/eng/document/curricul/secondary/oss/oss.pdf , pg. 36-41, sec6.
						</p>
						<ul className='list-disc ml-6 mt-4'>
							<li>
								The PLAR process involves two components: challenge and equivalency. OES offers the Equivalency portion. OES does not offer the Challenge opportunities for credit.
							</li>
							<li>
								The Equivalency (EQV) portion of PLAR is the process and procedure the Principal uses to grant credits based on credentials from other non-Ontario jurisdictions for the process of awarding EQV credits. All EQV credits granted through the PLAR process must represent the same standards of achievement as have been established for students who have taken the comparative Ontario Secondary school courses/credits. Submissions should therefore not only include a transcript but also an English description and/or sometimes the Course Outline of each course of study. This may be requested prior to making an assessed decision
							</li>
						</ul>


          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(InterNationalStudents, {
  title: 'International Students',
  description: 'Study supports for students anywhere in the world',
  bgGradient: 'rgb(0 33 38 / 55%)',
})
