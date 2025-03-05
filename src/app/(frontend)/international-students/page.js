import withHero from "@/components/hoc/withHero";

const InternationalStudents = () => {
  return (
    <div>
      <h1>InternationalStudents</h1>
    </div>
  );
};

export default withHero(InternationalStudents, {
  title: "Welcome to InternationalStudents",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});
