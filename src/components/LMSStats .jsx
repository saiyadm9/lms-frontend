const LMSStats = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-6 relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg?t=st=1740930481~exp=1740934081~hmac=9acbdce8e6373697671f209a5a4055a135b0e4175980b6d6295a9d586f5fecd5&w=1060')",
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
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc">31 tasks remaining</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSStats;
