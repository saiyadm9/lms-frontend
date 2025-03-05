import React from "react";

const AboutOurCourse = () => {
  return (
    <section className="my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex justify-center items-center p-4 bg-yellow-100 rounded-xl">
            <span className="text-yellow-500 text-4xl mb-0">
              <svg
                className="w-12 h-12"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="tv"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                ></path>
              </svg>
            </span>
            <div className="ml-4 text-lg font-normal mb-0">
              <div className="flex">
                <span className="text-4xl font-bold">10</span>
                <span className="text-4xl">K</span>
              </div>
              <p className="mb-0">Online Courses</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-blue-100 rounded-xl">
            <span className="text-blue-500 text-4xl mb-0">
              <svg
                className="w-12 h-12"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-tie"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
                ></path>
              </svg>
            </span>
            <div className="ml-4 text-lg font-normal mb-0">
              <div className="flex">
                <span className="text-4xl font-bold">200</span>
                <span className="text-4xl">+</span>
              </div>
              <p className="mb-0">Expert Tutors</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-purple-100 rounded-xl">
            <span className="text-purple-500 text-4xl mb-0">
              <svg
                className="w-12 h-12"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-graduate"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"
                ></path>
              </svg>
            </span>
            <div className="ml-4 text-lg font-normal mb-0">
              <div className="flex">
                <span className="text-4xl font-bold">60</span>
                <span className="text-4xl">K+</span>
              </div>
              <p className="mb-0">Online Students</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-cyan-100 rounded-xl">
            <span className="text-cyan-500 text-4xl mb-0">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                role="img"
                focusable="false"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
              </svg>
            </span>
            <div className="ml-4 text-lg font-normal mb-0">
              <div className="flex">
                <span className="text-4xl font-bold">6</span>
                <span className="text-4xl">K+</span>
              </div>
              <p className="mb-0">Certified Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurCourse;
