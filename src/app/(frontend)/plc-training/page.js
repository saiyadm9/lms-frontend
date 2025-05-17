import withHero from "@/components/hoc/withHero";
import Image from "next/image";

export const metadata = {
  title: "Introduction to Programmable Logic Controllers (PLC)",
  description: "",
};

const PLCPage = () => {
  return (
    <div>
      <section className="bg-[#F3F4F6] py-12 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-x-1">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">
              Introduction to Programmable Logic Controllers (PLC)
            </h1>
            <p className="mt-4 text-gray-700 text-justify">
              This course introduces to the fundamental engineering principles
              within the industrial automation field. You will examine the
              operation and behaviour of various electronic components. DC and
              AC electrical circuits will then be explored, and key calculations
              developed. Pneumatic and Hydraulic systems, which are essential
              disciplines within automation, will be covered. You will acquire
              an understanding of the hardware aspects of Programmable Logic
              Controllers (PLC's). This will be followed by familiarization with
              the software aspect of PLC's, where simple Ladder Logic programs
              will be designed and tested. Finally, you will learn about
              different industrial safety standards and best practices.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              width={690}
              height={400}
              src="/images/plc.png"
              alt="PLC"
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
                1. Introduction to Industrial Automation and Basic Electronics
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>Describe the role of automation in industry.</li>
                <li>Define automation simulation and its advantages.</li>
                <li>
                  Describe the basic components and features in simple
                  electronic circuits.
                </li>
                <li>
                  Use resistors, capacitors, inductors, and solenoids to create
                  simple circuits with correct specifications and wiring
                  procedure.
                </li>
                <li>
                  Use a multimeter to measure values in an electronic circuit
                  using correct procedure.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2. DC Circuits</h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Differentiate between AC and DC current types and circuits.
                </li>
                <li>
                  Explain the characteristics, operation, and application of DC
                  circuits.
                </li>
                <li>Create simple DC circuits.</li>
                <li>Construct simple series and parallel circuits.</li>
                <li>Analyze simple series and parallel circuits.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">3. AC Circuits</h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Explain the characteristics, operation, and application of AC
                  circuits.
                </li>
                <li>
                  Create circuits using single phase AC voltage and current.
                </li>
                <li>
                  Create circuits using three phase AC voltage and current.
                </li>
                <li>
                  Use an oscilloscope to measure values in an electronic circuit
                  using appropriate procedures.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">4. Power and Energy</h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Explain the meaning and characteristics of power in DC and AC
                  circuits.
                </li>
                <li>Calculate power values in DC circuits.</li>
                <li>
                  Calculate power values in single and three phase AC circuits.
                </li>
                <li>
                  Explain the meaning and characteristics of energy in a
                  circuit.
                </li>
                <li>Calculate energy and usage cost values in circuits.</li>
                <li>
                  Use a wattmeter to measure values in an electronic circuit
                  using correct procedures.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                5. Introduction to Relay Control Systems
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Describe the purpose, characteristics, and operating
                  principles of an electro-magnetic relays.
                </li>
                <li>
                  Describe the purpose, characteristics, and operating
                  principles of solid-state relays.
                </li>
                <li>
                  Explain the purpose and characteristics of relay coils,
                  contacts, and circuits.
                </li>
                <li>
                  Explain the purpose and characteristics of contactors,
                  overloads, and timer relays.
                </li>
                <li>
                  Create relays based electronic circuits using industry best
                  practices.
                </li>
                <li>Use relay ladder logic to control circuit operation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                6. Introduction to PLC and PLC Programming
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Describe the main components of PLC hardware including their
                  purpose, types, characteristics, and operating principles.
                </li>
                <li>
                  Describe the common PLC software structures and languages and
                  their appropriate applications.
                </li>
                <li>
                  Explain scan cycle and its application in PLC operation.
                </li>
                <li>Use XIC, XIO, OTE instructions in PLC programs.</li>
                <li>
                  Use basic PLC instructions to implement simple logical
                  procedures.
                </li>
                <li>
                  Construct ladder logic diagrams using basic timer and counter
                  instructions according to industry best practices.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                7. Introduction to Fluid Power
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Discuss the characteristics and applications of fluid power in
                  industrial automation.
                </li>
                <li>
                  Explain the significance of Pascal’s law in force
                  multiplication.
                </li>
                <li>
                  Discuss the application of pneumatic and hydraulic principles
                  in automation.
                </li>
                <li>
                  Explain the function of various pneumatics including
                  compressors, Filter-Regulator-Lubricator (FRL) units,
                  actuators, and valves.
                </li>
                <li>
                  Explain the function of various hydraulic components including
                  pumps, valves, and cylinders as they would be used in
                  automation circuits.
                </li>
                <li>
                  Create simple pneumatic and hydraulic circuits using best
                  industrial practices for practical applications.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                8. Industrial Safety Standards and Practices
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Describe the importance and application of safety standards
                  and regulations in industrial automation.
                </li>
                <li>
                  Discuss the purpose and industry best practices for the use of
                  interlocks and emergency shutdowns in automation.
                </li>
                <li>
                  Discuss the purpose and best practices for the use of
                  electrical safety devices in automation.
                </li>
                <li>
                  Explain the importance and best practices for implementation
                  of LOTO (LockOut/TagOut) procedure.
                </li>
                <li>
                  Create simple safety circuits for practical applications using
                  simulation software.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withHero(PLCPage, {
  title: "PLC",
  description: "",
  bgGradient: "rgb(0 33 38 / 55%)",
});
