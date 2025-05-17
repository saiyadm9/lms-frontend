import withHero from "@/components/hoc/withHero";

export const metadata = {
  title: "Delta PLC Training",
  description: "",
};

const DeltaPLC = () => {
  return (
    <div>
      <section className="py-12 px-10">
        <div className="container mx-auto space-y-10">
          <h1 className="text-3xl font-bold mb-4">Course Outline</h1>
          <section>
            <h3 className="text-2xl font-semibold mb-4">
              Section 1: Basic Industrial Control and Fundamentals of PLC
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Basic Industrial Control – Understanding Switches and Output
                Components ✅
              </li>
              <li>Relay – Latching and Unlatching ✅</li>
              <li>Latching and Unlatching of 3 Phase Motor ✅</li>
              <li>On-Off and Direction Control of 3 Phase Motor ✅</li>
              <li>Direction Control of Motor using Limit Switches ✅</li>
              <li>Introduction to PLC and PLC Wiring ✅</li>
              <li>How PLC Programming Works? ✅</li>
              <li>Concepts of NO & NC in PLC ✅</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">
              Section 2: Delta PLC DVP
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Welcome to the new lectures of Delta PLC ✅</li>
              <li>Introduction to Delta PLC ✅</li>
              <li>Understanding PLC Wiring (Input and Output) ✅</li>
              <li>PLC Programming: Moving Box from A to B ✅</li>
              <li>Using ISP Soft as Simulator ✅</li>
              <li>PLC Exercise Sheet for ISP Soft ✅</li>
              <li>Series and Parallel Logics ✅</li>
              <li>Latching Exercise – 1 ✅</li>
              <li>Latching Exercise – 2 ✅</li>
              <li>Latching Exercise – 3 ✅</li>
              <li>Latching Exercise – 4 ✅</li>
              <li>Interlocking Exercise ✅</li>
              <li>Latching with SET and RESET Exercise 1 to 5 ✅</li>
              <li>Latching with SET and RESET Exercise – 6 ✅</li>
              <li>PLC Programming From A to B using SET and RESET ✅</li>
              <li>Timer Exercise – 1 to 3 ✅</li>
              <li>Timer Exercise – 4 ✅</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default withHero(DeltaPLC, {
  title: "Delta PLC Training",
  description: "",
  bgGradient: "rgb(0 33 38 / 55%)",
});
