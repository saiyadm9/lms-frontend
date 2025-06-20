const renderMenuItems = (items, isMobile = false, depth = 0) => {
	return items.map((item) => (
		<MenuItem
			key={item.href}
			item={item}
			isMobile={isMobile}
			depth={depth}
		/>
	));
};

// Separate MenuItem component to handle hover state
const MenuItem = ({ item, isMobile, depth }) => {
	const [isOpen, setIsOpen] = useState(false);

	if (isMobile) {
		return (
			<li key={item.href}>
				<Link
					href={item.href}
					className="hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f]"
					onClick={() => {
						setIsOpen(false); // close dropdown on click
					}}
				>
					{item.name}
				</Link>
				{item.subItems && (
					<ul className="p-2">
						{renderMenuItems(item.subItems, isMobile, depth + 1)}
					</ul>
				)}
			</li>
		);
	}

	return (
		<li
			className="relative group"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<Link
				href={item.href}
				className={`flex items-center gap-1 px-3 py-2 hover:text-red-500 focus:text-red-500 focus:bg-[#f8f8f81f] ${
					depth > 0 ? "justify-between w-full" : ""
				}`}
			>
				{item.name}
				{item.subItems && (
					<FaAngleDown
						className={`transition-transform duration-300 ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				)}
			</Link>

			{item.subItems && (
				<ul
					className={`absolute z-50 min-w-[11rem] bg-white shadow-lg rounded-md text-black p-2 transition-all duration-200 ${
						isOpen ? "block" : "hidden"
					} ${depth === 0 ? "top-full left-0" : "top-0 left-full ml-0"}`}
				>
					{renderMenuItems(item.subItems, false, depth + 1)}
				</ul>
			)}
		</li>
	);
};









{/* Default Content (Assessment & Evaluation) */}
				// <section className='space-y-4 mt-8'>
        //   <h2 className='text-2xl font-semibold'>
        //     Assessment & Evaluation for Student Achievement
        //   </h2>
        //   <p className='text-lg text-gray-700 text-justify'>
        //     As summarized in Growing Success 2010, the primary purpose of
        //     assessment and evaluation is to improve student learning.
        //     Information gathered through assessment helps teachers to determine
        //     students' strengths and weaknesses in their achievement of the
        //     curriculum expectations in each course. This information also serves
        //     to guide teachers in adapting curriculum and instructional
        //     approaches to students' needs and in assessing the overall
        //     effectiveness of programs and classroom practices. As part of
        //     assessment, teachers provide students with descriptive feedback that
        //     guides their efforts towards improvement.
        //   </p>
        //   <p className='text-lg text-gray-700 mt-4'>
        //     Evaluation refers to the process of judging the quality of student
        //     work on the basis of established criteria, and assigning a value to
        //     represent that quality. All curriculum expectations must be
        //     accounted for in instruction, but evaluation focuses on students'
        //     achievement of the overall expectations. A student's achievement of
        //     the overall expectations is evaluated on the basis of his or her
        //     achievement of related specific expectations. Teachers will use
        //     their professional judgement to determine which specific
        //     expectations should be used to evaluate achievement of overall
        //     expectations, and which ones will be covered in instruction and
        //     assessment but not necessarily evaluated.
        //   </p>
        //   <p className='text-lg text-gray-700'>
        //     In order to ensure that assessment and evaluation are valid and
        //     reliable, and that they lead to the improvement of student learning,
        //     teachers must use assessment and evaluation strategies that:
        //   </p>
        //   <ul className='list-disc pl-6 space-y-2 text-lg text-gray-700'>
        //     <li>Address both what students learn and how well they learn</li>
        //     <li>
        //       Are based both on the categories of knowledge and skills and on
        //       the achievement level descriptions given in the achievement chart
        //     </li>
        //     <li>
        //       Are varied in nature, administered over a period of time, and
        //       designed to provide opportunities for students to demonstrate the
        //       full range of their learning
        //     </li>
        //     <li>
        //       Are appropriate for the learning activities used, the purposes of
        //       instruction, and the needs and experiences of the students
        //     </li>
        //     <li>Are fair to all students</li>
        //     <li>
        //       Accommodate students with special education needs, consistent with
        //       the strategies outlined in their Individual Education Plan
        //     </li>
        //     <li>
        //       Accommodate the needs of students who are learning the language of
        //       instruction
        //     </li>
        //     <li>
        //       Ensure that each student is given clear directions for improvement
        //     </li>
        //     <li>
        //       Promote students' ability to assess their own learning and to set
        //       specific goals
        //     </li>
        //     <li>
        //       Include the use of samples of students' work that provide evidence
        //       of their achievement
        //     </li>
        //     <li>
        //       Are communicated clearly to students and parents at the beginning
        //       of the school year and at other appropriate points throughout the
        //       school year
        //     </li>
        //   </ul>
        //   <p className='text-lg text-gray-700'>
        //     The achievement chart for mathematics outlines four categories of
        //     knowledge and skills. They include; knowledge and understanding,
        //     thinking, communication and application. Teachers will ensure that
        //     student work is assessed and/or evaluated in a balanced manner with
        //     respect to the four categories, and that achievement of particular
        //     expectations is considered within the appropriate categories.
        //   </p>
        //   <p className='text-lg text-gray-700'>
        //     A final grade is recorded for this course, and a credit is granted
        //     and recorded for this course if the student's grade is 50% or
        //     higher. The final grade for this course will be determined as
        //     follows:
        //   </p>
        //   <ul className='list-disc pl-6 space-y-2 text-lg text-gray-700'>
        //     <li>
        //       Seventy percent of the grade will be based on evaluations
        //       conducted throughout the course. This portion of the grade should
        //       reflect the student's most consistent level of achievement
        //       throughout the course, although special consideration should be
        //       given to more recent evidence of achievement. The seventy percent
        //       will be distributed in the following achievement chart categories:
        //       25% Knowledge and understanding, 25% application, 25%
        //       communication and 25% thinking.
        //     </li>
        //     <li>
        //       Thirty percent of the grade will be based on a final evaluation in
        //       the form of an examination administered towards the end of the
        //       course and a summative project which students can work on
        //       throughout the course.
        //     </li>
        //   </ul>
        // </section>