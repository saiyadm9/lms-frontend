import withHero from "@/components/hoc/withHero";

const Stem = () => {
  return (
    <div>
      <h1>STEM</h1>
    </div>
  );
};

export default withHero(Stem, {
  title: "Welcome to STEM",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});
