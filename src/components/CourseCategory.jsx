import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaBullhorn,
  FaCamera,
  FaBriefcase,
  FaMusic,
} from "react-icons/fa";

const Categories = ({ categories }) => {
  const categoryIcons = {
    "Web Development": (
      <FaCode className="text-4xl text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Graphic Design": (
      <FaPalette className="text-4xl text-purple-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Data Science": (
      <FaChartLine className="text-4xl text-yellow-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Mobile App Development": (
      <FaMobileAlt className="text-4xl text-green-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Digital Marketing": (
      <FaBullhorn className="text-4xl text-red-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    Photography: (
      <FaCamera className="text-4xl text-indigo-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Business Management": (
      <FaBriefcase className="text-4xl text-orange-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    "Music Production": (
      <FaMusic className="text-4xl text-pink-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Polygon Clip-Path */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/woman-with-headphones-having-video-call-laptop_23-2148854879.jpg?t=st=1740991593~exp=1740995193~hmac=c4b42468dbe9504aae8397cd2d45188008dbcd6e3766f4032b7be083c1d0c152&w=1060')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 clip-path-polygon"></div>

      <section className="relative container mx-auto py-12 px-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white bg-opacity-90 hover:bg-opacity-100 text-black"
            >
              <div className="mb-4">{categoryIcons[category.name]}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
