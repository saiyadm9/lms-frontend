import withHero from "@/components/hoc/withHero";

const tuitionFees = () => {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold mt-6">tuitionFees</h1>
      <p>We provide top-notch services to help you grow.</p>
    </div>
  );
};

export default withHero(tuitionFees, {
  title: "Welcome to tuitionFees",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});
