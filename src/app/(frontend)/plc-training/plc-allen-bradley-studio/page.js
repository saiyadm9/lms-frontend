import withHero from "@/components/hoc/withHero";
import Image from "next/image";

export const metadata = {
  title: "PLC Allen Bradley Studio 5000 / RsLogix 5000",
  description: "",
};

const PLCBradleyPage = () => {
  return (
    <div>
      <section className="bg-[#F3F4F6] py-12 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-x-1">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">
              Advance to Programmable Logic Controllers (PLC)
            </h1>
            <p className="mt-4 text-gray-700 text-justify">
              In this course, you will build on what you have learned in
              “Introduction to Programmable Logic Controllers (PLC)” course to
              design and test more complex automation systems. You will learn to
              use Programmable Logic Controllers (PLC) to create more complex
              ladder diagram programs. The detailed operation of timer, counter
              and sequencer instructions in PLC logic will be studied.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              width={690}
              height={400}
              src="/images/advance-plc.jpg"
              alt="advance plc"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Course Contents:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold">
                1. Advanced Ladder Diagrams for Programmable Logic Controllers
                (PLC)
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>Use addressing/tags correctly in a PLC program.</li>
                <li>Create I/O diagrams of a PLC program.</li>
                <li>Create Ladder diagrams for a PLC program.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                2. PLC Math and Comparison Instructions
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>Use Math instructions in a PLC program.</li>
                <li>Apply Comparison instructions in a PLC program.</li>
                <li>Apply Move instructions in a PLC program.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">3. PLC Timers</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Implement a TON timer in a PLC program.</li>
                <li>Implement a TOF timer in a PLC program.</li>
                <li>Use an RTO timer in a PLC program.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">4. PLC Counters</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Implement a CTU counter in a PLC program.</li>
                <li>Use a CTD counter in a PLC program.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">5. PLC Sequencers</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Apply Sequencer instructions in a PLC program.</li>
                <li>Use event activated SQO instructions in a PLC program.</li>
                <li>
                  Implement timer activated SQO instructions in a PLC program.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                6. Structured Text PLC Programs
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>Create structured text programs.</li>
                <li>
                  Use structured text programming to control a mechatronics
                  system.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                7. Function Block PLC Programs
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>Create function block programs.</li>
                <li>
                  Use function block programming to control a mechatronics
                  system.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">8. Scaling</h3>
              <ul className="list-disc list-inside pl-4">
                <li>Use analog input and output devices.</li>
                <li>Create loop diagrams.</li>
                <li>Scale using the CPT instruction.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withHero(PLCBradleyPage, {
  title: "PLC Allen Bradley Studio 5000 / RsLogix 5000",
  description: "",
  bgGradient: "rgb(0 33 38 / 55%)",
});
