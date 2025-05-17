import withHero from "@/components/hoc/withHero";

export const metadata = {
  title: "Tution Fees of Academy of Scholars",
  description: "",
};

const TutionFees = () => {
  return (
    <div>
      <section className="py-12 px-6 md:px-10">
        <div className="container mx-auto space-y-10">
          {/* Tuition Fees Heading */}
          <h1 className="text-4xl font-bold">Tuition Fees</h1>

          {/* OSSD Fees */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">OSSD Fees</h2>
            <p>
              At Academy of Scholars, we offer competitive pricing for credit
              courses and the Ontario Secondary School Diploma (OSSD), ensuring
              students receive exceptional value compared to market rates.
            </p>
            <p>
              We have different pricing structures for local and international
              students to accommodate varying needs, and we also offer discounts
              for students with financial need, making our programs more
              accessible to a wider range of learners.
            </p>
            <p>
              Additionally, we provide customized pricing options that cater to
              the specific needs and expectations of each student, ensuring
              flexibility and affordability.
            </p>
            <p>
              The pricing is <strong>$500</strong> per course. But for local
              students, a special discount offer is currently available.
            </p>
            <p>
              For more information or to discuss your personalized fees, please{" "}
              <a href="/contact" className="text-blue-600 underline">
                contact us
              </a>
              , and our team will be happy to assist you in finding the best
              option for your educational goals.
            </p>
          </section>

          {/* Regular Tutoring */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Regular Tutoring</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Pricing Card 1 */}
              <div className="border rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Regular Tutoring - $250
                </h3>
                <p className="text-gray-600 mb-2">Grade 5–12</p>
                <p className="font-medium">Subjects:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>English</li>
                  <li>Science</li>
                  <li>Math</li>
                  <li>Business</li>
                </ul>
              </div>

              {/* Pricing Card 2 */}
              <div className="border rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  University Preparation - $300
                </h3>
                <p className="text-gray-600 mb-2">Grade 11–12</p>
                <p className="font-medium">Subjects:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Advanced Science</li>
                  <li>Advanced Math</li>
                  <li>Advanced Business</li>
                </ul>
              </div>

              {/* Pricing Card 3 */}
              <div className="border rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  University Preparation - $350
                </h3>
                <p className="text-gray-600 mb-2">Grade 11–12</p>
                <p className="font-medium">Subjects:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Coding</li>
                  <li>Robotics</li>
                  <li>Arduino Microcontroller</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">Duration: 10 Weeks</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default withHero(TutionFees, {
  title: "Tution Fees",
  description: " ",
  bgGradient: "rgb(0 33 38 / 55%)",
});
