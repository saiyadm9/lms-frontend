const LMSStats = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-6 relative"
      style={{
        backgroundImage: "url('/images/study-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto text-center relative z-5">
        <h2 className="text-4xl font-semibold mb-6 text-white sm:text-3xl">
          Why Choose Our LMS?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-white sm:text-base">
          Elevate your learning experience with top-tier courses, expert
          guidance, and a supportive community.
        </p>

        <div className="stats shadow backdrop-blur-md bg-opacity-70 p-12 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="stat">
              <div className="stat-title">Year Founded</div>
              <div className="stat-value text-primary">2010</div>
            </div>

            <div className="stat">
              <div className="stat-title">Schools</div>
              <div className="stat-value">10</div>
            </div>

            <div className="stat">
              <div className="stat-titile">Nationalities</div>
              <div className="stat-value">30+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Average Class Size</div>
              <div className="stat-value">12</div>
            </div>
            <div className="stat">
              <div className="stat-title">University Acceptance Rate</div>
              <div className="stat-value">98</div>
            </div>
            <div className="stat">
              <div className="stat-title">Students</div>
              <div className="stat-value">5500</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSStats;
